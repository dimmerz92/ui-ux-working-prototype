import datetime
import psycopg2
import hashlib

DATABASE = "fundamentalysedb"
HOST = "localhost"
PORT = 5432
SALT = "75F!b5d3@"

def connect():
    conn = psycopg2.connect(host=HOST, port=PORT, database=DATABASE)
    cur = conn.cursor()
    return conn, cur

def disconnect(conn, cur):
    conn.close()
    cur.close()

def login(username, password):
    data = {"status": 0, "data": 0}
    try:
        conn, cur = connect()
        cur.execute("""
            SELECT password
            FROM test_users
            WHERE username = %s
            """, (username,))
        pwd = cur.fetchone()[0]
    except TypeError:
        disconnect(conn, cur)
        return data
    except Exception as e:
        log_error(e)
        disconnect(conn, cur)
        return -1
    
    try:
        h = hashlib.new("SHA256")
        h.update((password + SALT).encode())
        input = h.hexdigest()
        if pwd == input:
            data["status"] = True
            data["data"] = get_workspaces(username)
    except Exception as e:
        log_error(e)
        disconnect(conn, cur)
        return -1
    
    disconnect(conn, cur)
    return data

def sign_up(username, email, password):
    try:
        h = hashlib.new("SHA256")
        h.update((password + SALT).encode())
        pwd = h.hexdigest()
        conn, cur = connect()
        cur.execute("""
            INSERT INTO test_users ('username', 'email', 'password')
            VALUES (%s, %s, %s)
            """, (username, email, pwd))
        success = cur.rowcount
    except Exception as e:
        log_error(e)
        disconnect(conn, cur)
        return -1
    
    disconnect(conn, cur)
    return success
    
def get_workspaces(username):
    try:
        conn, cur = connect()
        cur.execute("""
            SELECT tw.document
            FROM test_users AS tu
            LEFT JOIN test_workspaces AS tw ON tu.username = tw.username
            WHERE tu.username = %s
            """, (username,))
        data = cur.fetchone()
    except TypeError:
        disconnect(conn, cur)
        return data
    except Exception as e:
        log_error(e)
        disconnect(conn, cur)
        return data
    (data,) = data
    disconnect(conn, cur)
    return data

def log_error(error):
    with open("backend/logs/logins.txt", "a") as f:
        f.write(f"{datetime.datetime.now()}\t{error}\n") 