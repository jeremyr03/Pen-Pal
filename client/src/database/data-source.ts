import "reflect-metadata"
import {DataSource} from "typeorm"
import {User} from "./entities/User";
import {Message} from "./entities/Message";

// Add to .env file
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "penpal-test",
    synchronize: true,
    logging: false,
    entities: [User, Message],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))

export {AppDataSource}
