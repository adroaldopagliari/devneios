import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from 'src/models/user.entity';
import UserInput from 'src/input/user.input';
import RepoService from '../repo.service';

@Resolver(() => User)
class UserResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }

  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: string): Promise<User> {
    return this.repoService.userRepo.findOne(id);
  }

  @Mutation(() => User)
  public async createOrLoginUser(
    @Args('data') input: UserInput,
  ): Promise<User> {
    let user = await this.repoService.userRepo.findOne({
      where: { email: input.email.toLowerCase().trim() },
    });

    if (!user) {
      user = this.repoService.userRepo.create({
        email: input.email.toLowerCase().trim(),
      });
    }
    await this.repoService.userRepo.save(user);

    return user;
  }
}
export default UserResolver;
