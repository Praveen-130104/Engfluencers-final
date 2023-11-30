import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import router from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";

// dotenv.config({path:"../.env"});

const app = express();


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;

console.log("port =->>>" , port);

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port,  () => {
      console.log(`Server listening on port ${port}`);
    });
    
})
  .catch((err) => console.log(err));

app.use("/admin", router);
app.use("/user", userRouter);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

