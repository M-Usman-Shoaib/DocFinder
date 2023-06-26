from .resources import *

def initialize_routes(api):
    api.add_resource(registerPatient, '/api/patients/register')
    api.add_resource(registerDoctor, '/api/doctors/register')
    api.add_resource(DoctorLogin, '/api/doctors/login')
    api.add_resource(PatientLogin, '/api/patients/login')
    api.add_resource(DoctorSearchByPatient, '/api/patients/search')
    api.add_resource(ApprovePatientRegistration, '/api/patients/approveRegistration/<patient_id>')
    api.add_resource(RejectPatientRegistration, '/api/patients/rejectRegistration/<patient_id>')
    api.add_resource(ApproveDoctorRegistration, '/api/doctors/approveRegistration/<doctor_id>')
    api.add_resource(RejectDoctorRegistration, '/api/doctors/rejectRegistration/<doctor_id>')
    api.add_resource(DeletePatient, '/api/patients/delete/<patient_id>')
    api.add_resource(DeleteDoctor, '/api/doctors/delete/<doctor_id>')
    api.add_resource(AppointmentRequest, '/api/patients/appointment_request/<doctor_id>')
    api.add_resource(WithdrawalOfRequest, '/api/patients/appointment_request_withdrawal/<appointment_id>')
    api.add_resource(PatientAppointmentStatus, '/api/patients/appointment_status/<patient_id>')

