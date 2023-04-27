from flask import Flask, jsonify, request
from backend import database as db

app = Flask(__name__)

@app.route("/login", methods=["POST", "GET"])
def submit_form():
    data = db.login(request.form["username"], request.form["password"])
    status = data.status
    dash = data.data
    return jsonify(status=status, dash=dash)