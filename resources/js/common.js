const Wrapper = document.querySelector('#wrapper');

function pageStart(){
    Wrapper.classList.add('page-active');
    Wrapper.classList.add('page-head-motion');
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

/* 1.2S delay 헤더 모션 삭제 */
async function myAsyncFunction(){
    await delay(1);
    Wrapper.classList.remove('page-head-motion');
}

setTimeout(pageStart, 100);
myAsyncFunction();

function clickCompany(id){
    let CompanyAll = document.querySelectorAll('.portfolio-list > li');
    let li = id.closest('li');

    if(!li.classList.contains('backshow')) {
        for(var i =0; i < CompanyAll.length; i++){
            CompanyAll[i].classList.remove('backshow');
        }
        li.classList.add('backshow');
    } else {
        li.classList.remove('backshow');
    }
}

const TabList = document.querySelectorAll('.tab-menu .list li');
const TabContents = document.querySelectorAll('.tab-view .tab-cont');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < TabList.length; i++){
    TabList[i].querySelector('.tab-btn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < TabList.length; j++){
            // 나머지 버튼 클래스 제거
            TabList[j].classList.remove('current');

            // 나머지 컨텐츠 display:none 처리
            TabContents[j].classList.remove('active');
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('current');

        // 버튼 클릭시 컨텐츠 전환
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).classList.add('active');
    });
}


$(document).ready(function() {
    // topBtn
    const BtnTop = $('.btn-top');
    const Footer = $('#footer');
    $(window).on('scroll', function(){
        var $window = $(window), anchor = $window.scrollTop() + $window.height();
        var fot = Footer.offset().top;
        if (anchor > fot) BtnTop.removeClass('fixed');
        else BtnTop.addClass('fixed');
    });

    $(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			BtnTop.fadeIn();
		} else {
			BtnTop.fadeOut();
		}
	});
    
	// scroll body to 0px on click
	BtnTop.bind("click", function(e) {
		// Prevents the default action to be triggered.
		e.preventDefault();

		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
});
