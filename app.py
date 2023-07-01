from flask import Flask, jsonify, request, render_template
from database import dbinitialization
from flask_restful import Api
from resources import routes
from flask_cors import CORS
from flask_session import Session

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
app.config['DEBUG'] = True

# Flask instance and mongo db url configuration
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost:27017/DocFinder'}

# initialize db
dbinitialization.initialize_db(app)

# flask API instance creation
api = Api(app)

# initialize routes
routes.initialize_routes(api)


if __name__ == '__main__':
    app.run(debug=True)











