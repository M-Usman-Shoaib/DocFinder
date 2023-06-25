from .resources import  registerPatient, registerDoctor


def initialize_routes(api):
    api.add_resource(registerPatient, '/api/patients/register')
    api.add_resource(registerDoctor, '/api/doctors/register')

