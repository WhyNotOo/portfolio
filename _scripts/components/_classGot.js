class GOT {

	constructor() {

	}

	build(building, timeout) {
		setTimeout(function() {
			for (let i = 0, length = building.length; i < length; i++) {
				building[i].classList.add('done');
			}
		}, timeout);
	}

}


const throne = new GOT();
let got_kingdom = document.querySelectorAll('.got_kingdom');
let got_towers = document.querySelectorAll('.got_tower');
let got_arrows = document.querySelectorAll('.got_arrow');
let got_parliament_roof = document.querySelectorAll('.got_parliament_roof');


throne.build(got_kingdom, 0);
throne.build(got_towers, 10000);
throne.build(got_arrows, 5000);
throne.build(got_parliament_roof, 5000);