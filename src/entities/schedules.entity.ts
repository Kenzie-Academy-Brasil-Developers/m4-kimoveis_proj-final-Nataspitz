import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";
import { User } from "./users.entity";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date" })
    date: string

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => RealEstate, realEstate => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User, user => user.schedules)
    user: User
}