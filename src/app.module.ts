import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtbWaitingListModule } from './ctb_waiting_list/ctb_waiting_list.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: '/cyberpark',
      playground:true,
    }),
    CtbWaitingListModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


