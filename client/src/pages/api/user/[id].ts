// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {AppDataSource} from "../../../database/data-source";
import { User } from "../../../database/entities/User";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>,
) {
    const userRepo = AppDataSource.getRepository(User);
    const id = Number(req.query.id);

    if (!id) res.status(500);

    const user = await userRepo.findOne({where:{user_id:id}});

    if (!user) res.status(404);
    else res.status(200).json(user);
}