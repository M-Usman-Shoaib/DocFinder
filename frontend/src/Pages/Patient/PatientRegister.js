import React, { useState } from "react";
import axios from "axios";
import { useFormik } from 'formik'
import {PatientValidation} from "../../Components/Patient/PatientValidation";

const onSubmit = async (values, actions)=>{
  try {
    const response = await axios.post("http://127.0.0.1:5000/api/patients/register", values);
        console.log(response.data); // Handle the response data as needed

        // Reset the form fields
        actions.resetForm();
  }catch (error) {
    console.error(error)
  }
}

const PatientRegister = () => {

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
    onSubmit,
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

                      <form className="mx-1 mx-md-4 formText justify-content-center" onSubmit={handleSubmit}
                            autoComplete="off">

                        <div className="mb-4">
                          <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`}
                          />
                          {errors.name && touched.name && <p className="inputErrorText mt-1 ms-1">{errors.name}</p>}

                        </div>

                        <div className="mb-4">
                          <input
                            type="number"
                            id="age"
                            placeholder="Age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control ${errors.age && touched.age ? "is-invalid" : ""}`}

                          />
                          {errors.age && touched.age && <p className="inputErrorText mt-1 ms-1">{errors.age}</p>}

                        </div>

                        <div className="mb-4">
                          <input
                            type="email"
                            id="email"
                            className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                          />
                          {errors.email && touched.email && <p className="inputErrorText mt-1 ms-1">{errors.email}</p>}

                        </div>

                        <div className="mb-4">
                          <input
                            type="password"
                            id="password"
                            className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Password"
                          />
                          {errors.password && touched.password && <p className="inputErrorText mt-1 ms-1">{errors.password}</p>}

                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            id="city"
                            className={`form-control ${errors.city && touched.city ? "is-invalid" : ""}`}
                            placeholder="City"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.city && touched.city && <p className="inputErrorText mt-1 ms-1">{errors.city}</p>}
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            id="phone_no"
                            className={`form-control ${errors.phone_no && touched.phone_no ? "is-invalid" : ""}`}
                            value={values.phone_no}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone Number"
                          />
                          {errors.phone_no && touched.phone_no && <p className="inputErrorText mt-1 ms-1">{errors.phone_no}</p>}
                        </div>

                        <div className="d-flex mx-4 mb-3 mb-lg-4 justify-content-center">
                          <button disabled={isSubmitting} type="submit" className="btn customButton">Register</button>
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

