class Page {

	constructor() {
		
	}


	loop(set, event, callback) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].addEventListener(event, callback, false);
		}
	}


	reveal(page) {
		for (let i = 0, length = pages.length; i < length; i++) {
			pages[i].classList.remove('active');
		}

		page.classList.add('active');

		const Cards = new Card();
		let childrens = document.querySelectorAll(':scope [data-element="card"]');
		Pages.loop(childrens, 'click', function(e) {
			e.stopPropagation();
			Cards.load(this);
		});
	}


}

const Pages = new Page();
let pages = document.querySelectorAll('[data-element="page"]');
Pages.loop(pages, 'click', function(e) {
	e.stopPropagation();
	Pages.reveal(this);
});