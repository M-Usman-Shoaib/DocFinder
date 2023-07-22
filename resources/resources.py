from flask import request, jsonify, Response, session
from flask_restful import Resource
from database.models import patients, doctors, appointments


class patientAPI(Resource):
    def get(self, data):
        try:
            patient = patients.objects(status=data).to_json()
            return Response(patient, mimetype="application/json", status=200)
        except Exception as e:
            return Response("Error occurred while fetching patients", status=500, mimetype="application/json")

    def post(self):
        try:
            # Get data from the form
            name = request.form["name"]
            age = request.form['age']
            city = request.form['city']
            email = request.form['email']
            phone_no = request.form['phone_no']
            password = request.form['password']

            # Check if the email or phone number already exist in the database
            if patients.objects(email=email).first():
                return {'error': 'This Email is already registered'}, 400
            elif doctors.objects(email=email).first():
                return {'error': 'This Email is already registered'}, 400

            if patients.objects(phone_no=phone_no).first():
                return {'error': 'This Phone no. is already registered'}, 400
            elif doctors.objects(phone_no=phone_no).first():
                return {'error': 'This Phone no. is already registered'}, 400

            p = patients(name=name, age=age, city=city, email=email, phone_no=phone_no, password=password, status="pending").save()

            # Return a success message
            return {'message': 'Registration pending'}, 200

        except Exception as e:
            return {'message': str(e)}, 400

    def put(self, id, status):
        try:
            patients.objects(id=id).update(status=status)
            return {"message": f"Patient registration {status}"}, 200
        except Exception as e:
            return {"message": "Invalid patient ID"}, 400

    def delete(self, data):
        try:
            # Check if the patient record exists
            patients.objects(id=data).delete()
            return {"message": "Patient record deleted successfully"}, 200

        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500


class doctorAPI(Resource):
    def get(self, data):
        try:
            doctor = doctors.objects(status=data).to_json()
            return Response(doctor, mimetype="application/json", status=200)
        except Exception as e:
            return Response("Error occurred while fetching doctors", status=500, mimetype="application/json")

    def post(self):
        try:
            # Get the form data
            name = request.form['name']
            gender = request.form['gender']
            speciality = request.form['speciality']
            experience = float(request.form['experience'])
            hospital_name = request.form['hospital_name']
            city = request.form['city']
            email = request.form['email']
            phone_no = request.form['phone_no']
            password = request.form['password']

            # Check if the email or phone number already exist in the database

            if doctors.objects(email=email).first():
                return {'error': 'This Email is already registered'}, 400
            elif patients.objects(email=email).first():
                return {'error': 'This Email is already registered'}, 400

            if doctors.objects(phone_no=phone_no).first():
                return {'error': 'This Phone no. is already registered'}, 400
            elif patients.objects(phone_no=phone_no).first():
                return {'error': 'This Phone no. is already registered'}, 400

            d = doctors(name=name, gender=gender, speciality=speciality, experience=experience, hospital_name=hospital_name, city=city, email=email, phone_no=phone_no, password=password, status="pending").save()
            # Return a success message
            return {'message': 'Registration pending'}, 200
        except Exception as e:
            return {'message': str(e)}, 400

    def put(self, id, status):
        try:
            doctors.objects(id=id).update(status=status)
            return {"message": f"Doctor registration {status}"}, 200
        except Exception as e:
            return {"message": "Invalid doctor ID"}, 400

    def delete(self, data):
        try:
            # Check if the patient record exists
            doctors.objects(id=data).delete()
            return {"message": "Patient record deleted successfully"}, 200
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500


class searchDoctorsAPI(Resource):
    def get(self):
        try:
            specialty = request.args.get("specialty")
            ratings = float(request.args.get("ratings")) if request.args.get("ratings") else None
            city = request.args.get("city")

            results = search_doctors(specialty, ratings, city)
            return jsonify(results)
        except Exception as e:
            return {'message': f'Error occurred due to {str(e)}'}, 500


class appointmentAPI(Resource):
    def get(self, data):
        try:
            appointments = patients.objects(status=data).to_json()
            return Response(appointments, mimetype="application/json", status=200)
        except Exception as e:
            return Response("Error occurred while fetching appointments", status=500, mimetype="application/json")

    def post(self, data):
        try:
            data = request.get_json()
            patient_id = "64bb6b575e730f437ba72647"
            appointment_date = data.get("appointment_date")
            patient = patients.objects.get(id=patient_id)
            doctor = doctors.objects.get(id=data)
            status = "pending"
            appointment = appointments(patient_name= patient.name, doctor_name=doctor.name,
                                       appointment_date=appointment_date,
                                       status=status).save()
            return {"message": f"Appointment request sent successfully from {patient.name} to {doctor.name}."}, 200
        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500



def search_doctors(speciality, ratings, city):
    try:
        query = {}
        if speciality:
            query["speciality"] = speciality
        if ratings:
            query["ratings"] = ratings
        if city:
            query["city"] = city

        if query:
            filtered_doctors = doctors.objects(**query)

            if filtered_doctors:
                return filtered_doctors.to_json()
            else:
                return {'message': "No such results found."}
        else:
            return {'message': "Please enter one of the fields to search"}
    except Exception as e:
        return {'message': f'Error occurred due to {str(e)}'}, 500

