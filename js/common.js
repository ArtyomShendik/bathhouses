var clientWidth      = $(window).innerWidth(),
	winWidth         = $(window).outerWidth(),
	scrollBarWidth   = parseFloat( winWidth - clientWidth),
	body             = $('body').eq(0),
	maskField        = '+375 (__) ___-__-__';

$(window).on('load',function(){
	$('.loader').fadeOut(300);
	overflowBody(0, 'off');
});

function overflowBody(delay, toggleBody){

	if ( toggleBody == 'on' )
	{
		body.css('padding-right', scrollBarWidth).css('overflow', 'hidden');
	}
	else if ( toggleBody == 'off' )
	{
		setTimeout(function(){
			body.css('padding-right', '0').css('overflow-x', 'hidden').css('overflow-y', 'auto');
		}, delay);
	}

}




$(function() {
	$(document).ready(function(){
	
		// mask tel
	var telInp = $('input[name="tel"]');
				
	telInp.each(function(){
		$(this).mask("+375 (99) 999-99-99");

			$(this).click(function(){
			if($(this).val() == '+375 (__) ___-__-__'){
				$(this).setCursorPosition(6);
			}
			});
	});

	
// set cursore position
	$.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};


	});
});



$(function() {

	$(document).ready(function(){
		// block 1 slider

		var contentSldier = $('.block1-slider'),
			bgSldier      = $('.block1-bg-slider');

		if ( contentSldier.length > 0 )
		{
			var arrLeft = $('#block1-slider-arrow-left'),
				arrRight = $('#block1-slider-arrow-right');

			contentSldier.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: true,
				prevArrow: arrLeft,
				nextArrow: arrRight,
				// fade: true,
				cssEase: 'ease-in',
				draggable: false,
				pauseOnFocus: false,
				swipe: false,
				touchMove: false
			});
		}
		
		// if ( bgSldier.length > 0 )
		// {
			
		// 	bgSldier.slick({
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 		arrows: false,
		// 		fade: true,
		// 		cssEase: 'linear',
		// 		pauseOnHover:false,
		// 		asNavFor: contentSldier
		// 	});
		// }
	
	});

});

$(function() {
	if ( winWidth > 1000 ){
		$(document).ready(function(){
			var containerWidth = $('.container').eq(0).width(),
				block4Items = $('.block4-item-content-wrapper'),
				padLeft = ( clientWidth - containerWidth ) / 2;
			
			block4Items.css('padding-left', padLeft).css('padding-right', padLeft);

		});
	}
});


