function theme() {
	const toggleTheme = document.querySelectorAll('.switch-color');

	toggleTheme.forEach(element => {
		element.addEventListener('click', () => {
			let el = document.documentElement;
			if (el.hasAttribute('data-theme')) {
				el.removeAttribute('data-theme');
				localStorage.removeItem('theme');
			} else {
				el.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			}

			if (localStorage.getItem('theme') !== null) {
				el.hasAttribute('data-theme');
			}
		});
	});
}

theme();