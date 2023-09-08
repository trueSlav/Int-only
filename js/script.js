document.addEventListener('DOMContentLoaded', () => {
	
	const wrapper = document.querySelector('.wrapper'),
				button = document.querySelectorAll('.hero-section__round'),
				btnText = document.querySelectorAll('.hero-section__round p'),
				plus = document.querySelectorAll('.hero-section__plus'),
				minus = document.querySelectorAll('.hero-section__minus');
	
	const closeBtn = (i) => {
		button[i].classList.remove('active');
		btnText[i].style.display = 'none';

		if(plus[i].style.display === 'none'){
			minus[i].style.display = 'none';
			plus[i].style.display = 'flex';
		}
	}
	const swithColor = (i) => {
		// if(button[i].classList.contains('rnd_blue')){
		// 	button[i].classList.remove('rnd_blue');
		// 	button[i].classList.add('active-color-blue');
		// } else if(!button[i].classList.contains('rnd_blue')){
		// 	button[i].classList.remove('active-color-blue');
		// 	button[i].classList.add('rnd_blue');
		// } else if(button[i].classList.contains('rnd_green')){
		// 	button[i].classList.remove('rnd_green');
		// 	button[i].classList.add('active-color-green');
		// } else if(!button[i].classList.contains('rnd_green')){
		// 	button[i].classList.remove('active-color-green');
		// 	button[i].classList.add('rnd_green');
		// }

		// if(button[i].classList.contains('rnd_blue')){
		// 	button[i].classList.remove('rnd_blue');
		// 	button[i].classList.add('active-color-blue');
			
		// } else {
		// 	button[i].classList.remove('active-color-blue');
		// 	button[i].classList.add('rnd_blue');
		// }

		// if(button[i].classList.contains('rnd_green')){
		// 	button[i].classList.remove('rnd_green');
		// 	button[i].classList.add('active-color-green');
		// } else {
		// 	button[i].classList.remove('active-color-green');
		// 	button[i].classList.add('rnd_green');
		// }

		// if(button[i].classList.contains('rnd_blue')){
		// 	button[i].style.backgroundColor = '#3877EE';
		// } else if(button[i].style.backgroundColor == 'rgb(56, 119, 238)'){
		// 	console.log('qweqwe');
		// 	button[i].style.backgroundColor = '#3a79eeb3';
		// }

		// button[i].style.backgroundColor = (button[i].classList.contains('rnd_blue')) ? '#3877EE' : '#3a79eeb3';


	}
	const toggleBtn = (i) => {

		button[i].classList.toggle('active');
		btnText[i].style.display = (btnText[i].style.display != 'block') ? 'block' : 'none';

		if (plus[i].style.display != 'none') {
			plus[i].style.display = 'none';
			minus[i].style.display = 'block';
		} else if(plus[i].style.display === 'none'){
			minus[i].style.display = 'none';
			plus[i].style.display = 'flex';
		}

		swithColor(i)

	}

	wrapper.addEventListener('click', e => {
		console.log(e.target);

		if(e.target && e.target.classList.contains('hero-section__div')){
			button.forEach((element, i) => {
				if(e.target == element){
					toggleBtn(i);
				}
			});
		} 

		if(e.target && e.target.classList.contains('wrapper')){
			button.forEach((element, i) => {
				closeBtn(i);
			});
		}

	});

})