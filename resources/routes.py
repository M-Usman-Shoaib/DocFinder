from resources import *


def initialize_routes(api):
    api.add_resource(patientAPI, "/patientAPI", '/patientAPI/<data>', '/patientAPI/<id>/<status>')
    api.add_resource(doctorAPI, '/doctorAPI', '/doctorAPI/<data>', "/doctorAPI/<id>/<status>")
    api.add_resource(searchDoctorsAPI, '/doctors/search')
    api.add_resource(appointmentAPI, '/appointmentAPI/<data>')
    api.add_resource(appointmentAPI2, '/appointmentAPI2/<data>')
    api.add_resource(doctorsAPI, '/doctorLogin', '/doctorLogin/<d_id>')




