class Helpers {

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

	loop(set, event, callback) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].addEventListener(event, callback, false);
		}
	}

	timeout(callback, time) {
		setTimeout(callback, time);
	}

	getPost(url) {
		return new Promise(function(resolve, reject) {
			var req = new XMLHttpRequest();
			req.open('GET', url);

			req.onload = function() {
				if (req.status == 200)
					resolve(req.response);
				else
					reject(Error(req.statusText));
			};

			req.onerror = function() {
				reject(Error('Error url'));
			};

			req.send();
		});
	}

}

const Helper = new Helpers();