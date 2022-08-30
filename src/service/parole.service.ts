import { myDataSource } from "../config/datasource";
import { Parole } from "../entities/Parole";

class ParoleService {
    public create = (parole: Parole): Promise<Parole> => {
        return myDataSource.getRepository(Parole).save(parole)
    }
}

export const paroleService = Object.freeze(new ParoleService())