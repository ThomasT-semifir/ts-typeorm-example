import {data} from '../data';
import {ChansonModel} from "../model/chansonModel";

export class ChansonRepository {

    data : ChansonModel[] = data;

    getAllChansons = () : ChansonModel[] => {
        return this.data
    }

    getChansonById = (id: number) : ChansonModel => {
        return this.data.filter(item => item.id == id)[0]
    }

    getChansonsByAlbumId = (id: number): ChansonModel[] => {
        return this.data.filter(item => item.albumId == id)
    }

    postChanson = (chanson: ChansonModel) => {
        return this.data.push(chanson)
    }

    deleteChanson = (id: number) => {
        this.data = this.data.filter(item => item.id != id)
    }
}