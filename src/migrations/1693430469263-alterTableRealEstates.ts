import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRealEstates1693430469263 implements MigrationInterface {
    name = 'AlterTableRealEstates1693430469263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "createDAt" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "createdAt" TO "createDAt"`);
    }

}
