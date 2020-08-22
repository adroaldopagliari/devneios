/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';

import Note from './note.entity';

@ObjectType()
@Entity('users')
class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => Note,
    note => note.userConnection,
  )
  noteConnection: Promise<Note[]>;
}

export default User;
