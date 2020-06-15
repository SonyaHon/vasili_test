import {InitDB}       from './db';
import {InitRepos}    from './repo';
import {InitGraph}    from './graph';
import {ApolloServer} from 'apollo-server-express';
import Express        from 'express';

export async function start() {
	const connection = await InitDB();
	await InitRepos(connection);
	const schema = await InitGraph();
	const server = new ApolloServer({schema});
	const app = Express();
	server.applyMiddleware({app});

	app.listen({port: 9876}, () => {
		console.log(`Server ready and listening at ==> http://localhost:9876${server.graphqlPath}`);
	});
}