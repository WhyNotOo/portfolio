class Cards {

	constructor() {
		DOMTokenList.prototype.addMany = function(classes) {
			var classes = classes.split(' '),
				i = 0,
				ii = classes.length;

			for(i; i<ii; i++) {
				this.add(classes[i]);
			}
		}

		DOMTokenList.prototype.removeMany = function(classes) {
			var classes = classes.split(' '),
				i = 0,
				ii = classes.length;

			for(i; i<ii; i++) {
				this.remove(classes[i]);
			}
		}		
	}

	loop(set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].addEventListener('click', function(e) {
				e.stopPropagation();
				Card.reveal(this, set);
				let cardsChild = set[i].querySelectorAll(':scope [data-element="card-child"]');
				Card.loop(cardsChild);
				Card.backToTheFuture();
			}, false);
		}
	}

	reveal(card, set) {
		Card.hideAllBut(card, set);
		// Card.pushState(card);
		card.classList.add('active');
	}

	hideAllBut(card, set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].classList.add('disabled');
		}
		card.classList.remove('disabled');
	}

	pushState(card) {
		let url = card.dataset.state;
		history.replaceState('', '', url);
	}

	backToTheFuture(card, set) {
		
	}

}

const Card = new Cards();

let cardsParent = document.querySelectorAll('[data-element="card"]');

Card.loop(cardsParent);
