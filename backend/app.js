const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
 

mongoose.set('strictQuery', false);
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 

mongoose
  .connect(
    "mongodb+srv://admin:Rantudeb@cluster0.3hnxpnx.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
