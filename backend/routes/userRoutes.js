import express from "express";
import cors from "cors";


import { fetchworkSheets , downloadPdf } from "../controller/filesController.js"
import { fetchRsrcworkSheets } from "../controller/resourceFileController.js";

const userRouter =  express.Router();

//fetching all collections and subcollections

userRouter.get("/worksheets" , fetchworkSheets);

userRouter.all("/worksheets/download" , downloadPdf);


//resources

userRouter.get("/resources/worksheets" , fetchRsrcworkSheets);

userRouter.get("/worksheets", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    
    // Your logic here
    res.send("Worksheets data sent successfully");
  });




export default userRouter;




// userRouter.post("/blogs/comments" , submitComment);

// userRouter.get("/materials/:levelName" , fetchCollections);

// userRouter.get("/materials/:levelName/:collectionName" , fetchSubCollections);

// userRouter.all("/materials/:levelName/:collectionName/:subcollectionName/download" , downloadPdf);





