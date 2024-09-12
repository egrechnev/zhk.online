$(function() {

//--header menu
	$('.burger, .menu a').on('click', function(){
		$('.burger').toggleClass('clicked');
		$('.menu').toggleClass('show');
		$('body').toggleClass('overflow');

		if ($('.menu').hasClass('show')) {
			$('.burger-legal').addClass('burger-menu-legal');
		} else {
			$('.burger-legal').removeClass('burger-menu-legal');
		}

		menuAniTop.play();
		menuAniBottom.play();
	});


// switch button
	$('.page-physical').waypoint(
		function() {
			$('body').toggleClass('physical');
		}
	)

	$('.page-legal').waypoint(
		function() {
			$('body').toggleClass('legal');
		}
	)


//--navigation menu links

// Cache selectors
	var lastId,
	    topMenu = $('.header__menu, .nav, .main__wrapper'),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find('.anchor'),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr('href'));
	      if (item.length) { return item; }
	    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr('href'),
	      offsetTop = href === '#' ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({
	      scrollTop: offsetTop
	  }, 500);
	  e.preventDefault();
});

// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";

	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass('active')
	         .end().filter('[href="#'+id+'"]').parent().addClass('active');
	   }
	});


//--to smoth scroll when putten on link
	var topHeight = 45;
	$('#more').click(function() {
		$('html, body').animate({
			scrollTop: $('#advantage').offset().top-topHeight
		}, 800);
	});

	$('#more-legal').click(function() {
		$('html, body').animate({
			scrollTop: $('#simple-legal').offset().top-topHeight
		}, 800);
	});


//--parallax
 //    var scrollTop = $(window).scrollTop();

 //    function parallax( $this ) {
 //    	var translate = (scrollTop - $($this).data('orig-offset')) / $(window).height() * 40;
 //    	$($this).css({transform: 'translate3d(0,' + translate +'%'+', 0)'});
 //    }

 //    $('.parallax').each( function() {
 //    	$(this).data('orig-offset', $(this).offset().top);
 //    	parallax( $(this) );
 //    });

 //    $(window).scroll( function() {
 //    	scrollTop = $(window).scrollTop();

 //    	$('.parallax').each( function() {
 //        	parallax( $(this) );
 //    	});
 //    });

	// $(window).on('resize', function () {
 //  		scrollTop = $(window).scrollTop();

 //  		$('.parallax').each( function() {
 //    		$(this).data('orig-offset', $(this).offset().top);
 //    		parallax( $(this) );
	// 	});
	// });


//--tabs
	$(function(s) {
		var n;
		s('.for-whom__items').on('click', 'li:not(.active)', function() {
			n = s(this).parents('.for-whom__tabs'), s(this).dmtabs(n)
		}), s.fn.dmtabs = function(n) {
			s(this).addClass('active').siblings().removeClass('active'), n.find('.for-whom__content').eq(s(this).index()).show(1, function() {
				s(this).addClass('open_tab')
			}).siblings('.for-whom__content').hide(1, function() {
				s(this).removeClass('open_tab')
			})
		}
	});


