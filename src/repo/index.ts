import {Connection} from 'typeorm';
import {authorRepo} from './author.repo';
import {bookRepo}   from './book.repo';

export async function InitRepos(connection: Connection) {
	authorRepo.setConnection(connection);
	bookRepo.setConnection(connection);
}