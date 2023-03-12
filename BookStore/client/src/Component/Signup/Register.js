import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import firebase from "../../Firebase/firebase";
import PhoneSignUp from "../PhoneSignup/PhoneSignUp"

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    c_password:"",
    college_name: "",
    course: "",
    branch: "",
    m_no: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleMobile = async (e)=>{
  //   let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
  //   let number = '+917878846772';
  //   firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
  //     let code = prompt('enter the otp','');
  //     if(code==null)return;
  //     e.confirm(code).then(function(result){
  //       console.log(result.user,"user");
  //     })
  //   })
  // }
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log(inputs);
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  const takeNumber=(mo_no)=>{
    console.log(mo_no);
    setInputs((prev) => ({ ...prev, "m_no": mo_no }));

    // handleChange(m_no);
  }

  return (
    <div className="auth">
      
        <div className="log-container">
          <div className="log-main-container">
            <h1 className="Welcome">Register</h1>
            <div className="form-container">
             
                <div id="f">
                  <div id="lf">
                  <div className="input-fields">
                  <label className="label">
                    Full Name <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields">
                  <label className="label">
                  username <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields">
                  <label className="label">
                    Password <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields">
                  <label className="label">
                    Confirm Password <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Confirm Password"
                    name="c_password"
                    onChange={handleChange}
                  />
                </div>
                  </div>
                  <div id="rf">
                  <div className="input-fields">
                  <label className="label">
                    Email <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="email"
                    className="input-box"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields">
                  <label className="label">
                    College Name <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter College Name"
                    name="college_name"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-fields">
                  <label className="label">
                    Course <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter course"
                    name="course"
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="input-fields">
                  <label className="label">
                    Mobile Number <span className="text-danger">*</span>
                    <span className="errorMsg"></span>
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter Mobile No"
                    name="m_no"
                    onChange={handleChange}
                  />
                </div> */}
                <PhoneSignUp getNumber={takeNumber} />
                  </div>
                </div>
                
                <div className="navigation1">
                  <label>
                    <span>
                    Do you have an account? <Link to="/login">Login</Link>
                    </span>
                  </label>
                </div>
                <div className="form-button">
                  <button
                    type="submit"
                    name="submit"
                    className="btn-submit"
                    onClick={handleSubmit}
                    // onClick={handleMobile}

                  >
                    Register
                  </button>
                  {err && <div id="err"><p>{err}</p></div>}
                </div>
              
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Register;







// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//     college_name: "",
//     course : "",
//     branch:"",
//     sem:"",
//   });
//   const [err, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     try {
//       await axios.post("/auth/register", inputs);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   return (
//     <div className="auth">
//       <h1>Register</h1>
//       <form >
//         <div id="f">
//         <div className="formdiv">
//         <input
//           required
//           type="text"
//           placeholder="username"
//           name="username"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="email"
//           placeholder="email"
//           name="email"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="password"
//           placeholder="password"
//           name="password"
//           onChange={handleChange}
//         />
//         </div>
//         <div className="formdiv">
//         <input
//           required
//           type="password"
//           placeholder="confirm password"
//           name="c_password"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="text"
//           placeholder="college_name"
//           name="college_name"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="text"
//           placeholder="course"
//           name="course"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="number"
//           placeholder="sem"
//           name="sem"
//           onChange={handleChange}
//         />
//         </div>
//         </div>
        
        
        
        

//         <button onClick={handleSubmit}>Register</button>
//         {err && <p>{err}</p>}
//         <span>
//           Do you have an account? <Link to="/login">Login</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Register;
