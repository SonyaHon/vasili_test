import {BaseRepo}    from './base.repo';
import {BookEntity}  from '../entity/book.entity';
import {ICreateBook} from '../datatypes/book.dt';
import {authorRepo}  from './author.repo';
import {IError}      from '../datatypes/error';

class BookRepo extends BaseRepo {
	public async createNew(data: ICreateBook): Promise<BookEntity | IError> {
		const bookEntity = new BookEntity();
		bookEntity.name = data.name;
		bookEntity.pageCount = data.pageCount;
		if (data.authorId) {
			bookEntity.author = await authorRepo.findOneById(data.authorId);
		}
		return this.connection.manager.save(bookEntity);
	}

	public async findOneById(id: number): Promise<BookEntity | null> {
		const repo = await this.connection.getRepository(BookEntity);
		return repo.findOne({
			where:     {
				id,
			},
			relations: ['author'],
		});
	}

	public async findMany(): Promise<BookEntity[]> {
		const repo = await this.connection.getRepository(BookEntity);
		return repo.find({
			relations: ['author'],
		});
	}
}

export const bookRepo = new BookRepo();