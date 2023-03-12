import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AuthContext } from "../../Context/authContext";
import { useContext } from "react";
import axios from "axios";


const PhoneSignUp = (props) => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  // const { setUpRecaptha } = AuthContext();
  const { setUpRecaptha } = useContext(AuthContext);

  const navigate = useNavigate();

  // console.log(props.getNumber);

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  // const changePage =async (e)=>
  // {
  //   if (number === "" || number === undefined)
  //     return setError("Please enter a valid phone number!");
  //   try {
  //     // await axios.post("/auth/registerMobile", number);
  //     navigate("/signup");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
     
  // }
  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
  props.getNumber(number);
  // navigate("/signup");
      // changePage();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        {/* <h2 className="mb-3">Firebase Phone Auth</h2> */}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            {/* <Link to="/"> */}
              <Button variant="secondary">Cancel</Button>
            {/* </Link> */}
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            {/* <Link to="/"> */}
              <Button variant="secondary">Cancel</Button>
            {/* </Link> */}
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;
