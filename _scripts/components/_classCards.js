class Card {

	constructor() {}


	load(card, set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].classList.remove('loading');
		}

		console.log('card loaded', card);
		card.parentElement.classList.add('active');
		Helper.timeout(function() {
			card.classList.add('extended');
		}, 400);
	}

}

const Cards = new Card();
let cards = document.querySelectorAll('.card_pointer');
Helper.loop(cards, 'click', function(e) {
	e.preventDefault();
	Cards.load(this, cards);
});