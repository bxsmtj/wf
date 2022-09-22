gsap.registerPlugin(ScrollTrigger);
const dataRaw = [
	{
		id: 1,
		description: '1: Bankruptcy in 2022 with $131M Debt',
		company_name: 'Armstrong Flooring, Inc.',
		company_ticker: 'NYSE:AFI',
		company_debt: 131.1,
		company_description: 'A manufacturer of flooring products',
		bankruptcy_date: 'May 2022',
		be_alert_date: 'March 2019',
		be_notice: 38,
		debt_alert_date: 'January 2020',
		debt_notice: 28,
		market_alert_date: 'May 2020',
		market_notice: 24,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Armstrong Flooring's Chapter 11 Bankruptcy in May 2022, the b(e) Score detected a risk 38 months in advance. Since this alert, the company's financial performance deteriorated and share prices became volatile.",
		data: [
			{
				id: 1.0,
				date: '2018-05-24',
				score_prob: 0.27,
				debt_ebitda: 1.43,
				price_volatility: 31.52,
				short_interest: 1.53,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-06-24',
				score_prob: 0.28,
				debt_ebitda: 1.43,
				price_volatility: 33.66,
				short_interest: 1.87,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-07-24',
				score_prob: 0.28,
				debt_ebitda: 1.36,
				price_volatility: 34.15,
				short_interest: 1.51,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-08-24',
				score_prob: 0.27,
				debt_ebitda: 1.36,
				price_volatility: 41.08,
				short_interest: 1.87,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-09-24',
				score_prob: 0.28,
				debt_ebitda: 1.36,
				price_volatility: 42.06,
				short_interest: 2.14,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-10-24',
				score_prob: 0.28,
				debt_ebitda: 1.39,
				price_volatility: 42.48,
				short_interest: 3.07,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-11-24',
				score_prob: 0.32,
				debt_ebitda: 1.39,
				price_volatility: 42.26,
				short_interest: 3.69,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2018-12-24',
				score_prob: 0.32,
				debt_ebitda: 1.39,
				price_volatility: 43.85,
				short_interest: 3.12,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-01-24',
				score_prob: 0.35,
				debt_ebitda: 2.13,
				price_volatility: 46.27,
				short_interest: 2.97,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-02-24',
				score_prob: 0.35,
				debt_ebitda: 2.13,
				price_volatility: 46.46,
				short_interest: 2.86,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-03-24',
				score_prob: 0.45,
				debt_ebitda: 2.13,
				price_volatility: 46.99,
				short_interest: 3.0,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-04-24',
				score_prob: 0.4,
				debt_ebitda: 2.36,
				price_volatility: 47.18,
				short_interest: 3.17,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-05-24',
				score_prob: 0.32,
				debt_ebitda: 2.36,
				price_volatility: 49.63,
				short_interest: 2.02,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-06-24',
				score_prob: 0.31,
				debt_ebitda: 2.36,
				price_volatility: 50.41,
				short_interest: 2.15,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-07-24',
				score_prob: 0.38,
				debt_ebitda: 2.18,
				price_volatility: 51.42,
				short_interest: 2.68,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-08-24',
				score_prob: 0.38,
				debt_ebitda: 2.18,
				price_volatility: 43.85,
				short_interest: 2.92,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-09-24',
				score_prob: 0.38,
				debt_ebitda: 2.18,
				price_volatility: 43.46,
				short_interest: 2.39,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-10-24',
				score_prob: 0.38,
				debt_ebitda: 7.93,
				price_volatility: 43.04,
				short_interest: 2.13,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-11-24',
				score_prob: 0.45,
				debt_ebitda: 7.93,
				price_volatility: 58.47,
				short_interest: 2.1,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2019-12-24',
				score_prob: 0.45,
				debt_ebitda: 7.93,
				price_volatility: 59.32,
				short_interest: 2.17,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-01-24',
				score_prob: 0.45,
				debt_ebitda: 48.7,
				price_volatility: 57.9,
				short_interest: 2.39,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-02-24',
				score_prob: 0.45,
				debt_ebitda: 48.7,
				price_volatility: 57.97,
				short_interest: 3.58,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-03-24',
				score_prob: 0.48,
				debt_ebitda: 48.7,
				price_volatility: 78.18,
				short_interest: 4.82,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-04-24',
				score_prob: 0.47,
				debt_ebitda: 56.0,
				price_volatility: 85.57,
				short_interest: 3.21,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-05-24',
				score_prob: 0.48,
				debt_ebitda: 56.0,
				price_volatility: 99.88,
				short_interest: 2.87,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-06-24',
				score_prob: 0.47,
				debt_ebitda: 56.0,
				price_volatility: 103.23,
				short_interest: 3.5,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-07-24',
				score_prob: 0.61,
				debt_ebitda: null,
				price_volatility: 104.96,
				short_interest: 2.35,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-08-24',
				score_prob: 0.6,
				debt_ebitda: null,
				price_volatility: 106.52,
				short_interest: 1.16,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-09-24',
				score_prob: 0.6,
				debt_ebitda: null,
				price_volatility: 107.9,
				short_interest: 0.82,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-10-24',
				score_prob: 0.62,
				debt_ebitda: 10.66,
				price_volatility: 115.96,
				short_interest: 1.21,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-11-24',
				score_prob: 0.58,
				debt_ebitda: 10.66,
				price_volatility: 111.01,
				short_interest: 3.41,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2020-12-24',
				score_prob: 0.58,
				debt_ebitda: 10.66,
				price_volatility: 112.13,
				short_interest: 2.0,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-01-24',
				score_prob: 0.55,
				debt_ebitda: null,
				price_volatility: 113.02,
				short_interest: 2.17,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-02-24',
				score_prob: 0.56,
				debt_ebitda: null,
				price_volatility: 118.43,
				short_interest: 2.3,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-03-24',
				score_prob: 0.55,
				debt_ebitda: null,
				price_volatility: 115.31,
				short_interest: 1.73,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-04-24',
				score_prob: 0.57,
				debt_ebitda: null,
				price_volatility: 105.55,
				short_interest: 1.79,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-05-24',
				score_prob: 0.66,
				debt_ebitda: null,
				price_volatility: 98.04,
				short_interest: 2.42,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-06-24',
				score_prob: 0.71,
				debt_ebitda: null,
				price_volatility: 91.98,
				short_interest: 2.2,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-07-24',
				score_prob: 0.7,
				debt_ebitda: null,
				price_volatility: 94.96,
				short_interest: 2.04,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-08-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 93.03,
				short_interest: 2.33,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-09-24',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 92.01,
				short_interest: 1.48,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-10-24',
				score_prob: 0.69,
				debt_ebitda: null,
				price_volatility: 86.77,
				short_interest: 1.66,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-11-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 78.58,
				short_interest: 1.26,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2021-12-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 78.04,
				short_interest: 0.93,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2022-01-24',
				score_prob: 0.67,
				debt_ebitda: null,
				price_volatility: 78.16,
				short_interest: 0.65,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2022-02-24',
				score_prob: 0.67,
				debt_ebitda: null,
				price_volatility: 75.03,
				short_interest: 0.86,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2022-03-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 61.34,
				short_interest: 0.45,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2022-04-24',
				score_prob: 0.68,
				debt_ebitda: null,
				price_volatility: 65.16,
				short_interest: 0.25,
				going_concern: 0.0,
			},
			{
				id: 1.0,
				date: '2022-05-07',
				score_prob: 0.81,
				debt_ebitda: null,
				price_volatility: 179.8,
				short_interest: 0.21,
				going_concern: 0.0,
			},
		],
	},
	{
		id: 2,
		description: '2: Bankruptcy in 2020 with $256M Debt',
		company_name: 'FHC Holdings Corporation',
		company_ticker: 'NASDAQ:FRAN',
		company_debt: 255.6,
		company_description: "A women's fashion retailer",
		bankruptcy_date: 'December 2020',
		be_alert_date: 'February 2019',
		be_notice: 22,
		debt_alert_date: 'June 2019',
		debt_notice: 18,
		market_alert_date: 'October 2019',
		market_notice: 14,
		auditor_alert_date: 'February 2020',
		auditor_notice: 10.0,
		conclusion:
			"Prior to FHC Holdings' Chapter 11 Bankruptcy in December 2020, the b(e) Score detected a risk 22 months in advance. Since this alert, the company's leverage profile worsened, market sentiment declined, and their auditor issued a going concern doubt.",
	},
	{
		id: 3,
		description: '3: Bankruptcy in 2020 with $532M Debt',
		company_name: 'Hi-Crush Inc.',
		company_ticker: 'NYSE:HCR',
		company_debt: 532.3,
		company_description: 'A proppant and logistics service provider',
		bankruptcy_date: 'July 2020',
		be_alert_date: 'August 2018',
		be_notice: 23,
		debt_alert_date: 'January 2020',
		debt_notice: 6,
		market_alert_date: 'March 2020',
		market_notice: 4,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Hi-Crush's Chapter 11 Bankruptcy in July 2020, the b(e) Score detected a risk 23 months in advance. Around this time, the company's financial performance was improving. Since this alert, financial performance deteriorated again, and share prices became volatile.",
	},
	{
		id: 4,
		description: '4: Bankruptcy in 2019 with $380M Debt',
		company_name: 'Celadon Group, Inc.',
		company_ticker: 'NYSE:CGIP',
		company_debt: 380.5,
		company_description: 'A truckload shipping service provider',
		bankruptcy_date: 'December 2019',
		be_alert_date: 'February 2017',
		be_notice: 34,
		debt_alert_date: null,
		debt_notice: null,
		market_alert_date: 'May 2017',
		market_notice: 31,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Celadon Group's Chapter 11 Bankruptcy in December 2019, the b(e) Score detected a risk 34 months in advance. Since this alert, the company faced higher market volatility, due in part to fraud allegations.",
	},
	{
		id: 5,
		description: '5: Bankruptcy in 2018 with $1,357M Debt',
		company_name: 'Mattress Firm Holding Corp.',
		company_ticker: 'NASDAQ:MFRM',
		company_debt: 1356.6,
		company_description: 'A mattress retailer',
		bankruptcy_date: 'October 2018',
		be_alert_date: 'March 2016',
		be_notice: 31,
		debt_alert_date: 'May 2016',
		debt_notice: 29.0,
		market_alert_date: 'August 2016',
		market_notice: 26,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Matress Firm Holding's Chapter 11 Bankruptcy in October 2018, the b(e) Score detected a risk 31 months in advance. Since this alert, the company faced higher market volatility, due in part to fraud allegations, and was delisted.",
	},
	{
		id: 6,
		description: '6: Bankruptcy in 2015 with $842M Debt',
		company_name: 'RadioShack Corporation',
		company_ticker: 'NYSE:RSH',
		company_debt: 841.5,
		company_description: 'A consumer electronics retailer',
		bankruptcy_date: 'February 2015',
		be_alert_date: 'October 2011',
		be_notice: 40,
		debt_alert_date: 'April 2013',
		debt_notice: 22.0,
		market_alert_date: 'May 2012',
		market_notice: 34,
		auditor_alert_date: 'January 2014',
		auditor_notice: 13.0,
		conclusion:
			"Prior to RadioShack's Chapter 11 Bankruptcy in February 2015, the b(e) Score detected a risk 40 months in advance. Since this alert, the company began to restructure, but unsuccessful efforts resulted in a second alert 22 months later, followed by going concern doubts and higher market volatility.",
	},
	{
		id: 7,
		description: '7: Bankruptcy in 2008 with $91M Debt',
		company_name: 'Syntax-Brillian Corporation',
		company_ticker: 'NASDAQ:BRLC',
		company_debt: 91.4,
		company_description: 'A manufacturer of display technologies',
		bankruptcy_date: 'July 2008',
		be_alert_date: 'January 2007',
		be_notice: 18,
		debt_alert_date: null,
		debt_notice: null,
		market_alert_date: 'March 2008',
		market_notice: 4,
		auditor_alert_date: null,
		auditor_notice: null,
		conclusion:
			"Prior to Syntax-Brillian's Chapter 11 Bankruptcy in July 2008, the b(e) Score detected a risk 18 months in advance. Around this time, the company's financial performance was improving. Since this alert, the company faced higher market volatility.",
	},
	{
		id: 8,
		description: '8: Bankruptcy in 2007 with $33M Debt',
		company_name: 'Quaker Fabric Corp.',
		company_ticker: 'NASDAQ:QFAB',
		company_debt: 33.3,
		company_description: 'A supplier of specialty fabrics',
		bankruptcy_date: 'August 2007',
		be_alert_date: 'May 2005',
		be_notice: 27,
		debt_alert_date: 'July 2005',
		debt_notice: 25.0,
		market_alert_date: 'July 2007',
		market_notice: 1,
		auditor_alert_date: 'January 2006',
		auditor_notice: 19.0,
		conclusion:
			"Prior to Quaker Fabric's Chapter 11 Bankruptcy in August 2007, the b(e) Score detected a risk 27 months in advance. Since this alert, the company faced significant leverage issues, going concern doubts, and sudden market volatility.",
	},
];

