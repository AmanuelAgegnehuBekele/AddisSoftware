import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();

const DB = process.env.DATABASE_URL!;

mongoose.connect(DB).then(() => {
  console.log("DB connection established");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
