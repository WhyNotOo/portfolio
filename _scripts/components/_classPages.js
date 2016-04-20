class Page {

	constructor() {}


	social(button) {
		button.classList.toggle('active');
		social[0].classList.toggle('active');
	}

}

const Pages = new Page();
let pages = document.querySelectorAll('.action_page');
let social = document.querySelectorAll('.action_page_content');
Helper.loop(pages, 'click', function(e) {
	e.preventDefault();
	Pages.social(this);
});