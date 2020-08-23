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
export class NoteInput {
  @Field()
  readonly content: string;

  @Field()
  readonly user: NoteUserInput;
}

@InputType()
export class DeleteNoteInput {
  @Field()
  readonly noteId: string;

  @Field()
  readonly userId: string;
}
