(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});


	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

	$('.slider').slick({
        dots: false,
        speed: 300,
		arrow: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
	    centerPadding: 0,
	    autoplay: true,
  		autoplaySpeed: 2000,
		responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		      	infinite: false,
		      	prevArrow: '',
		      	nextArrow: '',
		        slidesToShow: 1,
			  	slidesToScroll: 1,
			  	centerMode: true,
	          	centerPadding: 0
		      }
		    }
	    ]
	});
	$('.slider').slickLightbox({
		src: 'src',
		itemSelector: '.item img'
	});


     $('.t-datepicker').tDatePicker({
       // options here
     });

})(jQuery);


// Guests
const guests = document.getElementById('guests');
const input = guests.getElementsByTagName('input')[0];
input.addEventListener('keydown', e => {
	if (!(e.code.includes('Digit') || e.code.includes('Backspace'))) e.preventDefault();
})

guests.addEventListener('click', e => {
	const isButton = event.target.nodeName.toLowerCase() === 'button' || event.target.nodeName.toLowerCase() === 'i';
	  if (!isButton) {
	    return;
	  }

	  if (event.target.name === 'plus' || event.target.className.includes('plus')) {
		  ++input.value;
	  } else {
		  if (input.value < 1) return;
		  --input.value;
	  }
})
/*.END */


/*Scroll To*/
// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
// http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation
function scrollToY(o,n){function a(){t+=1/60;var n=t/c,l=i(n);1>n?(requestAnimFrame(a),window.scrollTo(0,r+(o-r)*l)):window.scrollTo(0,o)}var r=window.scrollY,o=o||0,n=n||2e3,t=0,c=Math.max(.1,Math.min(Math.abs(r-o)/n,.8)),i=function(o){return-.5*(Math.cos(Math.PI*o)-1)};a()}
// active smooth scroll pour les a[href^="#anchor-"]
!function() {
  var el;
  var _scrollToY = function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    var el = event.target || event.originalTarget || event.srcElement;
    var name = (el.getAttribute("href") || el.href).slice(1);

    el = document.getElementsByName(name);
    if (el.length>0) {
      scrollToY(el[0].offsetTop - 100, 1500);   
      return false;
    }
  }
  for (var a=document.querySelectorAll('a[href^="#menu-"]'), i=0; i<a.length; i++) {
    el=a[i].parentNode;
    if (el.addEventListener){
      el.addEventListener('click', _scrollToY, false);
    } else if (el.attachEvent) {
      el.attachEvent('onclick', _scrollToY);
    }
  }
}();


/* Scrollable menu active item */
let stickyMenu = document.getElementById("sticky");
let btns = stickyMenu.getElementsByTagName("li");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += " active";
  });
}


// Map
let map;

function initializeMap() { 
    map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 36.4987779,
        lng: -4.9601763
      },
      zoom: 13
    });
}
  