const mongoose = require("mongoose");
const express = require("express");
const { connection } = require("./database/db");
const { router } = require("./routes/Allroutes");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/api", router);
const dbConnect = async () => {
  await connection;
};

dbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is Connected at Port ${process.env.PORT}`);
  });
});