$(document).ready(function () {
	//

	let elWrapper = document.getElementById('wrapper__select-cases');
	let elSelect = document.createElement('select');
	elSelect.id = 'select-cases';
	elSelect.classList.add('wide');
	elSelect.classList.add('mono');
	elSelect.classList.add('small');
	dataRaw.forEach((d, i) => {
		let elOption = document.createElement('option');
		elOption.value = i;
		elOption.innerText = d.description;
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

	elProfileName.innerText =
		dataRaw[0].company_name + ' (' + dataRaw[0].company_ticker + ')';
	elProfileDebt.innerText = '$' + dataRaw[0].company_debt + 'M';
	elProfileDescription.innerText = dataRaw[0].company_description;
	elProfileBankruptDate.innerText = dataRaw[0].bankruptcy_date;
	elProfileAlertDate.innerText = dataRaw[0].be_alert_date;
	elProfileNotice.innerText = dataRaw[0].be_notice + ' months';

	let selectedIndex = elSelect.value;
	$('#select-cases').change(() => {
		selectedIndex = elSelect.value;
		elProfileName.innerText =
			dataRaw[selectedIndex].company_name +
			' (' +
			dataRaw[selectedIndex].company_ticker +
			')';
		elProfileDebt.innerText = '$' + dataRaw[selectedIndex].company_debt + 'M';
		elProfileDescription.innerText = dataRaw[selectedIndex].company_description;
		elProfileBankruptDate.innerText = dataRaw[selectedIndex].bankruptcy_date;
		elProfileAlertDate.innerText = dataRaw[selectedIndex].be_alert_date;
		elProfileNotice.innerText = dataRaw[selectedIndex].be_notice + ' months';
	});

	//

	const margin = { top: 24, right: 0, bottom: 16, left: 32 };
	let width = $('#wrapper__chart-be').width() - margin.left - margin.right;
	let height = $('#wrapper__chart-be').width() / 2 - margin.top - margin.bottom;

	let dataCompany = dataRaw[selectedIndex].data;

	function drawChartBe() {
		const data = dataCompany.map((d) => ({
			date: d3.timeParse('%Y-%m-%d')(d.date),
			value: d.score_prob,
		}));

		console.log(data);

		let svg = d3
			.select('#wrapper__chart-be')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		let x = d3
			.scaleTime()
			.domain(
				d3.extent(data, function (d) {
					return d.date;
				})
			)
			.range([0, width]);
		svg
			.append('g')
			.attr('transform', 'translate(0,' + height + ')')
			.call(
				d3.axisBottom(x).ticks(d3.timeYear, 1).tickFormat(d3.timeFormat('%Y'))
			);

		let y = d3.scaleLinear().domain([0, 1]).nice().range([height, 0]);
		svg.append('g').call(d3.axisLeft(y));

		svg.selectAll('.tick').selectAll('text').attr('class', 'axisLabel');
		svg.selectAll('.tick').selectAll('line').attr('class', 'axisDomain');
		svg.selectAll('.domain').attr('class', 'domain axisDomain');

		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', '#B3B3B3')
			.attr('stroke-width', 1)
			.attr(
				'd',
				d3
					.line()
					.x(function (d) {
						return x(d.date);
					})
					.y(function (d) {
						return y(d.value);
					})
					.defined(function (d) {
						return d.value !== null;
					})
			);

		// svg.append('text').
	}

	function drawChartDebt() {
		const data = dataCompany.map((d) => ({
			date: d3.timeParse('%Y-%m-%d')(d.date),
			// value: d.score_prob,
			value: +d.debt_ebitda,
		}));

		console.log(data);

		let svg = d3
			.select('#wrapper__chart-debt')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		let x = d3
			.scaleTime()
			.domain(
				d3.extent(data, function (d) {
					return d.date;
				})
			)
			.range([0, width]);
		svg
			.append('g')
			.attr('transform', 'translate(0,' + height + ')')
			.call(
				d3
					.axisBottom(x)
					.ticks(d3.timeYear, 1)
					.tickSize(-height)
					.tickPadding([8])
					.tickSizeOuter(0)
					.tickFormat(d3.timeFormat('%Y'))
			);

		let y = d3
			.scaleLinear()
			.domain([
				0,
				d3.max(data, function (d) {
					return +d.value;
				}),
			])
			.nice()
			.range([height, 0]);
		svg.append('g').call(
			d3
				.axisLeft(y)
				.ticks(
					d3.max(data, function (d) {
						return +d.value;
					}) / 10
				)
				.tickSize(-width)
				.tickPadding([8])
		);

		let line = d3
			.line()
			.x(function (d) {
				return x(d.date);
			})
			.y(function (d) {
				return y(d.value);
			})
			.defined(function (d) {
				return d.value !== null;
			});

		let path = svg
			.append('path')
			.attr('d', line(data))
			.attr('fill', 'none')
			.attr('stroke', '#B3B3B3')
			.attr('stroke-width', 1);

		let totalLength = path.node().getTotalLength();

		path
			.attr('stroke-dasharray', totalLength + ' ' + totalLength)
			.attr('stroke-dashoffset', totalLength)
			.transition()
			.duration(1000)
			.ease(d3.easeLinear)
			.attr('stroke-dashoffset', 0);

		svg.selectAll('.tick').selectAll('text').attr('class', 'axisLabel');
		svg.selectAll('.tick').selectAll('line').attr('class', 'axisDomain');
		svg.selectAll('.domain').remove();

		// svg
		// 	.append('text')
		// 	.attr('text-anchor', 'end')
		// 	.attr('x', width)
		// 	.attr('y', height + margin.top + 12)
		// 	.attr('class', 'axisLabel')
		// 	.text('X axis title');

		svg
			.append('text')
			.attr('text-anchor', 'start')
			// .attr('transform', 'rotate(-90)')
			.attr('x', -margin.left)
			.attr('y', -margin.top / 2)
			.attr('class', 'axisLabel')
			.text('Total Debt/EBITDA');
	}

	function drawChart() {}

	drawChartBe();
	drawChartDebt();

	drawChart();
});
