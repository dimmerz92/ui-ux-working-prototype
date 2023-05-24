from flask import Flask, jsonify, request
from backend import database as db

app = Flask(__name__)

@app.route("/login", methods=["POST", "GET"])
def submit_form():
    data = db.login(request.form["username"], request.form["password"])
    status = data["status"]
    dash = data["data"]
    return jsonify(status=status, dash=dash)

@app.route("/add-workspace", methods=["POST", "GET"])
def add_workspace():
    data = request.get_json(force=True)
    user = data["username"]
    doc = data["document"]
    data = db.add_workspace(user, doc)
    return data

@app.route("/get-workspace", methods=["POST", "GET"])
def get_workspace():
    data = request.get_json(force=True)
    print(data)
    user = data["username"]
    name = data["name"]
    data = db.retrieve_workspace(user, name)
    return data