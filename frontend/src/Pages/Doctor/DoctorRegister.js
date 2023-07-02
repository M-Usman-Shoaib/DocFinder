import React, {useState} from "react";
import axios from "axios";


const DoctorRegister = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [city, setCity] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/doctors/register', {
        name,
        email,
        password,
        gender,
        speciality,
        experience,
        hospital_name: hospitalName,
        phone_no: phoneNo,
        city,
      });

      console.log(response.data); // Handle the response data as needed

      // Reset the form fields
      setName('');
      setEmail('');
      setPassword('');
      setGender('');
      setSpeciality('');
      setExperience('');
      setHospitalName('')
      setPhoneNo('');
      setCity('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background pt-2 pb-5 ">
      <h1 className="mt-5 text-center tagline ">Doctor Registration</h1>

      <section className="vh-10 ">
        <div className="container h-10">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black cardBorder transparentCard border mt-5 " >
                <div className="card-body p-md-1">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">

                      <p className=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 formText ps-3">Enter your details</p>

                      <form className="mx-1 mx-md-4 formText" onSubmit={handleRegister}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="name" placeholder="Name" value={name}
                                   className="form-control"
                                   onChange={(e) => setName(e.target.value)}/>

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="gender" placeholder="Gender (e.g. Male)"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                   className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" className="form-control"
                                   onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                   placeholder="Email"/>

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"

                            />

                          </div>
                        </div>

                       <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="city" className="form-control" placeholder="City"
                             value={city}
                              onChange={(e) => setCity(e.target.value)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="speciality" className="form-control" placeholder="Speciality (e.g. Skin)"
                             value={speciality}
                              onChange={(e) => setSpeciality(e.target.value)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" step="0.1" id="experience" className="form-control"
                                    placeholder="Experience in years"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text"  id="" className="form-control"
                                   placeholder="Hospital/Clinic Name"
                             value={hospitalName}
                              onChange={(e) => setHospitalName(e.target.value)}/>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="phone_no" className="form-control"
                                   value={phoneNo}

                                   onChange={(e) => setPhoneNo(e.target.value)}
                                   placeholder="Phone Number"/>
                          </div>
                        </div>


                        <div className="d-flex mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn customButton">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">

                      <img src={process.env.PUBLIC_URL + "/images/docRegister.png"}
                            className="img-fluid p-5 "
                            alt="patient registration"/>

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