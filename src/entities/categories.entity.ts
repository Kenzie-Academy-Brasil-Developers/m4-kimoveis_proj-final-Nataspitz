import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstates.entity";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 45, unique: true })
    name: string

    @OneToMany(() => RealEstate, realEstate => realEstate.category)
    realEstate: RealEstate[]
}
