import { criar_cards, renderizar } from './app.js'
import CardInstrutor from './CardInstrutor.js'

class Instrutor {
	constructor(title, desc, src) {
		this.title = title
		this.desc = desc
		this.src = src
	}
}

function init(infos = data) {
	const cards_instrutores = criar_cards(infos, CardInstrutor)
	renderizar('.instrutores', cards_instrutores)
}

const data = [
	new Instrutor(
		'Maria',
		'A instrutora Maria trabalha no Curso Lero Lero há 5 anos, especialista em jogar papo fora com os estudantes',
		'https://i.pravatar.cc/150?img=34'
	),
	new Instrutor(
		'Rafa',
		'Rafa é nova no Curso e provou ser imbativel na área de selfies espontâneas',
		'https://i.pravatar.cc/150?img=44'
	)
]

init(data)
