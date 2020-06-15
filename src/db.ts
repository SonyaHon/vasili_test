import {createConnection} from 'typeorm';
import config             from '../config.json';
import {AuthorEntity}     from './entity/author.entity';
import {BookEntity}       from './entity/book.entity';

export async function InitDB() {
	try {
		const connection = await createConnection({
			type:        'postgres',
			host:        config.db.host,
			port:        config.db.port,
			username:    config.db.username,
			password:    config.db.password,
			database:    config.db.database,
			entities:    [
				AuthorEntity,
				BookEntity,
			],
			logging:     false,
			synchronize: true,
		});
		console.log('Successfully connected to the database');
		return connection;
	} catch (e) {
		throw e;
	}
}