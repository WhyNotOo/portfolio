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
let got_layer = document.querySelectorAll('.got_layer');
let got_towers = document.querySelectorAll('.got_tower');
let got_arrows = document.querySelectorAll('.got_arrow');
let got_parliament_roof = document.querySelectorAll('.got_parliament_roof');


throne.build(got_kingdom, 0);
throne.build(got_layer, 5000);
throne.build(got_towers, 15000);
throne.build(got_arrows, 10000);
throne.build(got_parliament_roof, 10000);