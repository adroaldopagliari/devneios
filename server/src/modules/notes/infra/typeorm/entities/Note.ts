/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';

import User from '@modules/users/infra/typeorm/entities/User';
import Category from './Category';

@ObjectType()
@Entity('notes')
class Note {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Field(() => User)
  user: User;

  @ManyToOne(
    () => User,
    user => user.noteConnection,
    { primary: true },
  )
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User>;

  @OneToMany(
    () => Category,
    noteCategory => noteCategory.name,
  )
  categoryConnection: Promise<Category[]>;
}

export default Note;
