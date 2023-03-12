import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (posts) => {
  const { post } = posts;

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  // return (
  //   <div className="col-md-4 mb-3 " key={post.id}>
  //   <div className="card">
  //     <div className="card-body">
  //       <div className="img">ImG</div>
  //       <h5>
  //         {post.title}
  //       </h5>
  //       <div>DESC : {getText(post.desc)} </div>
  //       <div>MRP : {post.mrp} Rs</div>
  //       <div>Price : {post.price} Rs</div>

  //       {/* <div>Selling Price :{post.SellingPrice} Rs</div> */}
  //     </div>
  //     <Link to="/buyinformation">
  //       <div id="x">

  //         <button className="btn btn-success buy-btn">Buy</button>
  //       </div>
  //     </Link>
  //   </div>
  // </div>
  // )

  var trimmedString = getText(post.desc).substring(0, 20);

  return (
    <div className="card">
      <div className="card-header">
        {/* <img src="https://tinyurl.com/3h9wjwv5" alt="city" /> */}
        <img src={`../upload/${post?.img}`} alt="Hii" />

      </div>
      <div className="card-body">
        {/* <span className="tag tag-pink">Design</span> */}
        <h6>{post.title}</h6>
        <p>
          <div>DESC : {trimmedString}.. </div>
          {/* <hr/> */}
          <div>MRP : {post.mrp} Rs</div>
        </p>
        {/* <div className="user"> */}
        {/* <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" /> */}
        {/* <div className="user-info"> */}

        
        <Link to="/buyinformation">
        <button className="btn "><span>₹ {post.price}</span></button>
        </Link>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Card;
