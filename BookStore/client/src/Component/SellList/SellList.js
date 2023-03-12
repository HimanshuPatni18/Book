import "./SellList.css";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";

import Pagination from "../Pagination/Pagination";
const SellList = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
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
            return posts.uid === uid;
          })
          .slice(pagination.start, pagination.end)
          .map((post) => (
            // <div className="md-4">
            <Link to={`/bookdetails/${post.id}`} className="link-styles">
                <Card key={post.id} post={post} />
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

export default SellList