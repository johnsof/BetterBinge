from flask import Flask, send_from_directory, session
from flask_session import Session
from flask_restful import Api, Resource, reqparse
# from flask_cors import CORS #comment this on deployment
from api import HelloApiHandler
from api.RegisterApi import RegisterApi


app = Flask(__name__, static_url_path='', static_folder='frontend/build')
# CORS(app) #comment this on deployment
api = Api(app)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

# api.add_resource(HelloApiHandler, '/flask/hello')
api.add_resource(RegisterApi,'/register')
