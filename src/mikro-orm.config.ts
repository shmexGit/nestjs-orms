import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export const config: Options = {
  entities: [process.env.MIKRO_ENTITIES],
  entitiesTs: [process.env.MIKRO_ENTITIES_TS],
  dbName: process.env.POSTGRES_DB,
  type: 'postgresql',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  highlighter: new SqlHighlighter(),
  debug: true,
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    tableName: 'mikro_orm_migrations',
    path: process.env.MIKRO_PATH,
    pathTs: process.env.MIKRO_PATH_TS,
    glob: '!(*.d).{js,ts}',
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true,
    dropTables: true,
    safe: true,
    emit: 'ts',
  },
};

export default config;
