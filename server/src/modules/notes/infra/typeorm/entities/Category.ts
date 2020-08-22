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

import Note from './Note';

@ObjectType()
@Entity()
@Tree('materialized-path')
export default class Category {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @TreeChildren()
  children: Category[];

  @Field()
  @TreeParent()
  parent: Category;

  @OneToMany(
    () => Note,
    noteCategory => noteCategory.categoryConnection,
  )
  noteConnection: Promise<Category[]>;
}
