import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedule } from "./schedules.entity";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { type } from "os";

@Entity("realEstates")
export class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "boolean", default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2 })
    value: number | string

    @Column({ type: "integer" })
    size: number

    @CreateDateColumn()
    createdAt: Date | string

    @UpdateDateColumn()
    updatedAt: Date | string
    
    @OneToMany(() => RealEstate, realEstate => realEstate.schedule)
    schedule: Schedule[]

    @OneToOne(() => Address, address => address.realEstate)
    @JoinColumn({ name: "addressId" })
    address: Address

    @ManyToOne(() => Category, category => category.realEstates) 
    @JoinColumn({ name: "categoryId" })
    category: Category
}