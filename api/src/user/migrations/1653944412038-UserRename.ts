import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRename1653944412038 implements MigrationInterface {
  name = 'UserRename1653944412038';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` CHANGE \`firstName\` \`firstNameName\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` DROP COLUMN \`firstNameName\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` ADD \`firstNameName\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` DROP COLUMN \`firstNameName\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` ADD \`firstNameName\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_entity\` CHANGE \`firstNameName\` \`firstName\` varchar(255) NOT NULL`,
    );
  }
}
