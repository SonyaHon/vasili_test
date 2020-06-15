import {Arg, Field, InputType, Mutation, Query, Resolver} from 'type-graphql';
import {AuthorEntity}                                     from '../entity/author.entity';
import {authorRepo}                                from '../repo/author.repo';

@InputType()
export class AuthorInput {
	@Field()
	name: string;
}

@Resolver(() => AuthorEntity)
export class AuthorResolver {
	@Query (() => AuthorEntity)
	async author(@Arg('authorId') authorId: number) {
		return await authorRepo.findOneById(authorId);
	}

	@Mutation(() => AuthorEntity)
	async addAuthor(@Arg('data') authorInput: AuthorInput) {
		return await authorRepo.createNew(authorInput);
	}
}