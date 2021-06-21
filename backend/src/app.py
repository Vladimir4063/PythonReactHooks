from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/pythonreactdb'
mongo = PyMongo(app)

db = mongo.db.pythonreact

@app.route('/users', methods = ['POST'])
def createUser():
    return 'receivedo'


#Obtener todos los usuarios / get all users
@app.route('/users', methods = ['GET'])
def getUsers():
    users= []
    for doc in db.find():
        pass
    return jsonify()

if __name__ == "__main__":
    app.run(debug=True)
