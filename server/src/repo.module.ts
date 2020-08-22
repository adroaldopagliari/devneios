import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './models/user.entity';
import Note from './models/note.entity';
import Category from './models/category.entity';
import RepoService from './repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Note, Category])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;
