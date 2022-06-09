import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { CourseModule } from 'src/course/course.module';
import { validateEnvVars } from 'src/configs/config.validator';
import { getTypeormConfig } from 'src/configs/typeorm.config';
import { getMikroOrmConfig } from 'src/configs/mikrooem.config';
import { getSequelizeConfig } from 'src/configs/sequelize.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnvVars,
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeormConfig,
    }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMikroOrmConfig,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig,
    }),
    CourseModule,
  ],
})
export class AppModule {}
