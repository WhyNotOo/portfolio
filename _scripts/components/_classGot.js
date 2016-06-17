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
let got_arrows = document.querySelectorAll('.got_arrow');
let got_roof = document.querySelectorAll('.got_roof');
let got_church = document.querySelectorAll('.got_church');
let got_rempart = document.querySelectorAll('.got_rempart');


throne.build(got_kingdom, 0);
throne.build(got_layer, 2000);
throne.build(got_church, 6000);
throne.build(got_arrows, 10000);
throne.build(got_roof, 10000);
throne.build(got_rempart, 16000);