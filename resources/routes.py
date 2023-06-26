from .resources import  RegisterPatient, RegisterDoctor, DoctorLogin, PatientLogin, ApprovePatientRegistration, \
ApproveDoctorRegistration, RejectPatientRegistration, RejectDoctorRegistration, DeletePatient, DeleteDoctor

def initialize_routes(api):
    api.add_resource(RegisterPatient, '/api/patients/register')
    api.add_resource(RegisterDoctor, '/api/doctors/register')
    api.add_resource(DoctorLogin, '/api/doctors/login')
    api.add_resource(PatientLogin, '/api/patients/login')
    api.add_resource(ApprovePatientRegistration, '/api/patients/approveRegistration/<patient_id>')
    api.add_resource(RejectPatientRegistration, '/api/patients/rejectRegistration/<patient_id>')
    api.add_resource(ApproveDoctorRegistration, '/api/doctors/approveRegistration/<doctor_id>')
    api.add_resource(RejectDoctorRegistration, '/api/doctors/rejectRegistration/<doctor_id>')
    api.add_resource(DeletePatient, '/api/patients/delete/<patient_id>')
    api.add_resource(DeleteDoctor, '/api/doctors/delete/<doctor_id>')

