import express from "express";
import {ChansonController} from "../controller/chanson.controller";

const controller = new ChansonController()
const router = express.Router()

router.get('', controller.getAllChansons)
router.post('', controller.addChanson)
router.get("/search", controller.getChansonByTitle)
router.get('/:id', controller.getChanson)
router.patch('/:id', controller.updateChanson)
router.put("/:id", controller.replaceChanson)
router.delete('/:id', controller.deleteChanson)

export default router