gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
	let elWrapper = document.getElementById('wrapper__select--cases');
	let elSelect = document.createElement('select');
	elSelect.classList.add('wide');
	const dataOptions = [
		'Manufacturing Company with $131M Debt, bankrupt in May 2022',
		'Retail Company with $256M Debt, bankrupt in December 2020',
		'Oil & Gas Company with $532M Debt, bankrupt in July 2020',
	];
	dataOptions.forEach((d, i) => {
		let elOption = document.createElement('option');

		elOption.value = i;
		elOption.innerText = d;
		elSelect.appendChild(elOption);
	});
	elWrapper.appendChild(elSelect);

	$('select').niceSelect();
});
