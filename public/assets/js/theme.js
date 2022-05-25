

var nextArrowPop = `<button type="button" class="next-popular" >
	<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
		<path style="fill:#003AB6" fill-rule="evenodd" d="M13.2097046,4.38710056 L13.2928932,4.29289322 C13.6533772,3.93240926 14.2206082,3.90467972 14.6128994,4.20970461 L14.7071068,4.29289322 L21.7071068,11.2928932 L21.7485042,11.336853 L21.7485042,11.336853 L21.8036654,11.4046934 L21.8036654,11.4046934 L21.8753288,11.5159379 L21.8753288,11.5159379 L21.9287745,11.628664 L21.9287745,11.628664 L21.9641549,11.734007 L21.9641549,11.734007 L21.9930928,11.8819045 L21.9930928,11.8819045 L22,12 L22,12 L21.9972121,12.0752385 L21.9972121,12.0752385 L21.9797599,12.2007258 L21.9797599,12.2007258 L21.9502619,12.3121425 L21.9502619,12.3121425 L21.9063266,12.4232215 L21.9063266,12.4232215 L21.8540045,12.5207088 L21.8540045,12.5207088 L21.7803112,12.625449 L21.7803112,12.625449 L21.7071068,12.7071068 L14.7071068,19.7071068 C14.3165825,20.0976311 13.6834175,20.0976311 13.2928932,19.7071068 C12.9324093,19.3466228 12.9046797,18.7793918 13.2097046,18.3871006 L13.2928932,18.2928932 L18.584,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L18.586,11 L13.2928932,5.70710678 C12.9324093,5.34662282 12.9046797,4.77939176 13.2097046,4.38710056 L13.2928932,4.29289322 L13.2097046,4.38710056 Z"/>
	</svg>
</button>`;

var prevArrowPop = `<button type="button" class="previous-popular" >
	<svg id="Layer" enable-background="new 0 0 64 64" width="15" height="15" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="#003AB6" d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>
</button>`;

var nextArrowPost = `<button type="button" class="next-most-commented" style="">
	<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path style="fill:#000000" fill-rule="evenodd" d="M13.2097046,4.38710056 L13.2928932,4.29289322 C13.6533772,3.93240926 14.2206082,3.90467972 14.6128994,4.20970461 L14.7071068,4.29289322 L21.7071068,11.2928932 L21.7485042,11.336853 L21.7485042,11.336853 L21.8036654,11.4046934 L21.8036654,11.4046934 L21.8753288,11.5159379 L21.8753288,11.5159379 L21.9287745,11.628664 L21.9287745,11.628664 L21.9641549,11.734007 L21.9641549,11.734007 L21.9930928,11.8819045 L21.9930928,11.8819045 L22,12 L22,12 L21.9972121,12.0752385 L21.9972121,12.0752385 L21.9797599,12.2007258 L21.9797599,12.2007258 L21.9502619,12.3121425 L21.9502619,12.3121425 L21.9063266,12.4232215 L21.9063266,12.4232215 L21.8540045,12.5207088 L21.8540045,12.5207088 L21.7803112,12.625449 L21.7803112,12.625449 L21.7071068,12.7071068 L14.7071068,19.7071068 C14.3165825,20.0976311 13.6834175,20.0976311 13.2928932,19.7071068 C12.9324093,19.3466228 12.9046797,18.7793918 13.2097046,18.3871006 L13.2928932,18.2928932 L18.584,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L18.586,11 L13.2928932,5.70710678 C12.9324093,5.34662282 12.9046797,4.77939176 13.2097046,4.38710056 L13.2928932,4.29289322 L13.2097046,4.38710056 Z"></path></svg>
</button>`;

var prevArrowPost = `<button type="button" class="previous-most-commented">
	<svg id="Layer" enable-background="new 0 0 64 64" width="15" height="15" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"></path></svg>
</button>`;

