import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './UserSQL'

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    dificulty: number

    @Column()
    status: boolean

    @ManyToOne(() => User, (user) => user.tasks)
    users: User[]
}