import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany} from "typeorm"
import {JoinColumn} from "typeorm/browser";
import {User} from "./User";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    message_id?: number

    @Column({nullable: false})
    message:string

    @Column({nullable: true})
    language: string

    @Column({nullable: true})
    date: string

    // @ManyToOne(type => User, user => user.user_id) sender: User;

    // @ManyToOne(type => User, user => user.user_id) receiver: User;

    // @ManyToMany(type => User, user => user.user_id) sender: User;
    //
    // @ManyToMany(type => User, user => user.user_id) receiver: User;

}