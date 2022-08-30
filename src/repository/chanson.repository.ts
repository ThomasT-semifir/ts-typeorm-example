import { DeleteResult, EntityNotFoundError, EntitySchema, Repository } from 'typeorm';
import { myDataSource } from '../config/datasource';
import {data} from '../data';
import {Chanson} from "../entities/Chanson";
import { ParsedQs } from "qs";


class ChansonRepository extends Repository<Chanson> {


    getAllChansons = () : Promise<Chanson[]> => {
        return myDataSource.getRepository(Chanson).find();
    }

    getChansonById = (id: number) : Promise<Chanson | null> => {
        return myDataSource.getRepository(Chanson).createQueryBuilder("chanson").where("chanson.id = :id", {id: id}).leftJoinAndSelect("chanson.parole", "parole").getOne()
    }

    postChanson = (chanson: Chanson): Promise<Chanson> => {
        return myDataSource.getRepository(Chanson).save(chanson)
    }

    deleteChanson = async (id: number): Promise<DeleteResult> => {
        return myDataSource.getRepository(Chanson).delete(id)
    }

    getChansonByTitle = (title: string): Promise<Chanson | null> => {
        // NE PAS UTILISER DE CONCATENATION UTILISANT LES DONNEES ENTREES PAR L'UTILISATEUR
        // return myDataSource.getRepository(Chanson).query(`SELECT * FROM chanson WHERE title= "${title}"`)
        // on va plutôt utiliser le queryBuilder
        return myDataSource.getRepository(Chanson).createQueryBuilder("chanson").where("chanson.title = :title", {title: title}).getOne()
    }
    
    updateChanson = async (id: number, newChanson: ParsedQs) => {
        const chanson = await myDataSource.getRepository(Chanson).findOneByOrFail({
            id: id
        })
        myDataSource.getRepository(Chanson).merge(chanson, newChanson)
        const result = await myDataSource.getRepository(Chanson).save(chanson)
        return result
    }}

export const chansonRepository = Object.freeze(new ChansonRepository(Chanson, myDataSource.manager))