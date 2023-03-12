import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

  
  //Username Verification
  if(req.body.username.length<8)
  {
    return res.status(409).json("Enter correct Username");
  }

  

 
  //Password Verification

  var firstpassword = req.body.password;
  var secondpassword = req.body.c_password;

  if(firstpassword.length<=8)
  {
    return res.status(409).json("Password should be more than 8 Char");
  }

  // var passw = /^[A-Za-z]\w{7,14}$/;


  // if (!firstpassword.match(passw)) {
  //   return res.status(409).json("Enter correct password");
  // }

  // if (!secondpassword.match(passw)) {
  //   return res.status(409).json("Enter correct password");
  // }

  if (firstpassword == secondpassword) {
    
  }
  else{
    return res.status(409).json("Password Not Match");
  }

  //Password Verification end





 //Email Verification

 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (!req.body.email.match(mailformat))
   return res.status(409).json("Enter correct email");

 //Email Verification end





  //collegename verification

  if(req.body.college_name.length===0)
  {
    return res.status(409).json("Enter College name");
  }

  //collegename verificationend


  

  if(req.body.course.length === 0)
  {
    return res.status(409).json("Enter Course");
  }

  // if(req.body.sem.length === 0)
  // {
  //   return res.status(409).json("Enter Semester");
  // }


  //Mobile number

  // var phoneNumber = req.body.m_no;
        //     var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

        //     if (filter.test(phoneNumber)) {
        //       if(phoneNumber.length==10){
        //            var validate = true;
        //       } else {
        //           alert('Please put 10  digit mobile number');
        //           var validate = false;
        //       }
        //     }
        //     else {
              
        //       var validate = false;
        //     }

        //  if(validate==false){ 
        //   return res.status(409).json("Enter Correct Mobile Number");
        // }




  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    console.log(req.body);

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);



    const q = "INSERT INTO users(`name`,`username`,`email`,`password`,`college_name`,`course`,`m_no`) VALUES (?)";
    // const q = "INSERT INTO users(`name`,`username`,`email`,`password`,`college_name`,`course`) VALUES (?)";
    const values = [req.body.name,req.body.username, req.body.email, hash,req.body.college_name,req.body.course,req.body.m_no];
    // const values = [req.body.name,req.body.username, req.body.email, hash,req.body.college_name,req.body.course];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err );
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};



export const registerMobile = (req, res) => {

  
 


  //Mobile number

  var phoneNumber = req.body.number;
        //     var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

        //     if (filter.test(phoneNumber)) {
        //       if(phoneNumber.length==10){
        //            var validate = true;
        //       } else {
        //           alert('Please put 10  digit mobile number');
        //           var validate = false;
        //       }
        //     }
        //     else {
              
        //       var validate = false;
        //     }

        //  if(validate==false){ 
        //   return res.status(409).json("Enter Correct Mobile Number");
        // }

        console.log(req.body);
        console.log(req.body.number);



  //CHECK EXISTING USER

  const q = "SELECT * FROM users WHERE m_no=?";

  db.query(q, [req.body.number], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    console.log(req.body);

    //Hash the password and create a user
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);



    // const q = "INSERT INTO users(`name`,`username`,`email`,`password`,`college_name`,`course`,`m_no`) VALUES (?)";
    // const q = "INSERT INTO users(`m_no`) VALUES (?)";
    const q = "INSERT INTO users(`m_no`) VALUES (?)";

    // const values = [req.body.name,req.body.username, req.body.email, hash,req.body.college_name,req.body.course,req.body.m_no];
    const values = [req.body.number];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};