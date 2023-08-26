import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./schedules.entity";
import * as bcrypt from "bcrypt";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ type: "boolean", default: false })
    admin: boolean

    @Column({ length: 120 })
    password: string

    @Column({ type: "date" })
    createAt: Date

    @Column({ type: "date" })
    updateAt: Date

    @Column({ type: "date", nullable: true })
    deleteAt: Date

    @OneToMany(() => Schedule, schedule => schedule.user)
    schedules: Schedule[]

    @BeforeInsert()
    async hashPasswordBeforeInsert() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}