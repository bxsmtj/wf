gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
	let elWrapper = document.getElementById('wrapper__select--cases');
	let elSelect = document.createElement('select');
	// elSelect.classList.add('wide');
	const dataOptions = [
		'Manufacturing Company with $131M Debt, bankrupt in 2022',
		'Retail Company with $256M Debt, bankrupt in 2020',
		'Oil & Gas Company with $532M Debt, bankrupt in 2020',
		'Transportation Company with $381M Debt, bankrupt in 2019',
		'Retail Company with $1,357M Debt, bankrupt in 2018',
		'Retail Company with $841.5M Debt, bankrupt in 2015',
		'Electronics Company with $91M Debt, bankrupt in 2008',
		'Textiles Company with $33M Debt, bankrupt in 2007',
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
