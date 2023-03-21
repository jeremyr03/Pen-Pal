import {AppDataSource} from "./data-source";
import {User} from "./entities/User";


const getById = async (id: string | string[]) => {
    let val: string;

    if(Array.isArray(id)){
        val = id[0];
    }else {
        val = id;
    }
    if (!val) return null;
    const userRepo = AppDataSource.getRepository(User);
    return await userRepo.findOne({where: {user_id: val}});

}

export const userRepo = {
    getById,
}
