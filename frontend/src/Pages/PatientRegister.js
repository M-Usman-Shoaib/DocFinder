import React, {useState} from "react";
import axios from "axios";

const PatientRegister = () => {
      const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [city, setCity] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/patients/register', {
        name,
        email,
        password,
        age,
        phone_no: phoneNo,
        city,
      });

      console.log(response.data); // Handle the response data as needed

      // Reset the form fields
      setName('');
      setEmail('');
      setPassword('');
      setAge('');
      setPhoneNo('');
      setCity('');
    } catch (error) {
      console.error(error);
    }
  };

  // return(
  //     <div className="background pt-2">
  //         <h1 className="mt-5 text-center tagline ">Patient Registration</h1>
  //
  //
  //     </div>
  // )

  return (
    <div>
      <h1>Register as a Patient</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default PatientRegister