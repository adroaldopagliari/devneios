/* eslint-disable max-classes-per-file */
import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

@InputType()
class NoteUserConnectInput {
  @Field()
  readonly id: string;
}

@InputType()
class NoteUserInput {
  @Field({ nullable: true })
  readonly connect: NoteUserConnectInput;

  @Field({ nullable: true })
  readonly create: UserInput;
}

@InputType()
class NoteInput {
  @Field()
  readonly content: string;

  @Field()
  readonly user: NoteUserInput;
}

export default NoteInput;
