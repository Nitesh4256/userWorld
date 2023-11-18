const express = require("express");
const cors = require("cors");
const { connection } = require("./database/db");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// routes imports
const userRoute = require("./routes/userRoute");
connection();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/user", userRoute);
app.listen(PORT, () => {
  console.log("Server is listning on port ", PORT);
});
