import { ConfigService } from '@nestjs/config';

export interface IAppConfig {
  host: string;
  port: number;
}

export const getAppConfig = (configService: ConfigService): IAppConfig => ({
  host: configService.get<string>('SERVER_HOST'),
  port: configService.get<number>('SERVER_PORT'),
});
