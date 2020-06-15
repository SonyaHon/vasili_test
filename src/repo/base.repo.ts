import {Connection} from 'typeorm';

export class BaseRepo {
	connection: Connection | null = null;

	public setConnection(connection: Connection) {
		this.connection = connection;
	}
}