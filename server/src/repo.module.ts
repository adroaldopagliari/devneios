import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Note from '@modules/notes/infra/typeorm/entities/Note';
import Category from '@modules/notes/infra/typeorm/entities/Category';
import RepoService from './repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Note, Category])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;
