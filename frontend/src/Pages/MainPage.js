import React from 'react'

const MainPage = () => {
  return (
      <main className="mainBackground p-3" >
          <div className="d-flex justify-content-between align-items-center">
          <h4>DocFinder</h4>
          <div>
            <a href="#" className="btn btn-outline-secondary me-2 " role="button" data-bs-toggle="button">Register</a>
            <a href="#" className="btn btn-outline-secondary" role="button" data-bs-toggle="button">LogIn</a>
          </div>
        </div>

          <h1 className="mt-5 text-center tagline ">Welcome to DocFinder</h1>

          <div className="row align-items-center">
              <div className="col-1"></div>
              <div className="col-10 text-center">
                <p className="mt-5 mx-5">
                  DocFinder is a web application designed to streamline the process of finding and
                  booking appointments with registered doctors online. With a user-friendly interface,
                  patients can easily search for doctors based on their specialties and schedule
                  appointments at their convenience.
                </p>
              </div>
              <div className="col-1"></div>
          </div>

            <div className="row align-items-center">
              <div className="col-1"></div>
              <div className="col-10 mx-5">
                <h3 className="mx-5 mt-5">New User ?</h3>
                <p className="mt-2 mx-5">
                  If you are a new user and want to register as a patient or doctor click here:
                     <a href="#" className="btn customButton ms-2 " role="button" data-bs-toggle="button">Register</a>

                </p>
                  <h3 className="mx-5 mt-4">Already have an account ?</h3>
                <p className="mt-2 mx-5">
                  If you already have an account and want to login click here:
                     <a href="#" className="btn customButton ms-2 " role="button" data-bs-toggle="button">Login</a>

                </p>

              </div>
              <div className="col-1"></div>
          </div>
        {/*<section1>*/}
        {/*    <div className="container mt-5">*/}
        {/*        <div className="row justify-content-between ">*/}
        {/*            <div className="col-4 text-center border rounded pt-4 pb-5 shadow p-3 mb-5 bg-body-dark rounded yellow-background" >*/}
        {/*                <h3>SignUps for new users</h3>*/}
        {/*                <div className="">*/}
        {/*                    <a href="#" className="btn btn-secondary mt-4 button " tabIndex="-1" role="button"*/}
        {/*                       aria-disabled="true">Admin SignUp</a>*/}
        {/*                    <br/>*/}
        {/*                     <a href="#" className="btn btn-secondary mt-3 shadow-sm  rounded" tabIndex="-1" role="button"*/}
        {/*                       aria-disabled="true">Doctor SignUp</a>*/}
        {/*                    <br/>*/}
        {/*                     <a href="#" className="btn btn-secondary mt-3" tabIndex="-1" role="button"*/}
        {/*                       aria-disabled="true">Patient SignUp</a>*/}
        {/*                    <br/>*/}
        {/*                </div>*/}

        {/*            </div>*/}

        {/*             <div className="col-4 text-center border rounded pt-4 pb-5 shadow p-3 mb-5 bg-body-dark rounded yellow-background">*/}
        {/*                <h3>LogIn for new users</h3>*/}
        {/*                <div className="">*/}
        {/*                    <a href="#" className="btn btn-secondary mt-4" tabIndex="-1" role="button"*/}
        {/*                       aria-disabled="true">Admin LogIn</a>*/}
        {/*                    <br/>*/}
        {/*                     <a href="#" className="btn btn-secondary mt-3" tabIndex="-1" role="button"*/}
        {/*                       aria-disabled="true">Doctor LogIn</a>*/}
        {/*                    <br/>*/}
        {/*                     <a href="#" className="btn btn-secondary mt-3" tabIndex="-1" role="button"*/}
        {/*                       aria-disabled="true">Patient LogIn</a>*/}
        {/*                    <br/>*/}
        {/*                </div>*/}

        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section1>*/}

      </main>
  )
}

export default MainPage