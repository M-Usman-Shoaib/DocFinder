from .resources import *

def initialize_routes(api):
    api.add_resource(patientAPI, '/patientAPI/<data>', '/patientAPI/<id>/<status>')
    api.add_resource(doctorAPI, '/doctorAPI/<data>', "/doctorAPI/<id>/<status>")
    api.add_resource(searchDoctorsAPI, '/doctors/search')
    api.add_resource(appointmentAPI, '/appointmentAPI/<data>')



