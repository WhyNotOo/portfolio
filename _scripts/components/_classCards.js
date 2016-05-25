class Card {

	constructor() {}


	load(card, set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].classList.removeMany('extended active');
			set[i].parentElement.classList.remove('active');
		}

		Helper.timeout(function() {
			card.parentElement.classList.add('active');
			Helper.timeout(function() {
				card.classList.add('extended');

				Helper.timeout(function() {
					card.classList.add('active');
				}, 300);

				let posts = document.querySelectorAll('.post');
				Helper.loop(posts, 'click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					Cards.loadPost(this, posts);
				});
			}, 300);
		}, 300);
	}


	loadPost(post, set) {
		let url = post.getAttribute('href');
		if(url != '' && url != null)
			document.location = url;
	}

}

const Cards = new Card();
let cards = document.querySelectorAll('.action');
Helper.loop(cards, 'click', function(e) {
	e.preventDefault();
	Cards.load(this, cards);
});