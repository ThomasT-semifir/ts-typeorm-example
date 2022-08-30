import {chansonRepository} from "../repository/chanson.repository";
import {Chanson} from "../entities/Chanson";
import { ParsedQs } from "qs";

class ChansonService {

    private repo = chansonRepository;

    getAllChansons = (): Promise<Chanson[]> => {
        return this.repo.getAllChansons()
    }

    getChanson = async (id: number) => {
        return this.repo.getChansonById(id);
    }

    getChansonByTitle = (title: string) => {
        return this.repo.getChansonByTitle(title);
    }

    postChanson = (chanson: Chanson) => {
        return this.repo.postChanson(chanson);
    }

    deleteChanson = (id: number) => {
        return this.repo.deleteChanson(id)
    }

    updateChanson = (id: number, queryParams: ParsedQs) => {
        return this.repo.updateChanson(id, queryParams)
    }


    replaceChanson = (id: number, chanson: Chanson) => {
        return this.repo.update(id, chanson)
    }
}
export const chansonService = Object.freeze(new ChansonService())