import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    message_id?: number

    @Column({nullable: true, length: 100})
    name:string

    @Column({nullable: true})
    message: string

    @Column({nullable: true})
    language: string

    @Column({nullable: true})
    date: string

}