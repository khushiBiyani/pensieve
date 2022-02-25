const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     credentials: true,
//   })
// );
mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());
// app.use("/api", require("./routes/dummyRoutes"));

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
