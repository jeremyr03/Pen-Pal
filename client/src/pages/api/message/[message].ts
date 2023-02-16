// import {AppDataSource} from "../../../database/data-source";
// import {Message} from "../../../database/entities/Message";
//
// const sendMessages = async () =>{
//     let messageRepo = AppDataSource.getRepository(Message)
//     await messageRepo.save(sampleMessages)
// }
//
// sendMessages().then(r => {return r})
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {AppDataSource} from "../../../database/data-source";
import {Message} from "../../../database/entities/Message";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Message | { message: string }>,
) {
    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }
    const messageRepo = AppDataSource.getRepository(Message);
    console.log(req.body)
    let m = req.body
    console.log("query: ",m)
    const info = {
        name: m.name as string,
        message: m.message as string,
        language: m.language as string,
        date: m.date as string,
    } as Message;

    const saved = await messageRepo.save(info);
    console.log(saved)
    if (!saved) res.status(404);
    else res.status(200).json(saved);
}