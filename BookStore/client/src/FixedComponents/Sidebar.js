import "./Sidebar.css";
// import * as FaIcons from "react-icons/fa";
import React, { useContext,useEffect,useState } from "react";
import axios from "axios";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {AuthContext} from '../Context/authContext';



function Sidebar() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  const { currentUser, logout } = useContext(AuthContext);
// console.log(currentUser + " side")

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [length,getLength] = useState(" ");

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/carts/cart1`);
        getLength(res.data
          .filter(function (posts) {
            return posts.uid === currentUser?.id;
          }).length)
        setPosts(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <>
    
      <div className="sidebar">
      <div id="title">BookStore</div>
        <div className="sidebar-top">
        <span>{currentUser?.username}</span>
          {currentUser!=null ? (
            <span onClick={logout}><button className="btn-logout ">LOGOUT</button>
            </span>
          ) : (
            <Link className="link" to="/login">
          <button className="btn btn-success">LOGIN</button>
              
            </Link>
          )}
          {/* <div>Logout</div> */}
        </div>

        <div className="sidebar-bottom">
          <Link to="/">
            <div className="dropdown-btn" >
              Available Books
              {/* <i className="fa fa-caret-down"></i> */}
            </div>
            <div className="dropdown-container">Buy Sell</div>
          </Link>

          {/* <Link to="/mybuys">
            <div id="page-link">MyBuy</div>
          </Link> */}

          <Link to="/mysell">
            <div id="page-link">MySell</div>
          </Link>
          <Link to="/mycart">
            <div id="page-link">CART</div>
          </Link>

          {/* <div id="cart">
              <span>10 </span><span>img</span>
            </div> */}
          {/* <Link to="/mybuy">
            <div id="page-link">MyBuy</div>
          </Link> */}
          <div className="create">
          <Link to="/addbooks" className=" Link fs">
          <i className="fa-solid fa-circle-plus createBtn"></i>
        </Link>
        
        </div>
        {/* <Link to="/buyinformation">
          <button className="btn btn-success">SEARCH</button>
        </Link> */}
        </div >

        <Link to="/mycart">
        <div id="cart">
        <div id="cart-btn">
        <i class="fa-solid fa-cart-plus"></i>  
        <span id="no">({length}) </span>
        
        </div>
        </div>
          </Link>


        

        
        

      </div>
    </>
  );
}

export default Sidebar;

// function Sidebar() {
//   const [sidebarclass, setsidebarclass] = useState(false);

// const username = localStorage.getItem("username");

// const logout = () => {
//   localStorage.clear();
// };

//   return (
//     <div className={sidebarclass ? "sidebar1 toggleSidebar " : "sidebar1 "}>
//       <div id="sidebar-top">
//         <div className="user">
//           <i className="fa-solid fa-user-tie"></i>
//           Himanshu
//         </div>
//         <div className="logout">
//           <Link to="/">
//             <button className="logout-btn" onClick={logout}>
//               <i class="fa-solid fa-arrow-right-from-bracket"></i>
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div id="func">
//         <Link
//           to="/"
//           className="function Link fs"
//           onClick={() => setsidebarclass(!sidebarclass)}
//         >
//           Home
//         </Link>
//         <Link
//           to="/mybuys"
//           className="function Link fs"
//           onClick={() => setsidebarclass(!sidebarclass)}
//         >
//           My Buys
//         </Link>
//         <div
//           className={sidebarclass ? "hamburger-menu1 " : "hamburger-menu "}
//           onClick={() => setsidebarclass(!sidebarclass)}
//         >
//           <div className="hamburger ">
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>

//     </div>
//   )
// }