function searchDisplay() {
	jQuery(document).ready(function ($) {
		$('.search-trigger').click(function () {
			$(this).find('i').toggleClass('icon-close', 'icon-search');
			$('.search-dropdown').animate({
				height: 'toggle',
				opacity: 'toggle'
			});
		});
	});
}
// console.log('RAW ****************');
function utility() {
	jQuery(document).ready(function ($) {
		$('#nav-below').show();
		$('.nav-trigger').click(function () {
			$(this).find('i').toggleClass('icon-close', 'icon-menu');
			if ($('.nav-trigger').find('i').hasClass("icon-close")) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').css('overflow', 'unset');
			}
			$('.overlay-nav').animate({
				height: 'toggle',
				opacity: 'toggle'
			});
		});

		$("a[href='http://www.blogger.com/profile/18109285188206811042']").each(function () {
			$(this).closest('li').addClass('comment-author-joanna');
		});

		var $items = $('.widget.popular ol').children();
		// console.log('****************');
		// console.log($items);
		// if ( $items.length > 5 ) {
		//     // console.log('**** more than 5 ****');
		// 	$('.widget.popular .load-more').css('display','block');
		//     $items.hide().slice(0, 10).show();
		//     $('.widget.popular .load-more').click(function () {
		//         $items.fadeIn(); // or .show()
		//         $(this).remove();
		//         return false;
		//     });
		// } else {
		//         // console.log('**** less than 5 ****');
		//     $('.widget.popular .load-more').remove();
		// }

		// responsive videos
		$('.hentry').fitVids({ customSelector: "iframe[src*='nytimes.com/video'], iframe[src*='facebook.com/plugins/video']" });

		// smooth anchor links
		$('a[href*=\\#]:not(.nav-link):not(#cancel-comment-reply-link)').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top + 100
					}, 1000);
				}
			}
		});

		// update newsletter placeholder
		$('.footer-navigators .custom-mailchimp-form input[type=email]').on('focus', function () {
			$(this).attr('placeholder', 'Enter Your Email');
		}).on('blur', function () {
			$(this).attr('placeholder', 'Join Our Newsletter');
		}).on('keyup', function () {
			var isEmail = /.+@.+\..+/.test($(this).val());
			$('.footer-navigators .custom-mailchimp-form').toggleClass('enabled', isEmail);
		});

	});
}
function gridCaption() {
	jQuery(document).ready(function ($) {
		$('.caption').each(function () {
			var captionheight = $(this).height();
			$(this).css('height', captionheight);
		});
	});
}
function slider() {
	jQuery(document).ready(function ($) {
		$('.bxslider').fadeIn();
		$('.bxslider').bxSlider({
			mode: 'fade',
			pager: false,
			nextText: '&#xe807;',
			prevText: '&#xe808;',
			adaptiveHeight: true,
		});
	});
}
function faq() {
	jQuery(document).ready(function ($) {

		$('.question').click(function () {
			// if you want to have all others close when you click to open an item, uncomment the next line
			// $('.faq-item').removeClass('open-item');

			$(this).parent('.faq-item').toggleClass('open-item');
			$(this).next().fadeToggle();
		});
	});
}
// function imgParagraphs() {
//     jQuery(document).ready(function($) {
//         $('.format-standard .entry-content img, .single .entry-content img, .post iframe').each(function(){
//             // add class to parents of images and iframes
//             // allows them to be full width
//             $(this).parents('p').addClass('img-parent');
//         });
//     });
// }
function mailChimp() {
	var fnames = new Array(); var ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text';

	jQuery(document).ready(function ($) {

		$('.mc-embedded-subscribe-form').each(function () {
			var $this = $(this);
			var options = { errorClass: 'mce_inline_error', errorElement: 'div', onkeyup: function () { }, onfocusout: function () { }, onblur: function () { } };
			var mce_validator = $this.validate(options);
			$this.unbind('submit');//remove the validator so we can get into beforeSubmit on the ajaxform, which then calls the validator
			options = {
				url: '//cupofjo.us10.list-manage.com/subscribe/post-json?u=fcb79ce014877ec8ab07ef66c&id=309a15c5f3&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
				beforeSubmit: function () {
					$this.find('#mce_tmp_error_msg').remove();
					$this.find('.datefield', '#mc_embed_signup').each(
						function () {
							var txt = 'filled';
							var fields = new Array();
							var i = 0;
							$(':text', this).each(
								function () {
									fields[i] = this;
									i++;
								});
							$(':hidden', this).each(
								function () {
									var bday = false;
									if (fields.length == 2) {
										bday = true;
										fields[2] = { 'value': 1970 };//trick birthdays into having years
									}
									if (fields[0].value == 'MM' && fields[1].value == 'DD' && (fields[2].value == 'YYYY' || (bday && fields[2].value == 1970))) {
										this.value = '';
									} else if (fields[0].value == '' && fields[1].value == '' && (fields[2].value == '' || (bday && fields[2].value == 1970))) {
										this.value = '';
									} else {
										if (/\[day\]/.test(fields[0].name)) {
											this.value = fields[1].value + '/' + fields[0].value + '/' + fields[2].value;
										} else {
											this.value = fields[0].value + '/' + fields[1].value + '/' + fields[2].value;
										}
									}
								});
						});
					return mce_validator.form();
				},
				success: mce_success_cb
			};
			$this.ajaxForm(options);

		});

	});
	function mce_success_cb(resp) {
		$('.mce-success-response').hide();
		$('.mce-error-response').hide();
		if (resp.result == "success") {
			$('.mce-' + resp.result + '-response').show();
			$('.mce-' + resp.result + '-response').html('Thanks for signing up!');
			$('.mc-embedded-subscribe-form').each(function () {
				this.reset();
			}).hide();
		} else {
			var index = -1;
			var msg;
			try {
				var parts = resp.msg.split(' - ', 2);
				if (parts[1] == undefined) {
					msg = resp.msg;
				} else {
					i = parseInt(parts[0]);
					if (i.toString() == parts[0]) {
						index = parts[0];
						msg = parts[1];
					} else {
						index = -1;
						msg = resp.msg;
					}
				}
			} catch (e) {
				index = -1;
				msg = resp.msg;
			}
			try {
				if (index == -1) {
					$('.mce-' + resp.result + '-response').show();
					$('.mce-' + resp.result + '-response').html(msg);
				} else {
					err_id = 'mce_tmp_error_msg';
					html = '<div id="' + err_id + '" style="' + err_style + '"> ' + msg + '</div>';

					var input_id = '#mc_embed_signup';
					var f = $(input_id);
					if (ftypes[index] == 'address') {
						input_id = '.mce-' + fnames[index] + '-addr1';
						f = $(input_id).parent().parent().get(0);
					} else if (ftypes[index] == 'date') {
						input_id = '#mce-' + fnames[index] + '-month';
						f = $(input_id).parent().parent().get(0);
					} else {
						input_id = '#mce-' + fnames[index];
						f = $().parent(input_id).get(0);
					}
					if (f) {
						$(f).append(html);
						$(input_id).focus();
					} else {
						$('.mce-' + resp.result + '-response').show();
						$(',mce-' + resp.result + '-response').html(msg);
					}
				}
			} catch (e) {
				$('.mce-' + resp.result + '-response').show();
				$('.mce-' + resp.result + '-response').html(msg);
			}
		}
	}
}
function initShop() {
	jQuery(document).ready(function ($) {

		$('.PS').nextAll('.article-body p').each(function () {$(this).css('font-size', '15px')});

		if (jQuery('body').hasClass('page-template-page-shop')) {
			var shopNav = $('.shop-filter a');
			// init Isotope
			var $filtered = $('.filtered-products').isotope({
				layoutMode: 'fitRows',
				percentPosition: true,
				itemSelector: '.product',
			});
			$filtered.imagesLoaded().progress(function () {
				$filtered.isotope('layout');
			});
			$('.shop-filter').on('click', 'a', function (ev) {
				ev.preventDefault();
				shopNav.removeClass('active');
				$(this).addClass('active');

				var filterValue = '.' + $(this).attr('data-term-id');
				if (filterValue === '.show-all') {
					filterValue = '*';
				}

				$filtered.isotope({ filter: filterValue });
			});
		};
		$('.slide-header .button').click(function () {

			e.preventDefault()
			var clickedHref = $('.slide-header .nav-link').attr('href').substring(1, $('.slide-header .nav-link').attr('href').length);
			$('.slider-post').addClass('hidden');
			$('.slider-post').parent().find('a').addClass('prevent');
			$('.sub-cat-post-image .sub-cat-background').css("position", "absolute");
			$.each($('.sub-cat-item'), (index, value) => {
				$(value).find('.sub-cat-item-post:first-of-type .slider-post').removeClass('hidden');
				$(value).find('.sub-cat-item-post:first-of-type .slider-post').parent().find('a').removeClass('prevent');
			});
			var post_id = $(`#${clickedHref} .sub-cat-item-post:first-of-type .article`).attr('id');
			$(`.sub-cat-post-image #${post_id}.sub-cat-background`).first().css("position", "unset");
			$('.sub-cat-post-image .entry-meta').attr("id", $(`#${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("category_color"));
			$('.sub-cat-post-image .entry-meta span').text($(`#${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("post-date"));
			$('.sub-cat-post-image .entry-meta .byline').html('by <a href="' + $(`#${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("author-link") + '">' +  $(`#${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("author-name") + '</a>' );
		});
		$('.sub-cat-post-image a:first-of-type .sub-cat-background').css("position", "unset");
		$('.sub-cat-post-image .entry-meta').attr("id", `${$('.sub-cat-item:first-of-type .slider-post').attr("category_color")}`);
		$('.sub-cat-post-image .entry-meta span').text(`${$('.sub-cat-item:first-of-type .slider-post').attr("post-date")}`);
		$('.sub-cat-post-image .entry-meta .byline').html('by ' + `<a href="${$('.sub-cat-item:first-of-type .slider-post').attr("author-link")}">${$('.sub-cat-item:first-of-type .slider-post').attr("author-name")}</a>`);

		$('.sub-cat-item-post').hover(function () {
			if ($(window).width() > 1024) {
				$('.slider-post').addClass('hidden');
				$('.slider-post').parent().find('a').addClass('prevent');
				$('.sub-cat-post-image .sub-cat-background').css("position", "absolute");
				$(this).find('.slider-post').toggleClass('hidden');
				$(this).find('a').removeClass('prevent');
				var post_id = $(this).find('.article').attr('id');
				$(`.sub-cat-post-image #${post_id}.sub-cat-background`).first().css("position", "unset");
				$('.sub-cat-post-image .entry-meta').attr("id", `${$(this).find('.slider-post').attr("category_color")}`);
				$('.sub-cat-post-image .entry-meta span').text(`${$(this).find('.slider-post').attr("post-date")}`);
				$('.sub-cat-post-image .entry-meta .byline').html('by ' + `<a href="${$(this).find('.slider-post').attr("author-link")}">${$(this).find('.slider-post').attr("author-name")}</a>`);
			}

		});

		$('.sub-cat-item-post').click(function () {
			if($(window).width() <= 1024) {
				$('.slider-post').addClass('hidden');
				$('.slider-post').parent().find('a').addClass('prevent');
				$('.sub-cat-post-image .sub-cat-background').css("position", "absolute");
				$(this).find('.slider-post').toggleClass('hidden');
				$(this).find('a').removeClass('prevent');
				var post_id = $(this).find('.article').attr('id');
				$(`.sub-cat-post-image #${post_id}.sub-cat-background`).first().css("position", "unset");
				$('.sub-cat-post-image .entry-meta').attr("id", `${$(this).find('.slider-post').attr("category_color")}`);
				$('.sub-cat-post-image .entry-meta span').text(`${$(this).find('.slider-post').attr("post-date")}`);
				$('.sub-cat-post-image .entry-meta .byline').html('by ' + `<a href="${$(this).find('.slider-post').attr("author-link")}">${$(this).find('.slider-post').attr("author-name")}</a>`);
			}

		});

		$('.slide-header .nav-link').on('click', function (e) {
			e.preventDefault()
			var clickedHref = $(this).attr('href').substring(1, $(this).attr('href').length);
			$('.slider-post').addClass('hidden');
			$('.slider-post').parent().find('a').addClass('prevent');
			$('.sub-cat-post-image .sub-cat-background').css("position", "absolute");
			$.each($('.sub-cat-item'), (index, value) => {
				$(value).find('.sub-cat-item-post:first-of-type .slider-post').removeClass('hidden');
				$(value).find('.sub-cat-item-post:first-of-type .slider-post').parent().find('a').removeClass('prevent');
			});
			var post_id = $(`#${clickedHref} .sub-cat-item-post:first-of-type .article`).attr('id');
			$(`.sub-cat-post-image #${post_id}.sub-cat-background`).first().css("position", "unset");
			$('.sub-cat-post-image .entry-meta').attr("id", $(`#${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("category_color"));
			$('.sub-cat-post-image .entry-meta span').text($(`#${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("post-date"));
			$('.sub-cat-post-image .entry-meta .byline').html('by <a href="'+ $(` #${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("author-link") + '">' + $(` #${clickedHref} .sub-cat-item-post:first-of-type .slider-post`).attr("author-name") + '</a>');
		});

	});
}

function addSlickSlider(slider, buttonNext, buttonPrev) {
	slider.slick({
		nextArrow: buttonNext,
		prevArrow: buttonPrev,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
	});
}

function removeSlickSlider(slider) {
	slider.slick('unslick');
}

function checkSlickSlider(slider, buttonNext, buttonPrev) {
	if ($(window).width() <= 480 && !slider.hasClass('slick-initialized')) {
		addSlickSlider(slider, buttonNext, buttonPrev);
	} else if ($(window).width() > 480 && slider.hasClass('slick-initialized')) {
		removeSlickSlider(slider)
	}
}

function tabSlider() {
	$('.nav-pills .nav-link').removeClass('active');
	$('.nav-pills .slick-active .nav-link').addClass('active');
	var elemId = $('.nav-pills .slick-active .nav-link').attr('href');
	$('.series-module .tab-pane').removeClass('show active').addClass('fade');
	$(elemId).addClass('show active').removeClass('fade');
	$('.sub-cat-post-image .entry-meta').attr("id", elemId.toLowerCase().substr(1, elemId.indexOf("-") - 1));
	$('.slider-post').addClass('hidden');
	$('.slider-post').parent().find('a').addClass('prevent');
	$('.sub-cat-post-image .sub-cat-background').css("position", "absolute");
	$.each($('.sub-cat-item'), (index, value) => {
		$(value).find('.sub-cat-item-post:first-of-type .slider-post').removeClass('hidden');
		$(value).find('.sub-cat-item-post:first-of-type .slider-post').parent().find('a').removeClass('prevent');
		
	});
	var post_id = $(`${elemId} .sub-cat-item-post:first-of-type .article`).attr('id');
	$(`.sub-cat-post-image #${post_id}.sub-cat-background`).first().css("position", "unset");
	$('.sub-cat-post-image .entry-meta span').text($(`${elemId} .sub-cat-item-post:first-of-type .slider-post`).attr("post-date"));
	$('.sub-cat-post-image .entry-meta .byline').html('by <a href="' + $(`${elemId} .sub-cat-item-post:first-of-type .slider-post`).attr("author-link") + '">' + $(`${elemId} .sub-cat-item-post:first-of-type .slider-post`).attr("author-name") + '</a>');
}

$(document).ready(function () {

	setCookie('GAppkcookie_cup',0,1);
	// clear cookie post homepage
		/*var d = new Date();
	    var n = d.getHours();
	    if(n == 23){
	    	setCookie('GAppkcookie_cup',0,1);
	    }*/
	// clear cookie post homepage	

	if(window.location.hash) {
		var hash = window.location.hash;
		hash = hash.substring(hash.indexOf('#'));
		var target = $('[data-id =' + hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 120
			}, 1000);
		}
	}
	$('.comments-link a').on('click', function (e) {
		var hash = $(this).attr("href").substring($(this).attr("href").indexOf('#'));
		var target = $('[data-id =' + hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 120
			}, 1000);
		}
	});
	$('.article-meta a').on('click', function (e) {
		var hash = $(this).attr("href").substring($(this).attr("href").indexOf('#'));
		var target = $('[data-id =' + hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 120
			}, 1000);
		}
	});
	$('.about .sub-cat a').on('click', function (e) {
		
		var hash = $(this).attr("href").substring($(this).attr("href").indexOf('#'));
		var target = $('[data-id =' + hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 120
			}, 1000);
		}
	});
	$(window).on('resize', function() {
		$(".comments-container").css("width", `${$(".article-body").width()}`);
	});
	$(".comments-container").css("width", `${$(".article-body").width()}`);
	$("strong").closest("p").css("margin-bottom", "28px");
	$('p:contains("P.S")').addClass("PS");

	// const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div");

	// for (const heading of headings) {
	// 	heading.innerHTML = heading.innerHTML
	// 	.replace(/\?/g, '<span class="special-?">?</span>');
	// }
	var keyword = '';
	var ids =[];
	var ids_defauls = [];
	for(let i = 1; true; i++) {
		if (!$(`.article-${i}`).length) {
			break;
		}
		$(`.article-${i}`).each(function() {
			ids.push($(this).attr("id"));
			ids_defauls.push($(this).attr("id"));
		});
	}
	$(`.article-sponsored`).each(function() {
		ids.push($(this).attr("id"));	
		ids_defauls.push($(this).attr("id"));
	});
	$('.article-search').each(function () {
		ids.push($(this).attr("id"));
		ids_defauls.push($(this).attr("id"));
	});
	if (ids.length < 8) {
		ids = [];
		$(".nav-previous a").css("display", "none");
	}
	var is_cat = false;
	var is_auth = false;
	var offset_post = 9;
	var status_page = false;
	var offset_temp = '';
	var xGetValueCookie = getCookie('GAppkcookie_cup');
	function load_posts(){

		/*var url_request = window.location.pathname;

		if(url_request == '/'){
			if (xGetValueCookie == null || xGetValueCookie == ''){
			    var str = '&ids=' + ids + '&key_word=' + keyword + '&is_cat=' + is_cat + '&is_auth=' + is_auth + '&is_offset=' + offset_post + '&action=more_post_ajax';
			    setCookie('GAppkcookie_cup',offset_post,1);
			    status_page = true;
			    if(status_page){
			    	offset_post = offset_post+9;
			    }
			}
			else{
				ids = xGetValueCookie;
				offset_post = parseInt(xGetValueCookie)+9;
				
				if(status_page){
					offset_temp =offset_temp+9;
					offset_post = offset_temp;
				}else{
					offset_temp = parseInt(xGetValueCookie)+9;
				}
				var str = '&ids=' + ids + '&key_word=' + keyword + '&is_cat=' + is_cat + '&is_auth=' + is_auth + '&is_offset=' + offset_post + '&action=more_post_ajax';
				setCookie('GAppkcookie_cup',offset_post,1);
				status_page = true;
				
			}
		}else{
			var str = '&ids=' + ids + '&key_word=' + keyword + '&is_cat=' + is_cat + '&is_auth=' + is_auth  + '&is_offset=' + 0 + '&action=more_post_ajax';
		}*/

		var str = '&ids=' + ids + '&key_word=' + keyword + '&is_cat=' + is_cat + '&is_auth=' + is_auth  + '&is_offset=' + 0 + '&action=more_post_ajax';
		
		jQuery.ajax({
			type: "POST",
			dataType: "html",
			url: ajax_posts.ajaxurl,
			data: str,
			success: function(data){
				if(data.length){
					if($("body.home").length) {
						$(".post-articles").append(data);
					} else {
						$("#content").append(data);
					}
					$("#nav-below").attr("disabled",false);
					$("#loading").css("display",'none');
					$("#nav-below").css("display",'block');
					let a = data.split(" ");
					let count = 0;
					for (let i = 0; i < a.length; i++) {
						if ('article-search"'==(a[i]) || `article-${i+1}"`==(a[i]) )
							count++;
					}
					if (!$("body.home").length){
						if(count < 8) {
							
							$(".nav-previous a").css("display", "none");
						}
					}
				} else{
					$("#nav-below").css("display","none");
					$("#loading").css("display",'none');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				$loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
			}

		});
	}

	function setCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	function getCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

	$(".nav-previous a").on("click",function(e){ // When btn is pressed.
		e.preventDefault();
		keyword = $(location).attr("href");
		var first_index = keyword.indexOf('?s=') + 3;
		var last_index = keyword.indexOf('&submit') - first_index;
		keyword = keyword.substr(first_index, last_index);
		if ($(location).attr("href").indexOf('category') > 0) {
			keyword = $('#pageId').val();
			is_cat = true;
			is_auth = false;
		}
		if ($(location).attr("href").indexOf('author') > 0) {
			// keyword =$(location).attr("href").substring($(location).attr("href").indexOf('author')+7, $(location).attr("href").length - 1);
			keyword = $('#authId').val();
			is_cat = false;
			is_auth = true;
		}
		$("#nav-below").attr("disabled",true);
		$("#nav-below").css("display",'none');
		$("#loading").css("display",'block');
		
		for(let i = 1; true; i++) {
			if (!$(`.article-${i}`).length) {
				break;
			}
			$(`.article-${i}`).each(function() {
				ids.push($(this).attr("id"));
			});
		}
		$(`.article-sponsored`).each(function() {
			ids.push($(this).attr("id"));
		});
		$('.article-search').each(function () {
			ids.push($(this).attr("id"));
		});
		load_posts();
		ids =[];
	});

	if ($(window).width() <= 480) {

		$(".article-right-rail").clone().insertAfter(".article-post p:eq(1)").addClass('desktop-hidden1 category-aside-mobile');
		$( ".desktop-hidden1" ).append('<article class="post"></article><article class="post"></article>' );
		$(".article-left-rail").clone().insertAfter(".hero-image").addClass('desktop-hidden1');
	}

	var mostPopSlider = $('.most-pop-slider');
	var posts = $('.posts');
	var navPills = $('.nav-pills');
	var postGrid = $('.inner .post-grid');

	checkSlickSlider(mostPopSlider, nextArrowPop, prevArrowPop);
	checkSlickSlider(posts, nextArrowPost, prevArrowPost);
	checkSlickSlider(navPills, nextArrowPost, prevArrowPost);
	checkSlickSlider(postGrid, nextArrowPost, prevArrowPost);

	$(window).on('resize', function() {
		checkSlickSlider(mostPopSlider, nextArrowPop, prevArrowPop);
		checkSlickSlider(posts, nextArrowPost, prevArrowPost);
		checkSlickSlider(navPills, nextArrowPost, prevArrowPost);
		checkSlickSlider(postGrid, nextArrowPost, prevArrowPost);
	});

	$('.nav-pills .next-most-commented, .nav-pills .previous-most-commented').on('click', function (e) {
		tabSlider()
	});

	$('.praise-grid').slick({
		slidesToShow: 4,
		slidesToScroll: 0.1,
		arrows:false,
		infinite: true,
		pauseOnHover:true,
		speed: 500,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 0,
		responsive: [
			
			{	
				breakpoint: 768,
			  settings: {
				slidesToShow: 3,
				touchMove: false,
				slidesToScroll: 0.1,
			  }
			},

			{	
			  breakpoint: 480,
			  settings: {
				autoplay: false,
				nextArrow: `<button type="button" class="next-most-commented" style="">
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path style="fill:#000000" fill-rule="evenodd" d="M13.2097046,4.38710056 L13.2928932,4.29289322 C13.6533772,3.93240926 14.2206082,3.90467972 14.6128994,4.20970461 L14.7071068,4.29289322 L21.7071068,11.2928932 L21.7485042,11.336853 L21.7485042,11.336853 L21.8036654,11.4046934 L21.8036654,11.4046934 L21.8753288,11.5159379 L21.8753288,11.5159379 L21.9287745,11.628664 L21.9287745,11.628664 L21.9641549,11.734007 L21.9641549,11.734007 L21.9930928,11.8819045 L21.9930928,11.8819045 L22,12 L22,12 L21.9972121,12.0752385 L21.9972121,12.0752385 L21.9797599,12.2007258 L21.9797599,12.2007258 L21.9502619,12.3121425 L21.9502619,12.3121425 L21.9063266,12.4232215 L21.9063266,12.4232215 L21.8540045,12.5207088 L21.8540045,12.5207088 L21.7803112,12.625449 L21.7803112,12.625449 L21.7071068,12.7071068 L14.7071068,19.7071068 C14.3165825,20.0976311 13.6834175,20.0976311 13.2928932,19.7071068 C12.9324093,19.3466228 12.9046797,18.7793918 13.2097046,18.3871006 L13.2928932,18.2928932 L18.584,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L18.586,11 L13.2928932,5.70710678 C12.9324093,5.34662282 12.9046797,4.77939176 13.2097046,4.38710056 L13.2928932,4.29289322 L13.2097046,4.38710056 Z"></path></svg>
							</button>`,
				prevArrow: `<button type="button" class="previous-most-commented">
								<svg id="Layer" enable-background="new 0 0 64 64" width="15" height="15" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"></path></svg>
							</button>`,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
			  }
			},
			

		]
	});

//   $('.search-dropdown input').attr("placeholder", " ");

var articleHeroImage = $('.hero-image');
var articleRails = $('.article-left-rail, .article-right-rail');
articleHeroImage = articleHeroImage.length ? $('.hero-image') : $('.article-post [data-article-image]').slice(0, 1);

if (articleHeroImage.length && $(window).width() > 995) {
	setTimeout(() => {
		var heroImageHeight = articleHeroImage.height() + articleHeroImage.offset().top - 32;
		$('.article-right-rail, .article-left-rail').attr('style', 'min-height: unset !important; margin-top:' + heroImageHeight + 'px;');
		articleRails.removeClass('hidden');
	}, 1500);
} else if(articleRails.length) {
	articleRails.removeClass('hidden');
}
	$(window).on('resize', function() {
		if (articleHeroImage.length && $(window).width() > 995) {
			var heroImageHeight = articleHeroImage.height() + articleHeroImage.offset().top - 32;
			$('.article-right-rail, .article-left-rail').css('margin-top', heroImageHeight + 'px');
		}
	});

var articleSlide3 = $(".article-post .gallery-columns-3");
if (articleSlide3.length && $(window).width() < 995) {
	articleSlide3.slick({
		arrows: false,
		slidesToShow: 1.5,
		slidesToScroll: 1,
		infinite: false,
	});
}
	// var button = $('.comments-collapse input');
	// var isHidden = true;
	// button.click(function() {
	// 	$('.commentlist').css("display", isHidden ? 'none' : 'block');
	// 	isHidden = !isHidden;
	// });

	var articleFirstImage = $("[data-bleed]")[0];
	if (articleFirstImage) {
		var elmHeight = articleHeroImage.height() + articleHeroImage.offset().top - 32;
		var eleOffset = articleFirstImage.offsetTop;

		if (eleOffset - 900 < elmHeight) {
			articleFirstImage.removeAttribute("data-bleed");
		}
	}
	
	// let imgHero = '';
	// if($(".single .hero-image .hero-retio").length) {
	// 	imgHero += $(".single .hero-image .hero-retio").css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
	// }
	// if($(".single .hero-image img").length) {
	// 	imgHero += $(".single .hero-image img").attr('src');
	// }
	// $(".single .article-post p img").each(function(){
		
	// 	if($(this).attr('src').substring($(this).attr('src').indexOf('wp-content/uploads')+18) == imgHero.substring(imgHero.indexOf('wp-content/uploads')+18)){
	// 		console.log($(this).attr('src').substring($(this).attr('src').indexOf('wp-content/uploads')+18));
	// 		$(this).css('display', 'none');
	// 	}
	// });
	var articleFirstImage = $(".article-post .gallery")[0];
	if (articleFirstImage) {
		var elmHeight = articleHeroImage.height() + articleHeroImage.offset().top - 32;
		var eleOffset = articleFirstImage.offsetTop;

		if (eleOffset - 900 < elmHeight) {
			$(".article-post .gallery").first().css("margin", "60px 0 60px 0");
			$(".article-post .gallery").first().css('width', '100%');
		}
	}

	// $('h2').each(function(){
	// 	let a = $(this).html();
	// 	if($(this).html() && a.length && (a.indexOf('?') > -1) ){
	// 		for(let i = 0; i < a.length; i++) {
	// 			let b = a.substring(i, a.indexOf('?', i)) + '<span style="font-family= serf;">?</span>';
	// 			let g ='';
	// 			g += b;
	// 			i= a.indexOf('?', i)+1;
	// 		}
	// 		$('a').html(g);
	// 	}
	// });
});

initShop();


$(document).ready(function () {
	setTimeout(() => {
		let getHeightContentSingle = $('.single.single-post .entry-content.article-body.jpibfi_container').height();
		if(getHeightContentSingle <= 2000){
			$('.widget.popular').hide();
		}
		console.log('getHeightContentSingle2');
		console.log(getHeightContentSingle);
	}, 1500);
	
});