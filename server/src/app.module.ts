import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import configService from './config/config.service';
import AppController from './app.controller';
import AppService from './app.service';
import RepoModule from './repo.module';
import UserResolver from './resolvers/user.resolver';
import NoteResolver from './resolvers/note.resolver';

const graphQLImports = [UserResolver, NoteResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
