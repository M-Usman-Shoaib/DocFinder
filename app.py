from flask import Flask, jsonify, request, render_template
from database import dbinitialization
from flask_restful import Api
from resources import routes
from flask_session import Session

app = Flask(__name__, static_url_path='/static')


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

@app.route('/')
def home():
    return render_template('homePage.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')

@app.route('/patientRegistration')
def patientRegistration():
    return render_template("patientRegistration.html")


@app.route('/doctorRegistration')
def doctorRegistration():
    return render_template("doctorRegistration.html")


# base page
@app.route('/')
def base():
    return render_template("base.html")


if __name__ == '__main__':
    app.run(debug=True)











