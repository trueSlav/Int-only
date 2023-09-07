document.addEventListener('DOMContentLoaded', () => {
	
	const wrapper = document.querySelector('.wrapper'),
				button = document.querySelectorAll('.hero-section__round');
	
	const closeBtn = () => {
		button.forEach(item => {
			if(item.classList.contains('active')){
				item.classList.remove('active');
			}
		})
	}
	
	const openBtn = (i) => {
		button[i].classList.add('active');
	}

	wrapper.addEventListener('click', e => {
		console.log(e.target);

		if(e.target && e.target.classList.contains('hero-section__round')){
			button.forEach((element, i) => {
				if(e.target == element){
					closeBtn();
					openBtn(i);
				}
			});
		}

		if(e.target && e.target.classList.contains('wrapper')){
			closeBtn();
		}
	});

})