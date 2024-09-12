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

		// menuAniTop.play();
		// menuAniBottom.play();
	});
	
	$(window).resize(function() {
		if ($(window).width() > 991.98) {
			if ($('.menu').hasClass('show')) {
				$('.burger').toggleClass('clicked');
				$('.menu').toggleClass('show');
				$('body').toggleClass('overflow');
				$('.burger-legal').removeClass('burger-menu-legal');
			}
		}
	});


//--navigation menu links

// Cache selectors
	var lastId,
	    topMenu = $('.header__menu, .nav'),
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
	var topHeight = 42;
	$('.scope__item').click(function() {
		$('html, body').animate({
			scrollTop: $('#how-it-works-legal').offset().top-topHeight
		}, 800);
	});


//--tabs
	$(function(s) {
		var n;
		s('.how-it-works__items').on('click', 'li:not(.active)', function() {
			n = s(this).parents('.for-whom__tabs'), s(this).dmtabs(n)
		}), s.fn.dmtabs = function(n) {
			s(this).addClass('active').siblings().removeClass('active'), n.find('.for-whom__content').eq(s(this).index()).fadeIn().show(1, function() {
				s(this).addClass('open_tab')
			}).siblings('.for-whom__content').hide(1, function() {
				s(this).removeClass('open_tab')
			})
		}
	});


//--slides

	$('.scope-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: true,
		adaptiveHeight: false,
		autoplay: true,
		draggable: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		pauseOnFocus: false
	});


	// scroll slides active
	$('.how-it-works').on('scrollSpy:enter', function() {

		if ($('.how-1').hasClass('active')) {

			$('.how-it-works-1').not('.active').fadeIn().addClass('active').slick({
				dots: true,
				adaptiveHeight: false,
				autoplay: true,
				draggable: true,
				fade: true,
				// cssEase: 'initial',
				autoplaySpeed: 5000,
				pauseOnHover: false,
				pauseOnDotsHover: false,
				pauseOnFocus: false,
				prevArrow: '.btn-prev',
				nextArrow: '<div class="btn-next btn-next_legal">Далее</div>'
			});
		}
	});

	$('.how-it-works').on('scrollSpy:exit', function() {
		$('.how-it-works-1').slick('unslick').removeClass('active').hide();
	});

	$('.how-it-works').scrollSpy();

	//

	$('.how-1, .scope-01').on('click', function(){
		$('.how-it-works-1').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-1').addClass('active');
		$('.how-2, .how-3, .how-4, .how-5, .how-6, .how-7, .how-8').removeClass('active');

		if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});


	$('.how-2, .scope-02').on('click', function(){
		$('.how-it-works-2').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-2').addClass('active');
		$('.how-1, .how-3, .how-4, .how-5, .how-6, .how-7, .how-8').removeClass('active');


		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});

	$('.how-3, .scope-03').on('click', function(){
		$('.how-it-works-3').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-3').addClass('active');
		$('.how-1, .how-2, .how-4, .how-5, .how-6, .how-7, .how-8').removeClass('active');

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});

	$('.how-4, .scope-04').on('click', function(){
		$('.how-it-works-4').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-4').addClass('active');
		$('.how-1, .how-2, .how-3, .how-5, .how-6, .how-7, .how-8').removeClass('active');

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});

	$('.how-5, .scope-05').on('click', function(){
		$('.how-it-works-5').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-5').addClass('active');
		$('.how-1, .how-2, .how-3, .how-4, .how-6, .how-7, .how-8').removeClass('active');

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});

	$('.how-6, .scope-06').on('click', function(){
		$('.how-it-works-6').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-6').addClass('active');
		$('.how-1, .how-2, .how-3, .how-4, .how-5, .how-7, .how-8').removeClass('active');

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});

	$('.how-7, .scope-07').on('click', function(){
		$('.how-it-works-7').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-7').addClass('active');
		$('.how-1, .how-2, .how-3, .how-4, .how-5, .how-6, .how-8').removeClass('active');

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-8').hasClass('active')) {
			$('.how-it-works-8').removeClass('active').hide().slick('unslick');
		}
	});

	$('.how-8, .scope-08').on('click', function(){
		$('.how-it-works-8').not('.active').fadeIn().addClass('active').slick({
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

		$('.how-8').addClass('active');
		$('.how-1, .how-2, .how-3, .how-4, .how-5, .how-6, .how-7').removeClass('active');

		if ($('.how-it-works-1').hasClass('active')) {
			$('.how-it-works-1').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-2').hasClass('active')) {
			$('.how-it-works-2').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-3').hasClass('active')) {
			$('.how-it-works-3').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-4').hasClass('active')) {
			$('.how-it-works-4').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-5').hasClass('active')) {
			$('.how-it-works-5').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-6').hasClass('active')) {
			$('.how-it-works-6').removeClass('active').hide().slick('unslick');
		} else if ($('.how-it-works-7').hasClass('active')) {
			$('.how-it-works-7').removeClass('active').hide().slick('unslick');
		}
	});



// // for-whom-slides mobile
// 	$('.for-whom-slider').slick({
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		arrows: false,
// 		fade:true,
// 		autoplay: false,
// 		autoplaySpeed: 4000,
// 		speed: 300,
// 		lazyLoad: 'ondemand',
// 		asNavFor: '.thumb-nav',
// 		prevArrow: '<div class="slick-prev d-none"></div>',
// 		nextArrow: '<div class="slick-next d-none"></div>',
// 		responsive: [
// 	    {
// 	      breakpoint: 768,
// 	      settings: {
// 	        arrows: false,
// 	        centerMode: true,
// 	        centerPadding: '40px',
// 	        slidesToShow: 1
// 	      }
// 	    }
// 	  ]
// 	});


// // Thumbnail/alternates slider for for-whom-slides
// 	$('.thumb-nav').slick({
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		arrows: false,
// 		centerPadding: '0px',
// 		asNavFor: '.for-whom-slider',
// 		dots: false,
// 		centerMode: true,
// 		draggable: true,
// 		speed:200,
// 		focusOnSelect: true,
// 		prevArrow: '<div class="slick-prev d-none"></div>',
// 		nextArrow: '<div class="slick-next d-none"></div>',
// 		responsive: [
// 	    {
// 	      breakpoint: 768,
// 	      settings: {
// 			// slidesToShow: 3,
// 			slidesToShow: 1,
// 			centerPadding: '158px'
// 	      }
// 	    }
// 	  ]
// 	});
	

//--trust-slider

$('.trust-slider').slick({
	rows: 2,
	dots: true,
	arrows: false,
	infinite: true,
	speed: 800,
	autoplay: true,
	autoplaySpeed: 5000,
	draggable: true,
	pauseOnHover: false,
	pauseOnDotsHover: false,
	pauseOnFocus: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				rows: 2,
				slidesToScroll: 2,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				rows: 2,
				slidesToScroll: 2,
				slidesToShow: 2
			}
		}
	]
});


