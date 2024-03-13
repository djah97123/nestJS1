import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { JsonMiddleware } from './json/json.middleware';
import { TeamsModule } from './teams/teams.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [TeamsModule.register({filePath  : "jkkjh"}), MatchesModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JsonMiddleware)
      .forRoutes({ path: '/*', method: RequestMethod.ALL });
  }
}
