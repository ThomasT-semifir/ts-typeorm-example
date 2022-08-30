import express from "express";
import { paroleController } from "../controller/parole.controller";

const router = express.Router();
const controller = paroleController;

// router.get('', controller.getAll)
router.post('', controller.create)
// router.delete('/delete/:index', controller.removeItem)
export default router