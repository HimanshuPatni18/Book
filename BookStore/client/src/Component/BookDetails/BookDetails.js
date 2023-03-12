import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import DOMPurify from "dompurify";
import Sidebar from "../../FixedComponents/Sidebar";
import Nav from "../../FixedComponents/Nav";
import "./BookDetails.css";


const BookDetails = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  console.log("Hii");

  console.log(post);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  // console.log(post.branch + " bookdetails");
  const handleDelete = async () => {
    try {
      
      await axios.delete(`/posts/cart/${postId}`);

      navigate("/mysell");
    } catch (err) {
      console.log(err);
    }
    try {
      await axios.delete(`/posts/${postId}`);
      

      navigate("/mysell");
    } catch (err) {
      console.log(err);
    }
    
  };
  console.log(post.img);
  console.log("img");


  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="dashboard">
      {/* <Nav /> */}

      <div className="belownav">
        <Sidebar />
        <div className="book-details">
          {/* <button className="mb-12 font-bold" onClick={ () => { history.goBack() } }>Back</button> */}
          <button className="back">
            <a href="/">Back</a>
          </button>
          <div className="flex">
            {/* <img src={ product.img } alt="pizza" /> */}
            <div>
            {/* <img src="https://tinyurl.com/3h9wjwv5" alt="city" id="img"/> */}

            <img src={`../upload/${post?.img}`} alt="Hii" id="img"/>


            <div id="user">
            <span className="">{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            </div>
            
            <div className="info">
              <h1 className="text-xl font-bold title">{post.title}</h1>
              
              <div className=" desc">
                <div>
                <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.desc),
                }}></div>{" "}
              </div>
                </div>
              <div className="font-bold mt-2 mrp">MRP : ₹ {post.mrp}</div>
              <div className="font-bold mt-2 price">Price : ₹ {post.price}</div>
              <div className="font-bold mt-2 price">Edition :  {post.edition}</div>
              


              {/* <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
                Add to cart
              </button> */}
              <div id="icons">
              <div className="ic" onClick={handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                  <Link to={`/addbooks?edit=2`} state={post}>
                  <div className="ic">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
              </Link>
              </div>
                  
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BookDetails;
