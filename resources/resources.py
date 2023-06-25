from flask import request
from flask_restful import Resource
from database.models import patients, doctors


class registerPatient(Resource):
    def post(self):
        # Get the data from the request
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        age = data.get('age')
        phone_no = data.get('phone_no')
        city = data.get('city')
        password = data.get('password')

        # Store the data in the MongoDB collection
        registration_data = {
            'name': name,
            'age': age,
            'city': city,
            'email': email,
            'phone_no': phone_no,
            'password': password,
            'status': "pending"
        }
        patients(**registration_data).save()

        # Return a success message
        return {'message': 'Registration pending'}, 200

class registerDoctor(Resource):
    def post(self):
        # Get the data from the request
        data = request.get_json()
        name = data.get('name')
        gender = data.get('gender')
        speciality = data.get('speciality')
        experience = data.get('experience')
        hospital_name = data.get('hospital_name')
        city = data.get('city')
        email = data.get('email')
        phone_no = data.get('phone_no')
        password = data.get('password')

        # Store the data in the MongoDB collection
        registration_data = {
            'name': name,
            'gender': gender,
            'speciality': speciality,
            'experience': experience,
            'hospital_name': hospital_name,
            'city': city,
            'email': email,
            'phone_no': phone_no,
            'password': password,
            'status': "pending"
        }
        doctors(**registration_data).save()

        # Return a success message
        return {'message': 'Registration pending'}, 200

