export default function Card({ title, desc, src }) {
	const card = `<div class="card" style="width: 18rem;">
    <img src="${src}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${desc}</p>
      <a href="#" class="btn btn-primary">Mais Informações</a>
    </div>
</div>`
	return card
}
