import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routerHome from "./routes/Routes.js";
import router from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config({path:"../.env"});

const app = express();


// app.use(cors());
app.use(cors());app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // You can include this if you need to send cookies or authentication headers
}));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;

console.log("port =->>>" , port);

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/", routerHome);

app.use("/admin", router);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});