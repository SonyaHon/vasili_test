import {Arg, Field, FieldResolver, InputType, Mutation, Query, Resolver, Root} from 'type-graphql';
import {BookEntity}                                                            from '../entity/book.entity';
import {bookRepo}                                                              from '../repo/book.repo';
import {AuthorEntity}                                                          from '../entity/author.entity';

@InputType()
export class BookInput {
	@Field()
	name: string;

	@Field()
	pageCount: number;

	@Field({nullable: true})
	authorId: number;
}

@Resolver(() => BookEntity)
export class BookResolver {
	@Query(() => BookEntity)
	async book(@Arg('bookId') bookId: number) {
		return bookRepo.findOneById(bookId);
	}

	@Query(() => [BookEntity])
	async books() {
		return bookRepo.findMany();
	}

	@FieldResolver(() => (AuthorEntity), {nullable: true, defaultValue: null})
	author(@Root() bookEntity: BookEntity): AuthorEntity | null {
		return bookEntity.author;
	}

	@Mutation(() => BookEntity)
	async addBook(@Arg('data') bookInput: BookInput) {
		return bookRepo.createNew(bookInput);
	}

}