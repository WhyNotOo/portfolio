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


	load(card) {
		console.log('card loaded', card);
	}


	hideAllBut(card, set) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].classList.add('disabled');
		}
		card.classList.remove('disabled');
	}

}