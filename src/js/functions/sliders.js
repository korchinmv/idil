import Swiper, { Navigation, Scrollbar, Lazy, Pagination } from 'swiper';
function initSliders() {
	if (document.querySelector('.slider-care')) {
		new Swiper('.slider-care', {
			modules: [Navigation, Scrollbar, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 25,
			slidesPerGroup: 1,
			autoHeight: false,
			speed: 800,
			lazy: true,

			scrollbar: {
				el: '.slider-scrollbar',
				draggable: true,
				dragSize: 215,
			},

			navigation: {
				prevEl: '.slider-button-prev',
				nextEl: '.slider-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				560: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				1750: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.reviews-slider')) {
		new Swiper('.reviews-slider', {
			modules: [Navigation, Lazy, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 24,
			slidesPerGroup: 1,
			autoHeight: false,
			speed: 800,
			lazy: true,

			navigation: {
				prevEl: '.slider-button-prev',
				nextEl: '.slider-button-next',
			},

			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1230: {
					slidesPerView: 4,
					spaceBetween: 24,
				}
			},
			on: {

			}
		});
	}

	if (document.querySelector('.specialists-slider')) {
		new Swiper('.specialists-slider', {
			modules: [Navigation, Lazy, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 24,
			slidesPerGroup: 1,
			autoHeight: false,
			speed: 800,
			lazy: true,

			navigation: {
				prevEl: '.slider-button-prev',
				nextEl: '.slider-button-next',
			},

			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				560: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			},
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});