class Navigation {

	constructor() {}

	redirectTo(card) {
		console.log('redirect to', card);
	}

}

const Tabs = new Navigation();
let tabs = document.querySelectorAll('.navigation .link');
Helper.loop(tabs, 'click', function(e) {
	e.stopPropagation();
	console.log('this', this);
	Tabs.redirectTo(this);
});