//--popup window
	$('#send-request').popup({
	  pagecontainer: '.page',
	  transition: 'all 0.3s',
	  closebutton: true,
	  scrolllock: false,
	  color: 'rgba(0, 0, 0, 0.8)'
	});


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


//--form


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

					
					let personalData = (document.cookie.match(/^(?:.*;)?\s*persDataProcessingAccepted\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

				   	if ( personalData !== 'yes') {

						$.ajax({ 
							url: "https://api-dev.zhk.online/api/v4/client-agreements/accept-personal-data-processing",
							contentType: "application/json",
							method: "PUT",
							data: JSON.stringify({ userId: userId, phoneNumber: formTel, emailAddress: formEmail, fullName: formName, companyName: formCompany }),
							success: function(){
								document.cookie = 'persDataProcessingAccepted=yes';
							}
						});

						$('.checkbox-policy').prop('checked', true);
					}


				    setTimeout(function() {

						// formMsg.trigger('reset');
						$('#aq-name').val('');
						$('#aq-company').val('');
						$('#aq-email').val('');
						$('#aq-tel').val('');
						$('#aq-message').val(''),
						$('#aq-result').val('');

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


					let personalData = (document.cookie.match(/^(?:.*;)?\s*persDataProcessingAccepted\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

					if ( personalData !== 'yes') {

						$.ajax({ 
							url: "https://api-dev.zhk.online/api/v4/client-agreements/accept-personal-data-processing",
							contentType: "application/json",
							method: "PUT",
							data: JSON.stringify({ userId: userId, phoneNumber: formTel, emailAddress: formEmail, fullName: formName, companyName: formCompany }),
							success: function(){
								document.cookie = 'persDataProcessingAccepted=yes';
							}
						});

						$('.checkbox-policy').prop('checked', true);
					}
					
					// function getCookie(name) {
					// 	let matches = document.cookie.match(new RegExp(
					// 	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
					// 	));
					// 	return matches ? matches[1] : undefined;
					//   }


				    setTimeout(function() {
						// formMsg.trigger('reset');
						$('#rdf-name').val('');
						$('#rdf-company').val('');
						$('#rdf-email').val('');
						$('#rdf-tel').val('');
						$('#rdf-result').val('');

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

	//phone mask 
	$('.phone-mask').mask('00000000000');


//--cookieDisclaimer
	let cookieStatus = (document.cookie.match(/^(?:.*;)?\s*disclamerAccepted\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
	if ( cookieStatus !== 'yes') {
		$('.cookie-disclaimer').removeClass('hide');

		$('#acceptCookies').on('click', () => {
			document.cookie = 'disclamerAccepted=yes';
			$('.cookie-disclaimer').addClass('hide');
			// $('.checkbox-policy').prop('checked', true);

			$.ajax({ 
				url: "https://api-dev.zhk.online/api/v4/client-agreements/accept-disclaimer",
				contentType: "application/json",
				method: "PUT",
				data: JSON.stringify({ userId: userId }),
		   });

		});

	}

//--zhkUserId
	zhkCookieName = "zhkUserId";
	if (!document.cookie.match( new RegExp( "(?:^|; )" + zhkCookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")) ) {
		const milliseconds = new Date().getTime();
		zhkUserId = milliseconds + '-' + Math.floor(Math.random() * 90000000);
		document.cookie = 'zhkUserId=' +  zhkUserId;
	}

	const userId = $.cookie('zhkUserId');


//--form checkboxPolicy	
	const checkboxPolicy = (document.cookie.match(/^(?:.*;)?\s*persDataProcessingAccepted\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

	if ( checkboxPolicy == 'yes') {
		$('.checkbox-policy').prop('checked', true);
	}



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



//--IE
if(/(MSIE|Triden)/.test(navigator.userAgent)){
    document.body.innerHTML = '<p class="ie">Браузер не поддерживается. <br> Пожалуйста, <a href="https://www.google.ru/chrome/">установите другой браузер</a>.</p>';
}

// if(/(MSIE|Triden|Edge)/.test(navigator.userAgent)){
//     document.body.innerHTML = '<p class="ie">Браузер не поддерживается. <br> Пожалуйста, <a href="https://www.google.ru/chrome/">установите другой браузер</a>.</p>';
// }
