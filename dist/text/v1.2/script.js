let windowWidth = window.outerWidth;
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
	$('.split').each(function () {
		let myText = $(this);
		let mySplitText;
		function createSplits() {
			mySplitText = new SplitText(myText, {
				type: 'chars',
				charsClass: 'split-chars',
			});
		}
		createSplits();
		$(window).resize(function () {
			if (window.outerWidth !== windowWidth) {
				mySplitText.revert();
				location.reload();
			}
			windowWidth = window.outerWidth;
		});
	});

	function initializeTypedAnimationsH() {
		$('.typed--h').each(function () {
			let triggerElement = $(this);
			let targetElement = $(this).find('.split-chars');

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: triggerElement,
				},
			});
			tl.from(targetElement, {
				duration: 0.02,
				opacity: 0,
				ease: 'power1.none',
				stagger: {
					each: 0.05,
					from: '0',
					onStart: function () {
						$(this.targets()[0]).addClass('cursor__static');
					},
					onComplete: function () {
						$(this.targets()[0]).removeClass('cursor__static');
					},
				},
				onComplete: function () {
					$(this.targets()[this.targets().length - 1]).addClass(
						'cursor__blink'
					);
				},
			});
		});
	}

	function initializeTypedAnimationsP() {
		$('.typed--p').each(function () {
			let triggerElement = $(this);
			let targetElement = $(this).find('.split-chars');

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: triggerElement,
				},
			});
			tl.from(targetElement, {
				delay: 0.5,
				duration: 0.02,
				opacity: 0.1,
				ease: 'power1.none',
				stagger: {
					each: 0.05,
					from: '0',
				},
			});
		});
	}

	initializeTypedAnimationsH();
	initializeTypedAnimationsP();

	const resizeElements = document.querySelectorAll('.section');
	const resizeObserver = new ResizeObserver((entries) => {
		entries.forEach(() => {
			ScrollTrigger.refresh(true);
			console.log('section resized');
		});
	});

	resizeElements.forEach((elt) => {
		resizeObserver.observe(elt);
	});
});
