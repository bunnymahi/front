
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
app.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },  
});
const upload = multer({ storage: storage });
//////////////////////get req//////////////////////////
app.get("/", function (req, res) {
    console.log("got a GET request for the home page");
    res.send("Welcome to Home page");
  });
///////////////////////post-req////////////////////////
app.post("/uploads", upload.single("image"), async (req, res) => {
    // console.log(req)
    console.log("post req recived");
    // console.log(req);
    console.log(req.file);

});
//////////////////////////////////////////////////////
const server = app.listen(9000, () => {
    console.log("Server is listening on port 9000");
  });