import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number

    @Column()
    name: string

}