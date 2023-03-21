// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {AppDataSource} from "../../../database/data-source";
import {User} from "../../../database/entities/User";
import {userRepo} from "../../../database/user-repo";
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>,
) {
    const getUserById = async () => {
        const id = req.query.id;
        console.log(`getUserById: ${id}`)
        if (!id) return res.status(StatusCodes.BAD_REQUEST).end(getReasonPhrase(StatusCodes.BAD_REQUEST));
        const user = await userRepo.getById(id);
        if (!user) return res.status(StatusCodes.NOT_FOUND).end(getReasonPhrase(StatusCodes.NOT_FOUND));
        else return res.status(StatusCodes.OK).json(user);
    }

    switch (req.method) {
        case "GET":
            return getUserById()
        case "PUSH":
            return
        case "DELETE":
            return
        case "PATCH":
            return
        default:
            return res.status(StatusCodes.METHOD_NOT_ALLOWED)
                .end(getReasonPhrase(StatusCodes.METHOD_NOT_ALLOWED))
    }
}