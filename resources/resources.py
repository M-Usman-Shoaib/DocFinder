from flask import request, jsonify
from flask_restful import Resource
from database.models import patients, doctors, appointments


class RegisterPatient(Resource):
    def post(self):
        # Get the data from the request
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        age = data.get('age')
        phone_no = data.get('phone_no')
        city = data.get('city')
        password = data.get('password')

        # Check if the email or phone number already exist in the database
        if patients.objects(email=email).first():
            return {'error': 'This Email is already registered'}, 400
        elif doctors.objects(email=email).first():
            return {'error': 'This Email is already registered'}, 400

        if patients.objects(phone_no=phone_no).first():
            return {'error': 'This Phone no. is already registered'}, 400
        elif doctors.objects(phone_no=phone_no).first():
            return {'error': 'This Phone no. is already registered'}, 400

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


class RegisterDoctor(Resource):
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

        # Check if the email or phone number already exist in the database
        if doctors.objects(email=email).first():
            return {'error': 'This Email is already registered'}, 400
        elif patients.objects(email=email).first():
            return {'error': 'This Email is already registered'}, 400

        if doctors.objects(phone_no=phone_no).first():
            return {'error': 'This Phone no. is already registered'}, 400
        elif patients.objects(phone_no=phone_no).first():
            return {'error': 'This Phone no. is already registered'}, 400

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
                rejection_check = doctors.objects(email=email, password=password, status='rejected').first()
                if approval_check:
                    return {'message': 'Login Successful'}, 200
                elif rejection_check:
                    return {'message': 'Sorry to inform that, your registration request has been rejected.'}, 403
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
                rejection_check = patients.objects(email=email, password=password, status='rejected').first()
                if approval_check:
                    return {'message': 'Login Successful'}, 200
                elif rejection_check:
                    return {'message': 'Sorry to inform that, your registration request has been rejected.'}, 403
                else:
                    return {'message': 'Your Registration Request is PENDING at the moment.'}, 403
            else:
                return {'message': 'No account found with these credentials.'}, 404
        except Exception as e:
            return {'message': f'error occurred due to {str(e)}'}, 404


class ApprovePatientRegistration(Resource):
    def put(self, patient_id):
        try:
            if patient_id:
                patient = patients.objects.get(id=patient_id)
                patient.status = "approved"
                patient.save()
                return {"message": "Patient registration approved"}, 200
            else:
                return {"message": "Invalid patient ID"}, 400

        except patients.DoesNotExist:
            return {"message": "Patient not found"}, 404
        except Exception as e:
            return {'message': f'Error occurred due to {str(e)}'}, 500


class RejectPatientRegistration(Resource):
    def put(self, patient_id):
        try:
            if patient_id:
                patient = patients.objects.get(id=patient_id)
                patient.status = "rejected"
                patient.save()
                return {"message": "Patient registration rejected"}, 200
            else:
                return {"message": "Invalid patient ID"}, 400

        except patients.DoesNotExist:
            return {"message": "Patient not found"}, 404
        except Exception as e:
            return {'message': f'Error occurred due to {str(e)}'}, 500


class ApproveDoctorRegistration(Resource):
    def put(self, doctor_id):
        try:
            if doctor_id:
                doctor = doctors.objects.get(id=doctor_id)
                doctor.status = "approved"
                doctor.save()
                return {"message": "Doctor registration approved"}, 200
            else:
                return {"message": "Invalid doctor ID"}, 400

        except patients.DoesNotExist:
            return {"message": "Doctor not found"}, 404
        except Exception as e:
            return {'message': f'Error occurred due to {str(e)}'}, 500


class RejectDoctorRegistration(Resource):
    def put(self, doctor_id):
        try:
            if doctor_id:
                doctor = doctors.objects.get(id=doctor_id)
                doctor.status = "rejected"
                doctor.save()
                return {"message": "Doctor registration rejected"}, 200
            else:
                return {"message": "Invalid doctor ID"}, 400

        except patients.DoesNotExist:
            return {"message": "Doctor not found"}, 404

        except Exception as e:
            return {'message': f'Error occurred due to {str(e)}'}, 500


