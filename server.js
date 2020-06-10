const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const nodemailer = require("nodemailer");
// var cloudinary = require("cloudinary").v2;
// const fileUpload = require("express-fileupload")

require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// app.use(
//     fileUpload({
//         useTempfiles: true,
//     }));

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// })

app.get("/", (req, res) => {
  res.send("Hi there, app is running!");
});

require("./routes/car.routes.js")(app);
require("./routes/order.routes.js")(app);
require("./routes/shoppingCart.router.js")(app);
require("./routes/createAccount.routes.js")(app);
require("./routes/login.routes.js")(app);

const PORT = process.env.PORT || 2500;

app.listen(PORT, () => {
  console.log("....running on port 2500");
});
