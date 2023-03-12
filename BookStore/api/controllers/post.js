import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  // console.log(req.query.sem + " e");
  const q = "SELECT * FROM posts";
    

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
        // console.log("q")
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`,`date` ,`price` , `mrp`,`img` , p.branch , p.sem , p.college_name ,p.course,p.edition FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
console.log(req.params.id)
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  console.log("hii1")

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");
  console.log("Not authenticated")


  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
  console.log("Not valid")


    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `date`,`uid`,`mrp`,`price`,`college_name`,`course`,`branch`,`sem`,`edition`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.date,
      userInfo.id,
      req.body.mrp,
      req.body.price,
      req.body.college_name,
      req.body.course,
      req.body.branch,
      req.body.sem,
      req.body.edition
    ];
  console.log("hii2")

    console.log(values);

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log("hii from addpost");
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";
    

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
    // db.query(q2, [postId, userInfo.id], (err, data) => {
    //   if (err) return res.status(403).json("You can delete only your post!");

    //   return res.json("Post has been deleted!");
    // });
  });
};
export const deletePostfromcart = (req, res) => {
  

    const postId = req.params.id;
    
    const q2 = "DELETE FROM cart WHERE `postid` = ? "

    
    db.query(q2, [postId], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`mrp`=?,`price`=?,`college_name`=?,`course`=?,`branch`=?,`sem`=?,`edition`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title,
      req.body.desc,
      req.body.mrp,
      req.body.price,
      req.body.college_name,
      req.body.course,
      req.body.branch,
      req.body.sem,
      req.body.edition];

      console.log(values)
    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};

