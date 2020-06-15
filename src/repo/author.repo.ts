import {ICreateAuthor} from '../datatypes/author.dt';
import {AuthorEntity}  from '../entity/author.entity';
import {BaseRepo}      from './base.repo';
import {IError}        from '../datatypes/error';

export class AuthorError {
	public static CreateNew(message: string): IError {
		return {
			error: true,
			message,
		};
	}
}

class AuthorRepo extends BaseRepo {
	public async createNew(data: ICreateAuthor): Promise<AuthorEntity | IError> {
		try {
			const authorEntity = new AuthorEntity();
			authorEntity.name = data.name;
			return this.connection?.manager.save(authorEntity);
		} catch (e) {
			console.error(e);
			return AuthorError.CreateNew(e.message);
		}
	}

	public async findOneById(id: number): Promise<AuthorEntity | null> {
		const repo = this.connection.getRepository(AuthorEntity);
		return await repo.findOne({
			where: {
				id,
			},
		});
	}
}

export const authorRepo = new AuthorRepo();