import 'reflect-metadata';
import {start} from './server';

start().catch(e => {
	throw e;
});

