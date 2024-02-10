import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from '../tipos/IColaborador';

export const colaboradoresOriginais:IColaborador[] = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Monica Hillman',
      cargo: 'Desenvolvedora Front-End e Instrutora na Alura',
      imagem: 'https://github.com/monicahillman.png',
      time: 'Front-End',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rafa Ballerini',
      cargo: 'Desenvolvedora de software, instrutora e criadora de conteúdo',
      imagem: 'https://github.com/rafaballerini.png',
      time: 'Data Science',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Juliana Amoasei',
      cargo: 'Desenvolvedora de Software e Instrutora na Alura',
      imagem: 'https://github.com/JulianaAmoasei.png',
      time: 'Programação',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Guilherme Lima',
      cargo: 'Desenvolvedora Front-End e Instrutora na Alura',
      imagem: 'https://github.com/guilhermeonrails.png',
      time: 'Front-End',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vinicios Neves',
      cargo: 'Instrutor na Alura',
      imagem: 'https://github.com/viniciosneves.png',
      time: 'DevOps',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Paulo Silveira',
      cargo: 'Hipster e CEO da Alura',
      imagem:  'https://github.com/Alura.png',
      time: 'Inovação e Gestão',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Luiz Fernando Ribeiro',
      cargo: 'Instrutor na Alura',
      imagem:  'https://github.com/lfrprazeres.png',
      time: 'Programação',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Isadora Cardoso',
      cargo: 'Instrutor na Alura',
      imagem:  'https://cdn2.gnarususercontent.com.br/1/1159677/d270e454-a78c-415e-9f1b-dd237137100a.jpg',
      time: 'UX e Design',
      data:'10/01/2018' // formato: MM/DD/AAAA
    },
  ]