import "./MyCart.css";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

import Pagination from "../Pagination/Pagination";
const MyCart = () => {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(AuthContext);

  const cat = useLocation().search
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/carts/cart1`);
        setPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);


  
  const [showPerPage, setShowPerPage] = useState(100);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  var user = JSON.parse( localStorage.getItem('user' ) );
  const uid = user?.id;
  
  return (
    <div className="buylist">
      <div className="container py-3">
        <div className="row md:4">
          {
          posts
          .filter(function (posts) {
            return posts.uid === currentUser?.id;
          })
          .slice(pagination.start, pagination.end)
          .map((post) => (
            // <div className="md-4">
            <Link to={`/cartdetails/${post.postid}`} className="link-styles">
                <Card key={post.postid} post={post} />
              </Link>

            // </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}



export default MyCart