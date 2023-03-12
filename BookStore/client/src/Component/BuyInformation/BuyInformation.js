import React, { useState } from "react";
import "./BuyInformation.css";

const BuyInformation = () => {
  const [inputs, setInputs] = useState({
    bookname: "",
    coursename : "",
    semester: null,
  });

  const handleChange = (event) => {
    const bname = event.target.name;
    const cname = event.target.name;
    const value = event.target.value;
    console.log(value)
    setInputs((values) => ({ ...values, [bname]: value ,[cname]:value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs((values) => ({}));
  };

  return (
    <form className="buy-form" onSubmit={handleSubmit}>
      <div className="input-field">
        <div className="div">
          Is you want to buy this book
        </div>
        <input className="div" type="submit" />
      </div>

      
    </form>
  );
};

export default BuyInformation;





// import React, { useState } from "react";
// import "./BuyInformation.css";

// const BuyInformation = () => {
//   const [inputs, setInputs] = useState({
//     bookname: "",
//     coursename : "",
//     semester: null,
//   });

//   const handleChange = (event) => {
//     const bname = event.target.name;
//     const cname = event.target.name;

//     const value = event.target.value;
//     console.log(value)
//     setInputs((values) => ({ ...values, [bname]: value ,[cname]:value}));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//     setInputs((values) => ({}));
//   };

//   return (
//     <form className="buy-form" onSubmit={handleSubmit}>
//       <div className="input-field">
//         <div className="div">
//           <label>
//             <input
//               placeholder="Enter Book name"
//               type="text"
//               name="bookname"
//               value={inputs.bookname || ""}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="div">
//           <label>
//             <input
//               placeholder="Enter Course name"
//               type="text"
//               name="coursename"
//               value={inputs.coursename || ""}
//               onChange={handleChange}
//             />
//           </label>
//         </div>


//         <div className="div">
//           <label>
//             <input
//               placeholder="Enter your Semester"
//               type="number"
//               name="semester"
//               value={inputs.semester || ""}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <input className="div" type="submit" />
//       </div>

      
//     </form>
//   );
// };

// export default BuyInformation;
