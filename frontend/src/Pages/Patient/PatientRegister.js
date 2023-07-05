import React, { useState } from "react";
import axios from "axios";
import { useFormik } from 'formik'
import {PatientValidation} from "../../Components/Patient/PatientValidation";

const PatientRegister = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/patients/register", {
        name,
        email,
        password,
        age,
        phone_no: phoneNo,
        city,
      });

      console.log(response.data); // Handle the response data as needed

      // Reset the form fields
      setName("");
      setEmail("");
      setPassword("");
      setAge("");
      setPhoneNo("");
      setCity("");
    } catch (error) {
      console.error(error);
    }
  };

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues : {
        name : "",
        email : "",
        age : "",
        password : "",
        city : "",
        phone_no : "",
      },
    validationSchema : PatientValidation,
    onSubmit : handleRegister,
  })

  return (
    <div className="background pt-2 pb-5">
      <h1 className="mt-5 text-center tagline">Patient Registration</h1>

      <section className="vh-25">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-8">
              <div className="card text-black cardBorder transparentCard border mt-5">
                <div className="card-body p-md-1">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">

                      <p className="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-center formText ps-1">Enter your details:</p>

                      <form className="mx-1 mx-md-4 formText justify-content-center" onSubmit={handleRegister}>

                        <div className="mb-4">
                          <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="number"
                            id="age"
                            placeholder="Age"
                            value={age}
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            id="city"
                            className="form-control"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            id="phone_no"
                            className="form-control"
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            placeholder="Phone Number"
                          />
                        </div>

                        <div className="d-flex mx-4 mb-3 mb-lg-4 justify-content-center">
                          <button type="submit" className="btn customButton">Register</button>
                        </div>

                      </form>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientRegister;

