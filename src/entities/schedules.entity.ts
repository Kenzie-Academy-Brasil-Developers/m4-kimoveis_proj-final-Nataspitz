import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";
import { RealEstate } from "./realEstates.entity";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date" })
    date: Date

    @Column({ type: "time" })
    hour: number

    @ManyToOne(() => RealEstate, realEstate => realEstate.schedule)
    @JoinColumn({ name: "realEstateId" })
    realEstate: RealEstate

    @ManyToOne(() => User, user => user.schedules)
    @JoinColumn({ name: "userId" })
    user: User
}