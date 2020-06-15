import {buildSchema}    from 'type-graphql';
import {AuthorResolver} from './author.resolver';
import {BookResolver}   from './book.resolver';

export async function InitGraph() {
	return await buildSchema({
		resolvers:      [AuthorResolver, BookResolver],
		emitSchemaFile: true,
		validate:       false,
	});
}