//--slides

	$('.how-1').on('click', function(){
		$('.how-it-works-1').addClass('active').slick({
			dots: true,
			adaptiveHeight: false,
			autoplay: true,
			draggable: true,
			fade: true,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			pauseOnFocus: false,
			prevArrow: '.btn-prev',
			nextArrow: '<div class="btn-next btn-next_legal">Далее</div>'
		});

		if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').slick('unslick');
		}
	});

	$('.how-2').on('click', function(){
		$('.how-it-works-2').addClass('active').slick({
			dots: true,
			adaptiveHeight: false,
			autoplay: true,
			draggable: true,
			fade: true,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			pauseOnFocus: false,
			prevArrow: '.btn-prev',
			nextArrow: '<div class="btn-next btn-next_legal">Далее</div>'
		});


		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').slick('unslick');
		}
	});

	$('.how-3').on('click', function(){
		$('.how-it-works-3').addClass('active').slick({
			dots: true,
			adaptiveHeight: false,
			autoplay: true,
			draggable: true,
			fade: true,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			pauseOnFocus: false,
			prevArrow: '.btn-prev',
			nextArrow: '<div class="btn-next btn-next_legal">Далее</div>'
		});

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').slick('unslick');
		}
	});

	$('.how-4').on('click', function(){
		$('.how-it-works-4').addClass('active').slick({
			dots: true,
			adaptiveHeight: false,
			autoplay: true,
			draggable: true,
			fade: true,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			pauseOnFocus: false,
			prevArrow: '.btn-prev',
			nextArrow: '<div class="btn-next btn-next_legal">Далее</div>'
		});

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').slick('unslick');
		}
	});


	// physical slides active
	$('.how-it-works_physical').on('scrollSpy:enter', function() {
		// console.log('enter:', $(this).attr('id'));

		$('.how-it-works__slides').addClass('active').slick({
			dots: true,
			adaptiveHeight: false,
			autoplay: true,
			draggable: true,
			fade: true,
			autoplaySpeed: 10000,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			pauseOnFocus: false,
			prevArrow: '.btn-prev',
			nextArrow: '<div class="btn-next">Далее</div>'
		});

	});

	$('.how-it-works_physical').on('scrollSpy:exit', function() {
		// console.log('exit:', $(this).attr('id'));
		$('.how-it-works__slides').removeClass('active').slick('unslick');
	});

	$('.how-it-works_physical').scrollSpy();


	// legal slides active
	$('.how-it-works_legal').on('scrollSpy:enter', function() {

		if ($('.how-1').hasClass('active')) {

			$('.how-it-works-1').addClass('active').slick({
				dots: true,
				adaptiveHeight: false,
				autoplay: true,
				draggable: true,
				fade:true,
				autoplaySpeed: 5000,
				pauseOnHover: false,
				pauseOnDotsHover: false,
				pauseOnFocus: false,
				prevArrow: '.btn-prev',
				nextArrow: '<div class="btn-next btn-next_legal">Далее</div>'
			});

		}

	});

	$('.how-it-works_legal').on('scrollSpy:exit', function() {
		$('.how-it-works-1').slick('unslick').removeClass('active');
	});

	$('.how-it-works_legal').scrollSpy();



// for-whom-slides mobile
	$('.for-whom-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		fade:true,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 300,
		lazyLoad: 'ondemand',
		asNavFor: '.thumb-nav',
		prevArrow: '<div class="slick-prev d-none"></div>',
		nextArrow: '<div class="slick-next d-none"></div>',
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});


// Thumbnail/alternates slider for for-whom-slides
	$('.thumb-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		centerPadding: '0px',
		asNavFor: '.for-whom-slider',
		dots: false,
		centerMode: true,
		draggable: true,
		speed:200,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev d-none"></div>',
		nextArrow: '<div class="slick-next d-none"></div>',
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	      }
	    }
	  ]
	});


//--accordion
	var $question = $('.accordion .faq__question');
	$question.click(function(){

        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active');
        } else {
            $question.removeClass('active');
            $this.addClass('active');
        }

		if(false == $(this).next().is(':visible')) {
			$('.accordion .faq__answer').slideUp(300);
		}
		$(this).next().slideToggle(300);
	});
	// $('.accordion .faq__answer:eq(0)').show();


//--numbering
	// $('.num').each(function(i) {
	//     var number = i + 1;
	//     $(this).prepend(number);
	// });


//--popup window
	$('#send-request').popup({
	  pagecontainer: '.page',
	  transition: 'all 0.3s',
	  closebutton: true,
	  scrolllock: true,
	  color: 'rgba(0, 0, 0, 0.8)'
	});


// mobile footer logo-burger-change
	// if ($(window).width() < 768) {
	//     $('.footer-form').addClass('logo-burger-change');
	// }


