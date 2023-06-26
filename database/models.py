from .dbinitialization import  db


class patients(db.Document):
    name = db.StringField(required=True)
    age = db.IntField(required=True)
    city = db.StringField(required=True)
    email = db.StringField(required=True)
    phone_no = db.StringField(required=True)
    password = db.StringField(required=True)
    status = db.StringField(required=True)


class doctors(db.Document):
    name = db.StringField(required=True)
    gender = db.StringField(required=True)
    speciality = db.StringField(required=True)
    experience = db.FloatField(required=True)
    hospital_name = db.StringField(required=True)
    ratings = db.FloatField()
    # Here ratings filed was missing so, I added it.
    # We can rate doctors out of 5. e.g. 4.3/5 etc.
    # Also, this field is not required because it will be
    # updated after a doctor has successfully registered
    # and there are some ratings from patients to show
    city = db.StringField(required=True)
    email = db.StringField(required=True)
    phone_no = db.StringField(required=True)
    password = db.StringField(required=True)
    status = db.StringField(required=True)









