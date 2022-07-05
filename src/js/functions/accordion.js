document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const btn = self.querySelector('.accordion__btn');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				btn.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				btn.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});