import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="">
      <nav className="navbar1 ">
        <div className="container-fluid">
          <a className="navbar-brand">BookStore</a>
          <div id="search-cart">
            {/* <form className="d-flex" id="search" role="search">
              <input
                className="form-control me-2 search-placeholder "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success success search-btn" type="submit">
                Search
              </button>
            </form> */}

            {/* <div id="cart">
              <span>10 </span><span>img</span>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
