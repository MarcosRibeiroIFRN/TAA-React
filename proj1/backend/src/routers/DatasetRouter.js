import express from "express"
import {upload} from "../middleware/uploadFileMiddleware.js"
import {createDataset,getDatasets} from "../controller/DatasetController.js"
import {verifyToken} from "../middleware/JwtMiddleware.js"

const router = express.Router()

router.post("/",verifyToken ,upload.single("file"),createDataset);
router.get("/",verifyToken,getDatasets)

export default router;