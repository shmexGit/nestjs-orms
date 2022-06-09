import { Migration } from '@mikro-orm/migrations';

export class Migration20220607151658 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user_mikro" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "profile_image" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);',
    );
    this.addSql(
      'alter table "user_mikro" add constraint "user_mikro_email_unique" unique ("email");',
    );
  }
}
