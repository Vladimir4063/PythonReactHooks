from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/pythonreactdb'
mongo = PyMongo(app)

CORS(app) #de esta forma podemos interactuar el servidor de React, con el server de Flask=Python

db = mongo.db.users

#Enviar datos
@app.route('/users', methods = ['POST'])
def createUser():
    id = db.insert({
        'name' : request.json['name'],
        'email' : request.json['email'],
        'password' : request.json['password']
    })
    return jsonify(str(ObjectId(id)))
    

#Obtener todos los usuarios / get all users
@app.route('/users', methods = ['GET'])
def getUsers():
    users= [] #Guardo los users en una lista
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'password': doc['password'] 
        })
    return jsonify(users)

@app.route('/user/<id>', methods = ['GET'])
def getUser(id):
    user = db.find_one({'_id': ObjectId(id)}) #traigo el id serializado
    print(user)
    return jsonify({
        '_id' : str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email'],
        'password': user['password']
    })

@app.route('/users/<id>', methods = ['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id)}) #entra en al base de datos y elimino desde el ID
    return jsonify({'msg': 'User deleted'})

@app.route('/users/<id>', methods = ['PUT'])
def updateUser(id):
    db.update_one({'_id': ObjectId(id)}, {'$set': {
        'name': request.json['name'],
        'email': request.json['email'],
        'password': request.json['password']
    }})
    return jsonify({'msg': 'User update'})

if __name__ == "__main__":
    app.run(debug=True)
