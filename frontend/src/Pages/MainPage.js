import React from 'react'

const MainPage = () => {
  return (
      <main >
          <h1 className="mt-5 text-center border rounded shadow p-3 mb-5 bg-body-dark ">Welcome to DocFinder</h1>
        <section1>
            <div className="container mt-5">
                <div className="row justify-content-between ">
                    <div className="col-4 text-center border rounded pt-4 pb-5 shadow p-3 mb-5 bg-body-dark rounded yellow-background" >
                        <h3>SignUps for new users</h3>
                        <div className="">
                            <a href="#" className="btn btn-secondary mt-4 button " tabIndex="-1" role="button"
                               aria-disabled="true">Admin SignUp</a>
                            <br/>
                             <a href="#" className="btn btn-secondary mt-3 shadow-sm  rounded" tabIndex="-1" role="button"
                               aria-disabled="true">Doctor SignUp</a>
                            <br/>
                             <a href="#" className="btn btn-secondary mt-3" tabIndex="-1" role="button"
                               aria-disabled="true">Patient SignUp</a>
                            <br/>
                        </div>

                    </div>

                     <div className="col-4 text-center border rounded pt-4 pb-5 shadow p-3 mb-5 bg-body-dark rounded yellow-background">
                        <h3>LogIn for new users</h3>
                        <div className="">
                            <a href="#" className="btn btn-secondary mt-4" tabIndex="-1" role="button"
                               aria-disabled="true">Admin LogIn</a>
                            <br/>
                             <a href="#" className="btn btn-secondary mt-3" tabIndex="-1" role="button"
                               aria-disabled="true">Doctor LogIn</a>
                            <br/>
                             <a href="#" className="btn btn-secondary mt-3" tabIndex="-1" role="button"
                               aria-disabled="true">Patient LogIn</a>
                            <br/>
                        </div>

                    </div>
                </div>
            </div>
        </section1>

      </main>
  )
}

export default MainPage