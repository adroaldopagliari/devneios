import { Controller, Get } from '@nestjs/common';
import RepoService from './repo.service';

@Controller()
export default class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello(): Promise<string> {
    return `There are: ${this.repoService.userRepo.count()} users.`;
  }
}
