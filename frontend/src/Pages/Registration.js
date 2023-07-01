import React from 'react'

const Registration = () => {
  return (
      <div className="background pt-2">
            <h1 className="mt-5 text-center tagline ">Registration page</h1>

          <div className="row align-items-center mt-3">
              <div className="col-1"></div>
              <div className="col-10 mx-5">
                <h3 className="mx-5 mt-5">Patient ?</h3>
                <p className="mt-2 mx-5">
                  If you want to register as a patient click here:
                     <a href="/registration/patientRegister" className="btn customButton ms-2 " role="button" data-bs-toggle="button">Patient</a>

                </p>
                  <h3 className="mx-5 mt-5">Doctor ?</h3>
                <p className="mt-2 mx-5">
                  If you want to register as a doctor click here:
                     <a href="#" className="btn customButton ms-2 " role="button" data-bs-toggle="button">Doctor</a>

                </p>

              </div>
              <div className="col-1"></div>
          </div>
      </div>
  )
}

export default Registration