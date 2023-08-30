import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRealEstates1693405745320 implements MigrationInterface {
    name = 'AlterTableRealEstates1693405745320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "update"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createDAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createDAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "update" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createAt" TIMESTAMP NOT NULL`);
    }

}
