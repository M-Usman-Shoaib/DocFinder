import React, {useState} from "react";
import axios from "axios";
import {useFormik} from "formik";
import {DoctorValidation} from "../../Components/Doctor/DoctorValidation";


const onSubmit = async (e,values, actions)=>{
    console.log("onsubmit")
    e.preventDefault()
  try {
    const response = await axios.post("http://127.0.0.1:5000/api/doctors/register", values);
        console.log(response.data); // Handle the response data as needed

        // Reset the form fields
        actions.resetForm();

      // Return a promise that resolves when the form is successfully submitted
        return Promise.resolve();

  }catch (error) {
    console.error(error)
  }
}


const DoctorRegister = () => {

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues : {
        name : "",
        email : "",
        age : "",
        password : "",
        city : "",
        phone_no : "",
        gender : "",
        speciality : "",
        experience : "",
        hospital_name : "",
      },
    validationSchema : DoctorValidation,
    onSubmit,
  });


  return (
    <div className="background pt-2 pb-5 ">
      <h1 className="mt-5 text-center tagline ">Doctor Registration</h1>

      <section className="vh-10 ">
        <div className="container h-10">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-8">
              <div className="card text-black cardBorder transparentCard border mt-5 " >
                <div className="card-body p-md-1">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">

                      <p className=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 formText text-center ps-1">Enter your details</p>

                      <form className="mx-1 mx-md-4 formText " autoComplete="off">



                          <div className="mb-4">
                            <input type="text" id="name" placeholder="Name"
                                   value={values.name}
                                   className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`}
                                   onChange={handleChange}
                                    onBlur={handleBlur}/>

                              {errors.name && touched.name && <p className="inputErrorText mt-1 ms-1">{errors.name}</p>}

                          </div>

                          <div className="form-outline flex-fill mb-4">
                            <input type="text" id="gender" placeholder="Gender (e.g. Male)"
                                    value={values.gender}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                   className={`form-control ${errors.gender && touched.gender ? "is-invalid" : ""}`}
                            />
                              {errors.gender && touched.gender && <p className="inputErrorText mt-1 ms-1">{errors.gender}</p>}
                          </div>




                          <div className=" mb-4">
                            <input type="email" id="email"
                                   className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                                   onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                   placeholder="Email"/>
                              {errors.email && touched.email && <p className="inputErrorText mt-1 ms-1">{errors.email}</p>}

                          </div>



                          <div className="form-outline flex-fill mb-4">
                            <input type="password" id="password"
                                   className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`}
                                   value={values.password}
                                   onChange={handleChange}
                                    onBlur={handleBlur}
                                   placeholder="Password"

                            />
                              {errors.password && touched.password && <p className="inputErrorText mt-1 ms-1">{errors.password}</p>}

                          </div>




                          <div className="form-outline flex-fill mb-4">
                            <input type="text" id="city"
                                   className={`form-control ${errors.city && touched.city ? "is-invalid" : ""}`}
                                   placeholder="City"
                             value={values.city}
                              onChange={handleChange}
                                    onBlur={handleBlur}/>
                              {errors.city && touched.city && <p className="inputErrorText mt-1 ms-1">{errors.city}</p>}
                          </div>




                          <div className="mb-4">
                            <input type="text" id="speciality"
                                   className={`form-control ${errors.speciality && touched.speciality ? "is-invalid" : ""}`}
                                   placeholder="Speciality (e.g. Skin)"
                             value={values.speciality}
                              onChange={handleChange}
                                    onBlur={handleBlur}/>
                              {errors.speciality && touched.speciality && <p className="inputErrorText mt-1 ms-1">{errors.speciality}</p>}
                          </div>




                          <div className=" mb-4">
                            <input type="number" step="0.1" id="experience"
                                   className={`form-control ${errors.experience && touched.experience ? "is-invalid" : ""}`}
                                    placeholder="Experience in years"
                                    value={values.experience}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                              {errors.experience && touched.experience && <p className="inputErrorText mt-1 ms-1">{errors.experience}</p>}
                          </div>




                          <div className=" mb-4">
                            <input type="text"  id="hospital_name"
                                   className={`form-control ${errors.hospital_name && touched.hospital_name ? "is-invalid" : ""}`}
                                   placeholder="Hospital/Clinic Name"
                             value={values.hospital_name}
                              onChange={handleChange}
                                    onBlur={handleBlur}/>
                              {errors.hospital_name && touched.hospital_name && <p className="inputErrorText mt-1 ms-1">{errors.hospital_name}</p>}
                          </div>




                          <div className=" mb-4">
                            <input type="text" id="phone_no"
                                   className={`form-control ${errors.phone_no && touched.phone_no ? "is-invalid" : ""}`}
                                   value={values.phone_no}
                                   onChange={handleChange}
                                    onBlur={handleBlur}
                                   placeholder="Phone Number"/>
                              {errors.phone_no && touched.phone_no && <p className="inputErrorText mt-1 ms-1">{errors.phone_no}</p>}
                          </div>



                        <div className="d-flex mx-4 mb-3 mb-lg-4 justify-content-center">
                          <button disabled={isSubmitting}  type="submit" onClick={onSubmit} className="btn customButton">Register</button>
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
  )
}

export default DoctorRegister