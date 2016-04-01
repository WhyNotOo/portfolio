class Helpers {

	constructor() {}

	loop(set, event, callback) {
		for (let i = 0, length = set.length; i < length; i++) {
			set[i].addEventListener(event, callback, false);
		}
	}

}

const Helper = new Helpers();