import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedule } from "./schedules.entity";
import * as bcryptjs from "bcryptjs";

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

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date | string

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt: Date | string | undefined | null

    @OneToMany(() => Schedule, schedule => schedule.user)
    schedules: Schedule[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hash: number = bcryptjs.getRounds(this.password)
        if (!hash) {
            this.password =  bcryptjs.hashSync(this.password, 10)
        } 
    }
}