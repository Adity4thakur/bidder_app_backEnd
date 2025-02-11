// create a sirver and listen to port 3000
// server create kise krte hai

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
// server Listen

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  try {
    console.log("Server is running on port 3001");
  } catch (err) {
    console.log(err.message);
  }
});
