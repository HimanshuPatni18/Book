import { db } from "../db.js";
import jwt from "jsonwebtoken";

  //Update Cart Items

export const updateCart = (req, res) => {
    console.log("hii1")
  
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
    console.log("Not authenticated")
  
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
    console.log("Not valid")
  
  
      const q =
        "INSERT INTO cart(`postid`,`uid`,`title`, `desc`,`mrp`,`price`,`college_name`,`sem`,`img`) VALUES (?)";
  
      const values = [
        req.body.postid,
        req.body.uid,
        req.body.title,
      req.body.desc,
      req.body.mrp,
      req.body.price,
      req.body.collegeName,
      req.body.sem,
      req.body.img

        
  
      ];
    console.log("hii2")
  
      console.log(values);
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        console.log("hii from cart");
        return res.json("Cart has been created.");
      });
    });
  };

  //Get Cart Items

  export const getCart = (req, res) => {
    // console.log(req.query.sem + " e");
    const q = "SELECT * FROM cart";
      
  
    db.query(q, (err, data) => {
      if (err) return res.status(500).send(err);
          // console.log("q")
      return res.status(200).json(data);
    });
  };

  // Delete Cart Items

  export const deleteCart = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      console.log(userInfo.id + " delete")
      const q = "DELETE FROM cart WHERE `postid` = ? AND `uid` = ?";
  
      db.query(q, [postId, userInfo.id], (err, data) => {
        if (err) return res.status(403).json("You can delete only your post!");
  
        return res.json("Post has been deleted!");
      });
    });
  };