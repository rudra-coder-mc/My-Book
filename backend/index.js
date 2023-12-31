const express = require("express");
const mongoDB = require("./db");

const app = express();
const port = 5000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept"
  );
  next();
});

app.use(express.json());
app.use("/api/", require("./Routers/SignupUser"));
app.use("/api/", require("./Routers/LoginUser"));
app.use("/api/", require("./Routers/DisplatData"));
app.use("/api/", require("./Routers/OrderData"));
app.use("/api/", require("./Routers/Admin"));

// app.get("/", (req, res) => {

// });

app.listen(port, () => {
  console.log(`app listeing on port ${port}`);
});
