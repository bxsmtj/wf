let windowWidth = window.outerWidth;
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

setTimeout(function () {
	$('.split').each(function () {
		let myText = $(this);
		let mySplitText;
		function createSplits() {
			mySplitText = new SplitText(myText, {
				type: 'chars,words,lines',
				charsClass: 'split-chars',
				wordsClass: 'split-words',
				linesClass: 'split-lines',
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
}, 20);

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
			y: '0%',
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
				$(this.targets()[this.targets().length - 1]).addClass('cursor__blink');
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
			y: '0%',
			duration: 0.02,
			opacity: 0.2,
			ease: 'power1.none',
			stagger: {
				each: 0.025,
				from: '0',
			},
		});
	});
}

$(document).ready(function () {
	setTimeout(function () {
		initializeTypedAnimationsH();
		initializeTypedAnimationsP();
	}, 50);

	const resizeElements = document.querySelectorAll('.section');
	const resizeObserver = new ResizeObserver((entries) => {
		entries.forEach(() => {
			ScrollTrigger.refresh(true);
		});
	});

	resizeElements.forEach((elt) => {
		resizeObserver.observe(elt);
	});
});
