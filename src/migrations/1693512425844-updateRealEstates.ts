import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRealEstates1693512425844 implements MigrationInterface {
    name = 'UpdateRealEstates1693512425844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
