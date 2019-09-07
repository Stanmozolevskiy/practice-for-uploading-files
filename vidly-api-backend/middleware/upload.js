const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        new Date().getTime() +
        path.extname(file.originalname)
    );
  }
});

// the name of the image for req is here 
const upload = multer({ storage }).single("file");

exports.upload = upload
