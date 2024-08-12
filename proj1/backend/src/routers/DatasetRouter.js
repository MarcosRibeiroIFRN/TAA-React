import express from "express"
import {upload} from "../middleware/uploadFileMiddleware.js"
import {createDataset,getDatasets} from "../controller/DatasetController.js"
import {verifyToken} from "../middleware/JwtMiddleware.js"
import checkPermission from "../middleware/PermissionMiddleware.js"

const router = express.Router()

router.post("/",verifyToken ,checkPermission("CREATE_DATASET"),upload.single("file"),createDataset);
router.get("/",verifyToken,getDatasets)

export default router;
