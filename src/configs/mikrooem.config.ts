import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const logger = new Logger('MikroORM');
export const getMikroOrmConfig = (
  configService: ConfigService,
): MikroOrmModuleSyncOptions => ({
  dbName: configService.get<string>('POSTGRES_DB'),
  type: 'postgresql',
  host: configService.get<string>('POSTGRES_HOST'),
  port: configService.get<number>('POSTGRES_PORT'),
  user: configService.get<string>('POSTGRES_USER'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  highlighter: new SqlHighlighter(),
  logger: logger.log.bind(logger),
  debug: true,
  metadataProvider: TsMorphMetadataProvider,
  autoLoadEntities: true,
});
