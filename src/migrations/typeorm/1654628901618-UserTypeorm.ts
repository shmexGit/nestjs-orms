import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTypeorm1654628901618 implements MigrationInterface {
  name = 'UserTypeorm1654628901618';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_typeorm" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profile_image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_7e1f26991415d8121b2de064bd7" UNIQUE ("email"), CONSTRAINT "PK_077f1bfd40b4e138473795ef56d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_typeorm"`);
  }
}
