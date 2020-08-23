/* eslint-disable camelcase */
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import Note from 'src/models/note.entity';
import NoteInput from 'src/input/note.input';
import User from 'src/models/user.entity';
import RepoService from '../repo.service';

@Resolver(() => Note)
class NoteResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Note])
  public async getNotes(): Promise<Note[]> {
    return this.repoService.noteRepo.find();
  }

  @Query(() => [Note])
  public async getNotesFromUser(
    @Args('user_id') user_id: number,
  ): Promise<Note[]> {
    return this.repoService.noteRepo.find({
      where: { user_id },
    });
  }

  @Query(() => Note, { nullable: true })
  public async getNote(@Args('id') id: number): Promise<Note> {
    return this.repoService.noteRepo.findOne(id);
  }

  @Mutation(() => Note)
  public async createNote(@Args('data') input: NoteInput): Promise<Note> {
    const note = this.repoService.noteRepo.create({
      content: input.content,
      user_id: input.user.connect.id,
    });
    return this.repoService.noteRepo.save(note);
  }

  @ResolveField(() => User)
  public async getUser(@Parent() parent): Promise<User> {
    return this.repoService.userRepo.findOne(parent.user_id);
  }
}
export default NoteResolver;
