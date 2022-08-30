import {chansonService} from "../service/chanson.service";
import {Request, Response} from "express";

export class ChansonController {

    private service = chansonService;

    getAllChansons = (req : Request, res : Response) => {
        this.service.getAllChansons().then((data) => res.json(data))
        // res.json(await this.service.getAllChansons()).then().then().then().then().then()
    }

    getChanson = async (req: Request, res: Response) => {
        const chanson = await this.service.getChanson(Number(req.params.id))
        if (chanson){
            res.json(chanson)
        } else {
            res.status(404).send()
        }
    }

    getChansonByTitle = (req: Request, res: Response) => {
        const title = req.query.title!.toString()
        console.log(title)
        return this.service.getChansonByTitle(title).then(data => {
            res.json(data)
        })
    }


    addChanson = (req: Request, res: Response) => {
        try {
            this.service.postChanson(req.body)
            res.sendStatus(201)
        } catch (e) {
            console.log(e)
            res.sendStatus(400)
        }
    }

    deleteChanson = async (req: Request, res: Response) => {
        try {
        this.service.deleteChanson(Number(req.params.id))
            res.sendStatus(204)
        } catch (e) {
            res.sendStatus(400)
        }

    }

    updateChanson = (req: Request, res: Response) => {
        this.service.updateChanson(+req.params.id, req.query)
            .then(data => res.status(200).json(data))
    }

    replaceChanson = (req: Request, res: Response) => {
        this.service.replaceChanson(+req.params.id, req.body)
            .then(data => res.status(200).json(data))
    }
}