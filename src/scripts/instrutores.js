import { criar_cards, renderizar } from './app.js'
import CardInstrutor from './CardInstrutor.js'

class Instrutor {
	constructor(title, desc, id) {
		this.title = title
		this.desc = desc
		this.src = `../../assets/instrutores/${id}.jpeg`
	}
}

function init(infos) {
	renderizar('.instrutores', criar_cards(infos, CardInstrutor))
}

const data = [
	new Instrutor(
		'Mario',
		'Trabalha no Curso Lero Lero há 5 anos, especialista em jogar papo fora com os estudantes',
		18
	),
	new Instrutor(
		'Rafa',
		'Rafa é nova no Curso e provou ser imbativel na área de selfies espontâneas',
		44
	),
	new Instrutor(
		'Han',
		'Famosa por seus longos textos no facebook, a instrutora Han ensina como dominar essa arte',
		25
	),
	new Instrutor(
		'Chris',
		'Suas festas vão bombar depois de aprender com Chris como montar sua playlist perfeita',
		69
	)
]

init(data)
