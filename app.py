from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/login", methods=["POST", "GET"])
def submit_form():
    #form_data = request.form
    return jsonify(status=False)