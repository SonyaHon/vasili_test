import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {AuthorEntity}                                                 from './author.entity';
import {Field, ObjectType}                                            from 'type-graphql';

@Entity()
@ObjectType('book', {description: 'Book'})
export class BookEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: number;

	@Column()
	@Field()
	name: string;

	@Column()
	@Field()
	pageCount: number;

	@Column({nullable: true})
	authorId: number;

	@Field(() => AuthorEntity, {nullable: true})
	@OneToOne(() => AuthorEntity)
	@JoinColumn()
	author: AuthorEntity;
}