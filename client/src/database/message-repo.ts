import {AppDataSource} from "./data-source";
import {User} from "./entities/User";
import {Message} from "./entities/Message";
import {IMessage} from "../utils/interfaces/IMessage";


const getById = async (id: number) => {
    const messageRepository = AppDataSource.getRepository(Message);

    if (!id) return null;

    const message = await messageRepository.findOne({where: {message_id: id}});

    return message;

}

const createMessage = async (m: IMessage, sender: User, receiver: User) => {
    const messageRepository = AppDataSource.getRepository(Message);
    const message = new Message();

    message.message = m.message;
    message.date = m.date;
    m.language ? message.language = m.language : console.log("no language entered");
    // message.sender = sender;
    // message.receiver = receiver;

    const saved = await messageRepository.save(message);

    return !!saved;
}

export const msgRepo = {
    getById,
}