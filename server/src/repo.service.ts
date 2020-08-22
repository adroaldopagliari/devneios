import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Note from './models/note.entity';
import Category from './models/category.entity';
import User from './models/user.entity';

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
