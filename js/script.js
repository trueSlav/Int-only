document.addEventListener('DOMContentLoaded', () => {
	
	const wrapper = document.querySelector('.wrapper'),
				button = document.querySelectorAll('.hero-section__round'),
				btnText = document.querySelectorAll('.hero-section__round p'),
				plus = document.querySelectorAll('.hero-section__plus'),
				minus = document.querySelectorAll('.hero-section__minus');
	
	const closeBtn = (i) => {
		button[i].classList.remove('active');

		if(button[i].classList.contains('rnd_blue')){
			button[i].style.backgroundColor = 'rgba(56, 119, 238, .7)';
		}

		if(button[i].classList.contains('rnd_green')) {
			button[i].style.backgroundColor = 'rgba(106, 191, 75, .7)';
		}
		
		btnText[i].style.display = 'none';

		if(plus[i].style.opacity === '0'){
			minus[i].style.opacity = '0';
			plus[i].style.opacity = '1';
		}

	}

	const swithColor = (i) => {

		if(button[i].classList.contains('rnd_blue')){
			button[i].style.backgroundColor = (button[i].style.backgroundColor === 'rgb(56, 119, 238)') ? 'rgba(56, 119, 238, .7)' : 'rgb(56, 119, 238)';
		}

		if(button[i].classList.contains('rnd_green')) {
			button[i].style.backgroundColor = (button[i].style.backgroundColor === 'rgb(106, 191, 75)') ? 'rgba(106, 191, 75, .7)' : 'rgb(106, 191, 75)';
		}

	}

	const toggleBtn = (i) => {

		button[i].classList.toggle('active');

		btnText[i].style.display = (btnText[i].style.display != 'block') ? 'block' : 'none';
		
		plus[i].style.opacity = (plus[i].style.opacity != '0') ? '0' : '1';
		minus[i].style.opacity = (minus[i].style.opacity != '1') ? '1' : '0';
		
		swithColor(i);

	}

	const openBtn = () => {

		wrapper.addEventListener('click', e => {
			const target = e.target;
	
			if(target && (target.classList.contains('hero-section__round') || target.classList.contains('hero-section__plus'))){
	
					plus.forEach((element, i) => {
						if(target === element){
							toggleBtn(i);
						}
					})
	
			}
	
			if(e.target && e.target.classList.contains('wrapper')){
				button.forEach((element, i) => {
					closeBtn(i);
				});
			}
	
		});

	}

	openBtn();

})