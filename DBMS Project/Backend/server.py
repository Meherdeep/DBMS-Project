import json

# import flask modules
# Request - gets details for the request
# Flask - creates the flask app
from flask import Flask, request

# import flask_cors modules
# CORS - enable Cross Origin Resource Sharing
from flask_cors import CORS

# Connect to MongoDB
from credentials import mongodb_parameters
params = mongodb_parameters()
from pymongo import MongoClient

# Setup client and database
client = MongoClient(params['dblink'])
db = client[params['database_name']]

# Create the app and enable CORS
app = Flask(__name__)
CORS(app)

# Route at which the request is processed
# http://localhost:5000/products
@app.route('/products')
def products():

    cat = request.args.get('type')
    cursor = db.products.find({'type': cat})
    response = []
    for doc in cursor:
        doc.pop('_id', 0)
        response.append(doc)
    
    # Return json response
    response = json.dumps(response)
    return response

# http://localhost:5000/register
@app.route('/register')
def register():

    reg = {
        'name': request.args.get('name'),
        'uname': request.args.get('email'),
        'password': request.args.get('pass')
    }
    print(reg)

    db.login.insert_one(reg)
    return 'Good'

# http://localhost:5000/login
@app.route('/login')
def login():

    uname = request.args.get('email')
    password = request.args.get('pass')

    val = db.login.find_one({'uname': uname})
    
    if val == None:
        return 'Bad'
    
    if val['password'] == password:
        return 'Good'
    return 'Bad'

# http://localhost:5000/shipping
@app.route('/shipping')
def shipping():

    reg = {
        'uname': request.args.get('uname'),
        'name': request.args.get('name'),
        'email': request.args.get('email'),
        'contact': request.args.get('contact'),
        'address': request.args.get('address'),
        'zip': request.args.get('zip')
    }

    try:
        db.shipping.insert_one(reg)
        return 'Good'
    except:
        return 'Bad'

# http://localhost:5000/cart
@app.route('/cart')
def cart():

    reg = {
        'uname': request.args.get('uname'),
        'item': request.args.get('item'),
        'type': request.args.get('type')
    }

    try:
        db.cart.insert_one(reg)
        return 'Success: Item added to cart'
    except:
        return 'Error: Item not added to cart'


if __name__ == '__main__':
    app.run()