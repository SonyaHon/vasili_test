import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ObjectType}                                 from 'type-graphql';

@Entity()
@ObjectType('author', {description: 'Author'})
export class AuthorEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;
}

