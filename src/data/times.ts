import { v4 as uuidv4 } from 'uuid';
import { ITime } from '../tipos/ITime';

export const timesOriginais:ITime[] = [
	{ nome: 'Programação', cor: '#57c278', id: uuidv4() },
	{ nome: 'Front-End', cor: '#82cffa', id: uuidv4() },
	{ nome: 'Data Science', cor: '#a6d157', id: uuidv4() },
	{ nome: 'DevOps', cor: '#d06b69', id: uuidv4() },
	{ nome: 'UX e Design', cor: '#db6ebf', id: uuidv4() },
	{ nome: 'Mobile', cor: '#ffba05', id: uuidv4() },
	{ nome: 'Inovação e Gestão', cor: '#ff8a29', id: uuidv4() },
]