$(function() {
	$(document).ready(function(){
		//WORKS BLOCK5
		
		// works main slider

		var block5Slider = $('.block5-slider');

		if ( block5Slider.length > 0 )
		{
			var arrLeft = $('#block5-slider-arrow-left'),
				arrRight = $('#block5-slider-arrow-right'),
				dottsWrapper = $('#block5-slider-dots-wrapper');

			block5Slider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				prevArrow: arrLeft,
				nextArrow: arrRight,
				appendDots: dottsWrapper,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 760,
						settings: {
							arrows: false,
							slidesToShow: 2,
							dots: true
						}
					},
					{
						breakpoint: 700,
						settings: {
							arrows: false,
							slidesToShow: 1,
							dots: true
						}
					}
				]
			});
		}


		var block5Slider = $('.block5-slider-simple');

		if ( block5Slider.length > 0 )
		{
			var arrLeft = $('#block5-slider-simple-arrow-left'),
				arrRight = $('#block5-slider-simple-arrow-right'),
				dottsWrapper = $('#block5-slider-simple-dots-wrapper');

			block5Slider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				prevArrow: arrLeft,
				nextArrow: arrRight,
				appendDots: dottsWrapper,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 760,
						settings: {
							arrows: false,
							slidesToShow: 2,
							dots: true
						}
					},
					{
						breakpoint: 700,
						settings: {
							arrows: false,
							slidesToShow: 1,
							dots: true
						}
					}
				]
			});
		}

		// block5 simple slider magnific popup

		var block5PopupLinks = $('.block5-slider-simple-link');

		if ( block5PopupLinks.length > 0 )
		{
			block5PopupLinks.magnificPopup({
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				}
			});
		}

		// works sliders

		var worksSliders = $('.block5-work-slider');

		if ( worksSliders.length > 0 )
		{
			worksSliders.each(function(){
				var self = $(this),
					arrLeft = self.siblings('.block5-work-slider-arrow-left'),
					arrRight = self.siblings('.block5-work-slider-arrow-right'),
					dotsWrapper = self.siblings('.block5-work-slider-dots-wrapper');

				self.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: arrLeft,
					nextArrow: arrRight,
					appendDots: dotsWrapper,
					dots: false,
					responsive: [
						{
							breakpoint: 760,
							settings: {
								arrows: false,
								dots: true
							}
						}
					]
				});
			});
		}

		// works modals

		var worksMainModal    = $('.block5-works-modal'),
			worksModals       = $('.block5-work'),
			openWorkModalBtns = $('.block5-slider-item-btn'),
			closeWorkModals   = $('.block5-works-close-modal');

		if ( openWorkModalBtns.length > 0 )
		{
			openWorkModalBtns.click(function(){
				var self = $(this),
					targetIndex = self.data('work'),
					target = worksMainModal.find('#block5-work-' + targetIndex);
				
				target.css('z-index', '100').css('opacity', '1');
				worksMainModal.css('z-index', '100').animate({
					opacity: 1
				},300)
				overflowBody(0, 'on');
			});
		}

		closeWorkModals.click(function(){
			worksMainModal.animate({
				opacity: 0
			},300)
			overflowBody(300, 'off');
			setTimeout(function(){
				worksMainModal.css('z-index', '-100');
				worksModals.css('z-index', '-100').css('opacity', '0');
			}, 500)
		});

	});
});


$(function() {
	$(document).ready(function(){
		// block6 tabs
		var block6TabLinks = $('.block6-tabs-nav-btn'),
			block6TabContentItems = $('.block6-tabs-content-item-wrapper'),
			toggleSpeed = 300;
		
		if ( block6TabLinks.length > 0 )
		{
			block6TabLinks.on('click', function(){
				var target = $(this).data('tab-target');

				if ( block6TabContentItems.eq(target).hasClass('showing') ) return false;

				block6TabLinks.removeClass('active');
				$(this).addClass('active');

				block6TabContentItems.fadeOut(toggleSpeed);
				setTimeout(function(){
					block6TabContentItems.eq(target).fadeIn(toggleSpeed);
				},toggleSpeed - 10);
			});
		}
	});
});


$(function() {
	$(document).ready(function(){
		// modal form
		
		var modalFromSect = $('.modal-form-section'),
			modalClose = $('.modal-close'),
			openModalBtns = $('.modal-btn'),
			modalSubject = $('#modal-fom-subject'),
			modalFormBtn = $('#modal-form-btn');

		openModalBtns.on('click', function(){
			var subject = $(this).data('subject'),
				btnText = $(this).text();

			modalFormBtn.text(btnText);
			modalSubject.val(subject);
			modalFromSect.fadeIn(300);
			overflowBody(0, 'on');
		});


		modalClose.on('click', function(){
			modalFromSect.fadeOut(300);
			overflowBody(300, 'off');
		});


		var forms = $('form'),
			modals = $('.modal-works, .modal'),
			thanksModal = $('.modal-thanks-section');

		forms.on('submit', function(){
			var self = $(this),
				data = self.serialize();

			$.ajax({
					type: "POST",
					url: "mail.php", //Change
					data: data
				}).done(function() {
					modals.fadeOut(300);
					self.get(0).reset();
					setTimeout(function() {
						thanksModal.fadeIn(300).delay(3000).fadeOut(300);
						overflowBody(3600, 'off');
					}, 300);

				});
				return false;
		});
		
	});
});