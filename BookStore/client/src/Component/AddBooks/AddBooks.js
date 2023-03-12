import React, { useState } from "react";
// import * as React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./AddBooks.css";

const AddBooks = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [filename, setFileName] = useState(null);

  const [cat, setCat] = useState(state?.cat || "");
  const [mrp, setMrp] = useState(state?.mrp || "");
  const [price, setPrice] = useState(state?.price || "");
  const [rprice, setrPrice] = useState(state?.price || "");

  const [college_name, setCollege_name] = useState(state?.college_name || "SKIT");
  const [course, setCourse] = useState(state?.course || "");
  const [branch, setBranch] = useState(state?.branch || "Computer Science Engineering");
  const [sem, setSem] = useState(state?.sem || "");
  const [edition, setEdition] = useState(state?.edition || "2022");

  // console.log(state.id + " state")

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log(res.data);
      
      return res.data;
      
    } catch (err) {
      console.log(err);
      // console.log("udcs")
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    console.log(file + "  imgurl")



    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            mrp,
            price,
            college_name,
            course,
            branch,
            sem,
            edition,
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            mrp,
            price,
            college_name,
            course,
            branch,
            sem,
            edition,
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //Dropdown

  const editions = [
    { label: "2022", value: "2022" },

    { label: "2021", value: "2021" },

    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
    { label: "2014", value: "2014" },
    { label: "2013", value: "2013" },
  ];

  const branchs = [
    { label: "Computer Science Engineering", value: "Computer Science Engineering" },
    { label: "Information Technology", value: "Information Technology" },
    { label: "Electronics Communication Engineering", value: "Electronics Communication Engineering" },
    { label: "Mechanical Engineering Engineering", value: "Mechanical Engineering Engineering" },
    { label: "Civil Engineering", value: "Civil Engineering" },

    
  ];

  const colleges = [
    { label: "SKIT", value: "SKIT" },
    { label: "JECRC", value: "JECRC" },
    { label: "PCE", value: "PCE" },

  ];

  // const [edi, setEdi] = React.useState('2022');

  const changePrice=(event)=>{
    let x = event.target.value;
    x = x - x/10;
   let  round = Math.round;
    let y = round(x);
    setPrice(event.target.value);
    setrPrice(y);

    
    
  }
  const handleChangeEdition = (event) => {
    setEdition(event.target.value);
  };
  const handleChangeBranch = (event) => {
    setBranch(event.target.value);
  };
  const handleChangeColleges = (event) => {
    setCollege_name(event.target.value);
  };

  return (
    <div className="add">
      <div id="form">
        <button className="back">
          <a href="/">Back</a>
        </button>
        <div className="content">
          <input
            type="text"
            
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              placeholder="Description"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        <div className="menu">
          {/* Image */}
<div className="item">
          <input
            style={{ display: "none" }}
            type="file"
            className="input"
            id="file"
            name=""
            onChange={(e) => {setFile(e.target.files[0]);
              setFileName(e.target.files[0].name)
            console.log(e.target.files[0]);
          }}
          />
          <label className="file" htmlFor="file">
            Upload Image 
          </label>
        </div><span className="filename">{filename}</span>

          <div className="item">
            <input
              type="number"
              className="input"
              placeholder="MRP"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              required
            />
            <input
              type="number"
              className="input"
              placeholder="price"
              value={price}
              onChange={(e) => changePrice(e)}
              required
            />
            The price you get after sell
             {/* <input
              type="number"
              className="input"
              placeholder="Received price"
              value={rprice}
              // onChange={(e) => changePrice(e)}
              required
            /> */}
            <div>{rprice}</div>
            {/* <input
              type="text"
              className="input"
              placeholder="College_Name"
              value={college_name}
              onChange={(e) => setCollege_name(e.target.value)}
              required
            /> */}
            <input
              type="text"
              className="input"
              placeholder="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
            <input
              type="number"
              className="input"
              placeholder="Semester"
              value={sem}
              onChange={(e) => setSem(e.target.value)}
              required
            />
            {/* <input
            type="text"
            className="input"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          /> */}
          <div>
              <label>
                Select Your College ..
                <select value={college_name} onChange={handleChangeColleges}>
                  {colleges.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Enter Your Branch..
                <select value={branch} onChange={handleChangeBranch}>
                  {branchs.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
            
            {/* <input
            type="date"
            className="input"
            placeholder="Edition"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            required
          /> */}

            <div>
              <label>
                Enter The Edition Of The Book..
                <select value={edition} onChange={handleChangeEdition}>
                  {editions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="buttons file">
              <button className="buttons" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
