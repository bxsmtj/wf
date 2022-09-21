gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
	//
	const dataProfiles = [
		{
			id: 1,
			profile_description:
				'Manufacturing Company with $131M Debt, bankrupt in May 2022',
			company_name: 'Armstrong Flooring, Inc.',
			company_ticker: 'NYSE:AFI',
			company_debt: 131.1,
			company_description: 'A manufacturer of flooring products',
			bankruptcy_date: 'May 2022',
			be_alert_date: 'March 2019',
			be_advance_notice: 39,
			profile_conclusion:
				'The b(e) Score detected special situation risks 39 months in advance, before financial performance deteriorated and shares faced price volatility.',
		},
		{
			id: 2,
			profile_description:
				'Retail Company with $256M Debt, bankrupt in December 2020',
			company_name: 'FHC Holdings Corporation',
			company_ticker: 'NASDAQ:FRAN',
			company_debt: 255.6,
			company_description: "A women's clothing retailer",
			bankruptcy_date: 'December 2020',
			be_alert_date: null,
			be_advance_notice: 1472,
			profile_conclusion: null,
		},
		{
			id: 3,
			profile_description:
				'Oil & Gas Company with $532M Debt, bankrupt in July 2020',
			company_name: 'Hi-Crush Inc.',
			company_ticker: 'NYSE:HCR',
			company_debt: 532.3,
			company_description: 'A proppant and logistics services company',
			bankruptcy_date: 'July 2020',
			be_alert_date: null,
			be_advance_notice: 1468,
			profile_conclusion: null,
		},
		{
			id: 4,
			profile_description:
				'Transportation Company with $381M Debt, bankrupt in December 2019',
			company_name: 'Celadon Group, Inc.',
			company_ticker: 'NYSE:CGIP',
			company_debt: 380.5,
			company_description: 'A truckload shipping company',
			bankruptcy_date: 'December 2019',
			be_alert_date: null,
			be_advance_notice: 1460,
			profile_conclusion: null,
		},
		{
			id: 5,
			profile_description:
				'Retail Company with $1,357M Debt, bankrupt in October 2018',
			company_name: 'Mattress Firm Holding Corp.',
			company_ticker: 'NASDAQ:MFRM',
			company_debt: 1356.6,
			company_description: 'A specialty mattress retailer',
			bankruptcy_date: 'October 2018',
			be_alert_date: null,
			be_advance_notice: 1446,
			profile_conclusion: null,
		},
		{
			id: 6,
			profile_description:
				'Retail Company with $841.5M Debt, bankrupt in February 2015',
			company_name: 'RadioShack Corporation',
			company_ticker: 'NYSE:RSH',
			company_debt: 841.5,
			company_description: 'An electronics retailer',
			bankruptcy_date: 'February 2015',
			be_alert_date: null,
			be_advance_notice: 1401,
			profile_conclusion: null,
		},
		{
			id: 7,
			profile_description:
				'Electronics Company with $91M Debt, bankrupt in July 2008',
			company_name: 'Syntax-Brillian Corporation',
			company_ticker: 'NASDAQ:BRLC',
			company_debt: 91.4,
			company_description: 'A microdisplay company',
			bankruptcy_date: 'July 2008',
			be_alert_date: null,
			be_advance_notice: 1321,
			profile_conclusion: null,
		},
		{
			id: 8,
			profile_description:
				'Textiles Company with $33M Debt, bankrupt in August 2007',
			company_name: 'Quaker Fabric Corp.',
			company_ticker: 'NASDAQ:QFAB',
			company_debt: 33.3,
			company_description: 'A specialty fabrics company',
			bankruptcy_date: 'August 2007',
			be_alert_date: null,
			be_advance_notice: 1310,
			profile_conclusion: null,
		},
	];

	//

	let elWrapper = document.getElementById('wrapper__select-cases');
	let elSelect = document.createElement('select');
	elSelect.id = 'select-cases';
	elSelect.classList.add('wide');
	dataProfiles.forEach((d, i) => {
		let elOption = document.createElement('option');
		elOption.value = i;
		elOption.innerText = d.id + ': ' + d.profile_description;
		if (i == 0) {
			elOption.setAttribute('default', '');
		}
		elSelect.appendChild(elOption);
	});
	elWrapper.appendChild(elSelect);
	$('select').niceSelect();

	//

	let elProfileName = document.getElementById('wrapper__profile-name');
	let elProfileDebt = document.getElementById('wrapper__profile-debt');
	let elProfileDescription = document.getElementById(
		'wrapper__profile-description'
	);
	let elProfileBankruptDate = document.getElementById(
		'wrapper__profile-bankruptdate'
	);
	let elProfileAlertDate = document.getElementById(
		'wrapper__profile-alertdate'
	);
	let elProfileNotice = document.getElementById('wrapper__profile-notice');

	elProfileName.innerText = dataProfiles[0].company_name;
	elProfileDebt.innerText = '$' + dataProfiles[0].company_debt + 'M';
	elProfileDescription.innerText = dataProfiles[0].company_description;
	elProfileBankruptDate.innerText = dataProfiles[0].bankruptcy_date;
	elProfileAlertDate.innerText = dataProfiles[0].be_alert_date;
	elProfileNotice.innerText = dataProfiles[0].be_advance_notice;

	$('#select-cases').change(() => {
		let selectedIndex = elSelect.value;
		elProfileName.innerText = dataProfiles[selectedIndex].company_name;
		elProfileDebt.innerText =
			'$' + dataProfiles[selectedIndex].company_debt + 'M';
		elProfileDescription.innerText =
			dataProfiles[selectedIndex].company_description;
		elProfileBankruptDate.innerText =
			dataProfiles[selectedIndex].bankruptcy_date;
		elProfileAlertDate.innerText = dataProfiles[selectedIndex].be_alert_date;
		elProfileNotice.innerText = dataProfiles[selectedIndex].be_advance_notice;
	});
});
