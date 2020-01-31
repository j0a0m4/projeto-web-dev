import { criar_cards, renderizar } from './app.js'
import CardAluno from './CardAluno.js'

class Aluno {
	constructor(nome, comentario, id) {
		this.nome = nome
		this.comentario = comentario
		this.src = `../../assets/alunos/${id}.jpeg`
	}
}
