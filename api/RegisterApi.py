from flask_restful import Api, Resource, reqparse
from pymongo import MongoClient
from flask import redirect
class RegisterApi(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Hello RegisterApi Handler"
      }

  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str)
    parser.add_argument('email', type=str)
    parser.add_argument('handle', type=str)
    parser.add_argument('password', type=str)

    args = parser.parse_args()
    name = args['name']
    email = args['email']
    handle = args['handle']
    password = args['password']
    mongoURI = 'mongodb+srv://dev:l0o0zIHisfO5MQ17@cluster0.ljtdt.mongodb.net/BetterBinge?retryWrites=true&w=majority'
    client = MongoClient(mongoURI)
    db = client.BetterBinge
    print(db.name)
    if db.users.find_one({email: email}):
      # User found
      return {'resultStatus': "Email already in use"}
    else: 
      # User not found
      # Insert user
      db.users.insert_one({name:name,
        email: email,
        handle: handle,
        password: password
      })
      return {
      'resultStatus': 'SUCCESS',
      'message': "Successfully registered"
      }
      

    # Check with database if email/handle is taken
    # If taken send error message to frontend
    # Else 
    #   encrypt password
    #   add user info to database
    #   send to login page or login and send to home page
    # # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    # request_type = args['type']
    # request_json = args['message']
    # # ret_status, ret_msg = ReturnData(request_type, request_json)
    # # currently just returning the req straight
    # ret_status = request_type
    # ret_msg = request_json

    # if ret_msg:
    #   message = "Your Message Requested: {}".format(ret_msg)
    # else:
    #   message = "No Msg"
    
    # final_ret = {"status": "Success", "message": message}

    # return final_ret