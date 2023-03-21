import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany} from "typeorm"
import {Message} from "./Message";
import {JoinTable} from "typeorm/browser";

@Entity()
export class User {

    @PrimaryColumn()
    user_id: string

    @Column()
    name: string

    @ManyToMany(type => Message, message => message.message_id) sent_messages: Message[];

    @ManyToMany(type => Message, message => message.message_id) received_messages: Message[];

    // @ManyToMany(type => Message, message => message.message_id) sent_messages: Message[];

    // @ManyToMany(type => Message, message => message.message_id) received_messages: Message[];

}