import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Note from '@modules/notes/infra/typeorm/entities/Note';
import Category from '@modules/notes/infra/typeorm/entities/Category';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Note) public readonly noteRepo: Repository<Note>,
    @InjectRepository(Category)
    public readonly categoryRepo: Repository<Category>,
  ) {}
}

export default RepoService;
