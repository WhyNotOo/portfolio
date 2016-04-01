class Card {

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


	load(card, set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].classList.remove('loading');
		}

		console.log('card loaded', card);
		card.classList.add('loading');
	}


	hideAllBut(card, set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].classList.add('disabled');
		}
		card.classList.remove('disabled');
	}

}