class Page {

	constructor() {}

	reveal(page) {
		for (let i = 0, length = pages.length; i < length; i++) {
			pages[i].classList.remove('active');
		}

		page.classList.add('active');

		const Cards = new Card();
		let childrens = document.querySelectorAll(':scope [data-element="card"]');
		Helper.loop(childrens, 'click', function(e) {
			e.stopPropagation();
			Cards.load(this, childrens);
		});
	}


}

const Pages = new Page();
let pages = document.querySelectorAll('[data-element="page"]');
Helper.loop(pages, 'click', function(e) {
	e.stopPropagation();
	Pages.reveal(this);
});