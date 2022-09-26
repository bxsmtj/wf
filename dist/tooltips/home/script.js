tippy('#tooltip-ss', {
	theme: 'bx',
	arrow: false,
	trigger: 'click mouseenter focus',
	content:
		'<div class="flex flex-col"><div class="tooltip__section--heading">DEFINITION_1.1 / Special Situations</div><div class="border-tooltip"></div></div><div class="tooltip__section">Scenarios in which businesses undertake material action in efforts to improve their finances or operations. Examples include: M&As, spin-offs, restructurings, and bankruptcies.</div></div>',
	maxWidth: 488,
	allowHTML: true,
});

tippy('#tooltip-ml', {
	theme: 'bx',
	arrow: false,
	trigger: 'click mouseenter focus',
	content:
		'<div class="flex flex-col"><div class="tooltip__section--heading">DEFINITION_1.2 / Machine Learning</div><div class="border-tooltip"></div></div><div class="tooltip__section">A field of artificial intelligence involving algorithms that implicitly learn from complex, non-linear patterns in high-dimensional data in order to analyze a given scenario.</div></div>',
	maxWidth: 488,
	allowHTML: true,
});

$('.tooltip').each(function () {
	let tooltipElement = $(this);

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: tooltipElement,
			start: 'top bottom',
			end: 'bottom top',
		},
	});
	tl.to(tooltipElement, {
		delay: 0.5,
		duration: 0.25,
		backgroundSize: '+=100% +=100%',
	});
});
