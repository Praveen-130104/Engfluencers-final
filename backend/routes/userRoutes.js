import express from "express";
import { fetchworkSheets , downloadPdf } from "../controller/filesController.js"
import { fetchRsrcworkSheets } from "../controller/resourceFileController.js";

const userRouter =  express.Router();

//fetching all collections and subcollections

userRouter.get("/worksheets" , fetchworkSheets);

userRouter.all("/worksheets/download" , downloadPdf);


//resources

userRouter.get("/resources/worksheets" , fetchRsrcworkSheets);



export default userRouter;




// userRouter.post("/blogs/comments" , submitComment);

// userRouter.get("/materials/:levelName" , fetchCollections);

// userRouter.get("/materials/:levelName/:collectionName" , fetchSubCollections);

// userRouter.all("/materials/:levelName/:collectionName/:subcollectionName/download" , downloadPdf);





