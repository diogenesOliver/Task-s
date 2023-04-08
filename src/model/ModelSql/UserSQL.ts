import { Entity, PrimaryGeneratedColumn, Column, OneToMany,  } from 'typeorm'
import { Task } from './TaskSQL'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Task, (task) => task.users)
    tasks: Task[]
}