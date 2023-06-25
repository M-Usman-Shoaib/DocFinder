from .resources import  registerPatient, registerDoctor, DoctorLogin, PatientLogin


def initialize_routes(api):
    api.add_resource(registerPatient, '/api/patients/register')
    api.add_resource(registerDoctor, '/api/doctors/register')
    api.add_resource(DoctorLogin, '/api/doctors/login')
    api.add_resource(PatientLogin, '/api/patients/login')

