
import { Module, DynamicModule } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

interface TeamsModuleOptions {
  filePath: string;
}

@Module({})
export class TeamsModule {
  static register(options: TeamsModuleOptions): DynamicModule {
    return {
      module: TeamsModule,
      controllers: [TeamsController],
      providers: [
        {
          provide: 'TEAMS_FILE_PATH',
          useValue: options.filePath,
        },
        TeamsService,
      ],
      exports: [TeamsService],
    };
  }
}