//--svg animation
	// setTimeout(function() {
	// }, 550);

	const menuAniTop = new Vivus('menu-ani-top', {
		duration: 80,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();


	const menuAniBottom = new Vivus('menu-ani-bottom', {
		duration: 80,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();


	const advantageAni = new Vivus('advantage-ani', {
		duration: 80,
		type: 'oneByOne',
		// type: 'delayed',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.main__store').waypoint(
		function() {
			advantageAni.play();
			$('.advantage__img-ani').show();
		}
	);

	const payAni = new Vivus('pay-ani', {
		duration: 80,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.advantage__title').waypoint(
		function() {
			payAni.play();
			$('.pay__img-ani').show();
		}
	);

	const securityAni = new Vivus('security-ani', {
		duration: 90,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.how-it-works__physical-bottom').waypoint(
		function() {
			securityAni.play();
			$('.security__img-ani').show();
		}
	);

	const securityAniLock = new Vivus('security-ani-lock', {
		duration: 90,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.how-it-works__physical-bottom').waypoint(
		function() {
			securityAniLock.play();
			$('.security__img-ani-lock').show();
		}
	);

	const simpleAniTop = new Vivus('simple-ani-top', {
		duration: 60,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.main__slogan_arrow-legal').waypoint(
		function() {
			simpleAniTop.play();
			$('.simple__img-ani-top').show();
		}
	);


	const simpleAniBottom = new Vivus('simple-ani-bottom', {
		duration: 60,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.simple').waypoint(
		function() {
			simpleAniBottom.play();
			$('.simple__img-ani-bottom').show();
		}
	);

	const mobileAppAniTop = new Vivus('mobile-app-ani-top', {
		duration: 80,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.how-it-works__legal-bottom').waypoint(
		function() {
			mobileAppAniTop.play();
			$('.mobile-app__img-ani-top').show();
		}
	);


	const mobileAppAniBottom = new Vivus('mobile-app-ani-bottom', {
		duration: 80,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	}).stop();

	$('.how-it-works__legal-bottom').waypoint(
		function() {
			mobileAppAniBottom.play();
			$('.mobile-app__img-ani-bottom').show();
		}
	);


//--Analytics
$('.telephone').on('click', function(){

	//Facebook Pixel
	fbq('trackCustom', 'Клик по номеру телефона');

	//Yandex Metrika
	ym(61915597,'reachGoal','Telephone');

	//Google Analytics
	gtag('event', 'Клик по номеру телефона', {'event_category': 'Telephone', 'event_action': 'Click'});

	// ga('send', 'event', 'Telephone', 'Click');
	
});


//form


	// send-request

	$('#ask-question').on('submit', function(e){
		e.preventDefault();

		var formMsg 	= $(this),
			formName 	= $('#aq-name').val(),
			formCompany = $('#aq-company').val(),
			formEmail 	= $('#aq-email').val(),
			formTel 	= $('#aq-tel').val(),
			formMessage = $('#aq-message').val(),
			formResult 	= $('#aq-result').val(),
			formKey 	= $('#aq-key').text();


		if ($('#aq-submit').val() === 'jdgey58dbet29wg41dge', $('#aq-fake-email').val() === 'dolsk@opwer.com'){

			$("#aq-btn").addClass("loading");

			$.ajax({
				url: 'https://faq.zhk.online/zhk-api/?op=ask-question&name=' + formName + '&company=' + formCompany + '&email=' + formEmail + '&phoneNumber=' + formTel + '&message=' + formMessage + '&captchaKey=' + formKey + '&captchaValue=' + formResult,
				success: function(){
				    // alert('Сообщение отправлено!');
					$('.success').css('display', 'flex').hide().fadeIn();

					//--Analytics
					//Facebook Pixel					
					fbq('trackCustom', 'Успешная отправка заявки');

					//Yandex Metrika
					ym(61915597,'reachGoal','Form');

					//Google Analytics
					gtag('event', 'Успешная отправка заявки', {'event_category': 'Form', 'event_action': 'Submit'});

				    setTimeout(function() {

				    	formMsg.trigger('reset');
				    	$("#aq-btn").removeClass("loading");
				    	$('.success').fadeOut();

						$.ajax({
							url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
							success: function(data){
								$('#aq-captcha').text(data.captcha);
								$('#aq-key').text(data.captchaKey);
						  }
						});

				    }, 2000);
			  	},
				error: function () {
					// alert('Сообщение не отправлено!');
					$('.unsuccessful').css('display', 'flex').hide().fadeIn();

					setTimeout(function() {
						$('#aq-result').val('');
						$("#aq-btn").removeClass("loading");
						$('.unsuccessful').fadeOut();

						$.ajax({
							url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
							success: function(data){
								$('#aq-captcha').text(data.captcha);
								$('#aq-key').text(data.captchaKey);
						  }
						});
					}, 2000);
				}
			});

		}

	});


	$.ajax({
	  url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
	  success: function(data){
	    $('#aq-captcha').text(data.captcha);
	    $('#aq-key').text(data.captchaKey);
	  }
	});



	// request-demo-menu

	$('#request-demo-menu').on('submit', function(e){
		e.preventDefault();

		var formMsg 	= $(this),
			formName 	= $('#rdm-name').val(),
			formCompany = $('#rdm-company').val(),
			formEmail 	= $('#rdm-email').val(),
			formTel 	= $('#rdm-tel').val(),
			formResult 	= $('#rdm-result').val(),
			formKey 	= $('#rdm-key').text();


		if ($('#rdm-submit').val() === 'sdsigu336342323hxvfd', $('#rdm-fake-email').val() === 'wabsa@gsq.com'){

			$("#rdm-btn").addClass("loading");

			$.ajax({
				url: 'https://faq.zhk.online/zhk-api/?op=request-demo&name=' + formName + '&company=' + formCompany + '&email=' + formEmail + '&phoneNumber=' + formTel + '&captchaValue=' + formResult + '&captchaKey=' + formKey,
				success: function(){
				    // alert('Сообщение отправлено!');
					$('.success').css('display', 'flex').hide().fadeIn();

					//--Analytics
					//Facebook Pixel					
					fbq('trackCustom', 'Успешная отправка заявки');

					//Yandex Metrika
					ym(61915597,'reachGoal','Form');

					//Google Analytics
					gtag('event', 'Успешная отправка заявки', {'event_category': 'Form', 'event_action': 'Submit'});

				    setTimeout(function() {

				    	formMsg.trigger('reset');
				    	$("#rdm-btn").removeClass("loading");
				    	$('.success').fadeOut();

						$.ajax({
							url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
							success: function(data){
								$('#rdm-captcha').text(data.captcha);
								$('#rdm-key').text(data.captchaKey);
						  }
						});

				    }, 2000);
			  	},
				error: function () {
					// alert('Сообщение не отправлено!');
					$('.unsuccessful').css('display', 'flex').hide().fadeIn();

					setTimeout(function() {
						$('#rdm-result').val('');
						$("#rdm-btn").removeClass("loading");
						$('.unsuccessful').fadeOut();

						$.ajax({
							url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
							success: function(data){
								$('#rdm-captcha').text(data.captcha);
								$('#rdm-key').text(data.captchaKey);
						  }
						});
					}, 2000);
				}
			});

		}


	});

	$.ajax({
	  url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
	  success: function(data){
	    $('#rdm-captcha').text(data.captcha);
	    $('#rdm-key').text(data.captchaKey);
	  }
	});


	// request-demo-footer

	$('#request-demo-footer').on('submit', function(e){
		e.preventDefault();

		var formMsg 	= $(this),
			formName 	= $('#rdf-name').val(),
			formCompany = $('#rdf-company').val(),
			formEmail 	= $('#rdf-email').val(),
			formTel 	= $('#rdf-tel').val(),
			formResult 	= $('#rdf-result').val(),
			formKey 	= $('#rdf-key').text();


		if ($('#rdf-submit').val() === 'qwigu3802323hkbfak23', $('#rdf-fake-email').val() === 'sfiolg@nhf.com'){

			$("#rdf-btn").addClass("loading");

			$.ajax({
				url: 'https://faq.zhk.online/zhk-api/?op=request-demo&name=' + formName + '&company=' + formCompany + '&email=' + formEmail + '&phoneNumber=' + formTel + '&captchaValue=' + formResult + '&captchaKey=' + formKey,
				success: function(){
				    // alert('Сообщение отправлено!');
					$('.success').css('display', 'flex').hide().fadeIn();

					//--Analytics
					//Facebook Pixel					
					fbq('trackCustom', 'Успешная отправка заявки');

					//Yandex Metrika
					ym(61915597,'reachGoal','Form');

					//Google Analytics
					gtag('event', 'Успешная отправка заявки', {'event_category': 'Form', 'event_action': 'Submit'});

				    setTimeout(function() {

				    	formMsg.trigger('reset');
				    	$("#rdf-btn").removeClass("loading");
				    	$('.success').fadeOut();

						$.ajax({
							url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
							success: function(data){
								$('#rdf-captcha').text(data.captcha);
								$('#rdf-key').text(data.captchaKey);
						  }
						});

				    }, 2000);
			  	},
				error: function () {
					// alert('Сообщение не отправлено!');
					$('.unsuccessful').css('display', 'flex').hide().fadeIn();

					setTimeout(function() {
						$('#rdf-result').val('');
						$("#rdf-btn").removeClass("loading");
						$('.unsuccessful').fadeOut();

						$.ajax({
							url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
							success: function(data){
								$('#rdf-captcha').text(data.captcha);
								$('#rdf-key').text(data.captchaKey);
						  }
						});
					}, 2000);
				}
			});

		}

	});


	$.ajax({
	  url: 'https://faq.zhk.online/zhk-api/?op=request-captcha',
	  success: function(data){
	    $('#rdf-captcha').text(data.captcha);
	    $('#rdf-key').text(data.captchaKey);
	  }
	});


	// $.ajax({
	// 	url: 'https://faq.zhk.online/zhk-api/?op=request-captcha'
	// }).done(function(data) {
	// 	$('#rdf-captcha').text(data.captcha);
	// 	$('#rdf-key').text(data.captchaKey);
	// });


	//phone mask 
	$('.phone-mask').mask('00000000000');


});


$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 0) {
        $('.header').addClass('shadow')
    } else {
        $('.header').removeClass('shadow')
    }
});


$(window).on('load', function () {

//--preloader
	$preloader = $('.loaderArea'),
	$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(100).fadeOut('slow');

//--show svg animation
	setTimeout(function() {
		$('.ani-svg').fadeIn();
	}, 400);

	new Vivus('drawing-girl', {
		duration: 100,
		type: 'oneByOne',
		reverseStack: false,
		forceRender: true },
		function (obj) {obj.el.classList.add('finished');
	});

//--scrolling elements change
	$('.logo-change').waypoint(
		function() {
			$('.header__logo_light').toggleClass('active');
		}
	)

	$('.logo-burger-change').waypoint(
		function() {
			$('.burger').toggleClass('burger-light');
			$('.header__logo_light').toggleClass('active');
		}
	)

	$('.switch-legal-text').waypoint(
		function() {
			$('.switch-color').toggleClass('switch__text-light');
		}
	)

});


// invalid-input
$(document).bind('change', function(e){
    if( $(e.target).is(':invalid') ){
        $(e.target).addClass('invalid-input');
    } else {
        $(e.target).removeClass('invalid-input');
    }
});


if(/(MSIE|Triden)/.test(navigator.userAgent)){
    document.body.innerHTML = '<p class="ie">Браузер не поддерживается. <br> Пожалуйста, <a href="https://www.google.ru/chrome/">установите другой браузер</a>.</p>';
}

// if(/(MSIE|Triden|Edge)/.test(navigator.userAgent)){
//     document.body.innerHTML = '<p class="ie">Браузер не поддерживается. <br> Пожалуйста, <a href="https://www.google.ru/chrome/">установите другой браузер</a>.</p>';
// }
