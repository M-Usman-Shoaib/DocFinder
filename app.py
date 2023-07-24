from flask import Flask, jsonify, request, render_template, session
from database import dbinitialization
from database.models import patients, doctors, appointments
from flask_restful import Api
from resources import routes
from flask_session import Session

app = Flask(__name__, static_url_path='/static')

app.secret_key="bsjvhusdhg5565645"

app.config["SESSION_TYPE"]="filesystem"
app.config["SESSION_PERMANENT"]=False
Session(app)

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
    return render_template("patientRegistration.html", title='Patient Registration')


@app.route('/doctorRegistration')
def doctorRegistration():
    return render_template("doctorRegistration.html")


@app.route('/admin')
def admin():
    return render_template("adminMainPage.html")


@app.route('/patientMainPage')
def patient():
   return render_template("patientMainPage.html")


@app.route('/doctorMainPage')
def doctors():
    return render_template("doctorMainPage.html")


@app.route('/searchDoctors')
def searchDoctors():
    return render_template("searchDoctors.html")


@app.route('/doctorRecords')
def doctorRecords():
    return render_template("doctorsRecords.html")


@app.route('/showPendingPatients')
def showPatients():
    return render_template("displayPendingPatients.html")


@app.route('/showPendingDoctors')
def showDoctors():
    return render_template("displayPendingDoctors.html")


@app.route('/showRegisteredPatients')
def showRegisteredPatients():
    return render_template("registeredPatients.html")


@app.route('/showRegisteredDoctors')
def showRegisteredDoctors():
    return render_template("registeredDoctors.html")


@app.route('/patientlogin')
def patientlogin():
    return render_template("patientLogin.html")


@app.route('/doctorlogin')
def doctorlogin():
    return render_template("doctorLogin.html")


@app.route('/patientLogin', methods=['POST'])
def patientLogin():
    try:
        email = request.form['email']
        password = request.form['password']
        login_check = patients.objects(email=email, password=password).first()
        if login_check:
            approval_check = patients.objects(email=email, password=password, status='approved').first()
            rejection_check = patients.objects(email=email, password=password, status='rejected').first()
            if approval_check:
                # Save the patient's ID in the session
                session["patient_id"] = login_check.id

                # Redirect to the patientMainPage.html
                return render_template("patientMainPage.html")

            elif rejection_check:
                return {'message': 'Sorry to inform that, your registration request has been rejected.'}, 403
            else:
                return {'message': 'Your Registration Request is PENDING at the moment.'}, 403
        else:
            return {'message': 'No account found with these credentials.'}, 404
    except Exception as e:
        return {'message': f'error occurred due to {str(e)}'}, 404


# @app.route('/doctorLogin', methods=['POST'])
# def doctorLogin():
#     try:
#         email = request.form['email']
#         password = request.form['password']
#         login_check = doctors.objects(email=email, password=password).first()
#         if login_check:
#             approval_check = doctors.objects(email=email, password=password, status='approved').first()
#             rejection_check = doctors.objects(email=email, password=password, status='rejected').first()
#             if approval_check:
#                 return render_template("doctorMainPage.html")
#             elif rejection_check:
#                 return {'message': 'Sorry to inform that, your registration request has been rejected.'}, 403
#             else:
#                 return {'message': 'Your Registration Request is PENDING at the moment.'}, 403
#         else:
#             return {'message': 'No account found with these credentials.'}, 404
#     except Exception as e:
#         return {'message': f'error occurred due to {str(e)}'}, 404

# @app.route('/fetchPatientID')
# def fetchPatientID():
#     patient_id = session.get("patient_id")
#     if patient_id is not None:
#         return jsonify(patient_id)
#     else:
#         return {'message': 'Patient ID not found in the session.'}, 404


@app.route('/pendingPatientAppointments')
def pendingPatientAppointments():
    return render_template("withdrawPendingAppointments.html")


@app.route('/approvedPatientAppointments')
def approvedPatientAppointments():
    return render_template("withdrawApprovedAppointments.html")


@app.route('/examinedPatientAppointments')
def examinedPatientAppointments():
    return render_template("withdrawExaminedAppointments.html")


@app.route('/pendingAppointments')
def pendingAppointments():
    return render_template("pendingAppointments.html")


@app.route('/approvedAppointments')
def approvedAppointments():
    return render_template("approvedAppointments.html")


@app.route('/examinedAppointments')
def examinedAppointments():
    return render_template("examinedAppointments.html")



if __name__ == '__main__':
    app.run(debug=True)











