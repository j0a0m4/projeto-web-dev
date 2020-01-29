export default function CardInstrutor({ title, desc, src }) {
	const card = `<article class="col d-flex justify-content-center">
  <div class="card bg-dark text-light border border-tertiary my-3" style="width: 18rem;">
    <img src="${src}" class="card-img-top" alt="${title}" />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${desc}</p>
      <a href="#" class="btn btn-primary">Mais Informações</a>
    </div>
  </div>
</article>`
	return card
}
