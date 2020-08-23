import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  OneToMany,
} from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';

import Note from './note.entity';

@ObjectType()
@Entity()
@Tree('materialized-path')
export default class Category {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;

  @OneToMany(
    () => Note,
    noteCategory => noteCategory.categoryConnection,
  )
  noteConnection: Promise<Category[]>;
}
