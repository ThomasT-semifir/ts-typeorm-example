import { paroleService } from "../service/parole.service"
import { Request, Response } from "express"

class ParoleController {

    private service = paroleService;

    public create = (req: Request, res: Response) => {
        this.service.create(req.body).then(data => {res.json(data)})
    }
}

export const paroleController = Object.freeze(new ParoleController())