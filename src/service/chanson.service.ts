import {ChansonRepository} from "../repository/chanson.repository";
import {ChansonModel} from "../model/chansonModel";

export class ChansonService {

    private repo = new ChansonRepository()

    getAllChansons = () => {
        return this.repo.getAllChansons()
    }

    getChanson = (id: number) => {
        return this.repo.getChansonById(id)
    }

    getChansonsByAlbumId = (id: number) => {
        return this.repo.getChansonsByAlbumId(id)
    }

    postChanson = (chanson: ChansonModel) => {
        return this.repo.postChanson(chanson);
    }

    deleteChanson = (id: number) => {
        return this.repo.deleteChanson(id)
    }
}