class DeletePatient(Resource):
    def delete(self, patient_id):
        try:

            # Check if the patient record exists
            patient = patients.objects.filter(id=patient_id).first()
            if not patient:
                return {"message": "Patient record not found"}, 404

            # Delete the patient record
            patient.delete()

            return {"message": "Patient record deleted successfully"}, 200
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500


class DeleteDoctor(Resource):
    def delete(self, doctor_id):
        try:

            # Check if the patient record exists
            doctor = doctors.objects.filter(id=doctor_id).first()
            if not doctor:
                return {"message": "Doctor record not found"}, 404

            # Delete the patient record
            doctor.delete()

            return {"message": "Doctor record deleted successfully"}, 200
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500


class DoctorSearchByPatient(Resource):

    def get(self):

        try:
            data = request.get_json()
            speciality = data.get("speciality")
            ratings = data.get("ratings")
            city = data.get("city")

            results = self.search_doctors(speciality, ratings, city)
            return jsonify(results)
        except Exception as e:
            return {'message: ' f'Error occurred due to {str(e)}'}, 500


def search_doctors(self, speciality, ratings, city):

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
            return {'message: ' f'Error occurred due to {str(e)}'}, 500


class AppointmentRequest(Resource):
    def post(self, doctor_id):

        try:
            data = request.get_json()
            patient_id = data.get("_id")
            appointment_date = data.get("appointment_date")
            patient = patients.objects.get(id=patient_id)
            doctor = doctors.objects.get(id=doctor_id)
            status = "approved"
            appointment = appointments(patient_id=str(patient_id), doctor_id=str(doctor_id),
                                       appointment_date=appointment_date,
                                       status=status)
            appointment.save()
            return {"message": f"Appointment request sent successfully from {patient.name} to {doctor.name}."}, 200
        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500


class WithdrawalOfRequest(Resource):
    def delete(self, appointment_id):
        try:
            appointment = appointments.objects.get(id=appointment_id)
            appointment.delete()
            return {"message": "Appointment request withdrawn successfully."}, 200
        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500


class PatientAppointmentStatus(Resource):

    def get(self, patient_id):

        try:
            results = appointments.objects(patient_id=patient_id, status='approved')
            if results:
                appointment_status = []
                for appointment in results:
                    appointment_date = appointment.appointment_date.strftime(
                        "%Y-%m-%d") if appointment.appointment_date else None
                    appointment_time = appointment.appointment_time.strftime(
                        "%H:%M:%S") if appointment.appointment_time else None
                    doctor = doctors.objects(
                        id=appointment.doctor_id).first()
                    doctor_name = doctor.name if doctor else None
                    appointment_status.append({
                        "doctor_name": doctor_name,
                        "appointment_date": appointment_date,
                        "appointment_time": appointment_time,
                        "status": appointment.status
                    })
                return {'message': "Your following request has been approved.",
                        'appointment_status': appointment_status}, 200
            else:
                return {'message': "No approved appointments found for the patient."}, 404
        except Exception as e:
            return {"message": f"Error occurred due to {str(e)}"}, 500


class DoctorRatings(Resource):
    def post(self, doctor_id):
        try:
            data = request.get_json()
            ratings = data.get("ratings")
            patient_id = data.get("patient_id")

            patient = patients.objects(id=patient_id).first()
            doctor = doctors.objects(id=doctor_id).first()

            if patient and doctor:
                if doctor.examined_patient_id == patient_id:
                    if patient.has_given_rating:
                        return {"message": "You have already given a rating to this doctor."}, 400
                    else:
                        doctor.ratings = ratings
                        patient.has_given_rating = True
                        doctor.save()
                        patient.save()
                        return {"message": "Rating submitted successfully."}, 200
                else:
                    return {"message": "You are not authorized to give a rating to this doctor."}, 403
            else:
                return {"message": "Invalid patient or doctor ID."}, 404
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500


class PatientsPendingRequestLookup(Resource):

    def get(self):
        try:
            results = patients.objects(status='pending')
            if results:
                pending_patients = []
                for patient in results:
                    pending_patients.append({
                        "patient_id": patient.patient_id,
                        "name": patient.name,
                        "status": patient.status
                    })
                return {"message": "List of pending patients:",
                        "pending_patients": pending_patients}, 200
            else:
                return {"message": "No pending patients found."}, 404
        except Exception as e:
            return {"message": f"Error occurred: {str(e)}"}, 500
