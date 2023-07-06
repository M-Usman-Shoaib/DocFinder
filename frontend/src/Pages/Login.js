import React from 'react'

const Login = () => {
  return (
      <div className="background pt-2 pb-5 ">
          <h1 className="mt-5 text-center tagline ">Login page</h1>

          <div className="row align-items-center mt-3">
              <div className="col-1"></div>
              <div className="col-10 mx-5">
                <h3 className="mx-5 mt-5">Patient ?</h3>
                <p className="mt-2 mx-5">
                  If you want to login as a patient click here:
                     <a href="/patientLogin" className="btn customButton ms-2 " role="button" data-bs-toggle="button">Patient</a>

                </p>
                  <h3 className="mx-5 mt-5">Doctor ?</h3>
                <p className="mt-2 mx-5">
                  If you want to login as a doctor click here:
                     <a href="/doctorLogin" className="btn customButton ms-2 " role="button" data-bs-toggle="button">Doctor</a>

                </p>

              </div>
              <div className="col-1"></div>
          </div>
      </div>
  )
}

export default Login