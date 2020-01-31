function criar_cards(infos, component) {
	const cards = []
	for (let info of infos) {
		let new_card = component(info)
		cards.push(new_card)
	}
	return cards
}

function renderizar(element, cards) {
	for (let card of cards) {
		$(element).append(card)
	}
}

function App(element, infos, component) {
	renderizar(element, criar_cards(infos, component))
}

export default App
