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
            'status': "approved"
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


class DoctorLogin(Resource):
    def post(self):
        try:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')

            login_check = doctors.objects(email=email, password=password).first()
            if login_check:
                approval_check = doctors.objects(email=email, password=password, status='approved').first()
                if approval_check:
                    return {'message': 'Login Successful'}, 200
                else:
                    return {'message': 'Your Registration Request is PENDING at the moment.'}, 403
            else:
                return {'message': 'No account found with these credentials.'}, 404
        except Exception as e:
            return {'message': f'error occurred due to {str(e)}'}, 404


class PatientLogin(Resource):
    def post(self):
        try:
            data = request.get_json()
            email = data.get('email')
            password = data.get('password')

            login_check = patients.objects(email=email, password=password).first()
            if login_check:
                approval_check = patients.objects(email=email, password=password, status='approved').first()
                if approval_check:
                    return {'message': 'Login Successful'}, 200
                else:
                    return {'message': 'Your Registration Request is PENDING at the moment.'}, 403
            else:
                return {'message': 'No account found with these credentials.'}, 404
        except Exception as e:
            return {'message': f'error occurred due to {str(e)}'}, 404




