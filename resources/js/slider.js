const MainSwiper = new Swiper(".visual-swiper", {
    centeredSlides: true,
    effect: 'fade',
    slidesPerView: 1,
    speed: 1e3,
    simulateTouch: false,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.visual-swiper .swiper-pagination',
        type: 'bullets',
        bulletActiveClass: 'active',
        bulletClass: 'bullet',
        clickable: true,
        renderBullet: function (index, className) {
            if(index < 10) index = '0' + (index+1);
            return `
                <a href="javascript: void(0)" class="${className}">
                        <span>${index}</span>
                </a>
            `;
        },
    },
});

const MainNewsSwiper = new Swiper(".news-swiper", {
    slidesPerView: 1,
    pagination: {
        el: '.news-swiper .swiper-pagination',
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 40,
            centeredSlides: false,
        },
        1261: {
            slidesPerView: "auto",
            // centeredSlides: true,
            spaceBetween: 60,
        },
    },
});

const HistorySwiper = new Swiper(".history-swiper", {
    slidesPerView: 1,
    pagination: {
        el: '.history-swiper .swiper-pagination',
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: "auto",
            spaceBetween: 120,
            centeredSlides: false,
        },
        1261: {
            slidesPerView: "auto",
            // centeredSlides: true,
            spaceBetween: 120,
        },
    },
});

var ww = $(window).width();
let scrollSwiper = undefined;
let teamSwiperA = undefined;
let teamSwiperB = undefined;
let teamSwiperC = undefined;

function TeamInitSwiper() {
	var ww = $(window).width();
	if(ww < 1024 && teamSwiperA == undefined) {
        teamSwiperA = new Swiper(".team-swiper.tyA", {
            loop: false,
			slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-arrow-next",
                prevEl: ".swiper-arrow-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
		teamSwiperB = new Swiper(".team-swiper.tyB", {
            loop: false,
			slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-arrow-next",
                prevEl: ".swiper-arrow-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
		teamSwiperC = new Swiper(".team-swiper.tyC", {
            loop: false,
			slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-arrow-next",
                prevEl: ".swiper-arrow-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    } else if (ww >= 1024 && teamSwiperA != undefined){
		document.querySelectorAll('.team-swiper').forEach(function( element , index ){
			teamSwiperA.destroy();
			teamSwiperB.destroy();
			teamSwiperC.destroy();
			teamSwiperA = undefined;
			teamSwiperB = undefined;
			teamSwiperC = undefined;
			$('.team-swiperA .swiper-wrapper').removeAttr('style');
			$('.team-swiperA .swiper-slide').removeAttr('style');
			$('.team-swiperB .swiper-wrapper').removeAttr('style');
			$('.team-swiperB .swiper-slide').removeAttr('style');
			$('.team-swiperC .swiper-wrapper').removeAttr('style');
			$('.team-swiperC .swiper-slide').removeAttr('style');
		});
    }
	//console.log( teamSwiper );
	//swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden
}
TeamInitSwiper();

function PopMemSwiper() {
    if (ww >= 1200 && scrollSwiper == undefined) {
      scrollSwiper = new Swiper(".info-scroll", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        mousewheel: true,
        observer: true,	// 추가
        observeParents: true,
      });
    } else if (ww < 1200 && scrollSwiper != undefined) {
      scrollSwiper.destroy();
      scrollSwiper = undefined;
    }
}
PopMemSwiper();

$(window).on('resize', function () {
    // ww = $(window).width();
    TeamInitSwiper();
    PopMemSwiper();
});
