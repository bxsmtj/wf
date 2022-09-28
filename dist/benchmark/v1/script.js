gsap.registerPlugin(ScrollTrigger);
let width = div.clientWidth;
idWrapper = '#wrapper__chart-benchmark';
const dataRaw = [
	{
		months: 30,
		accuracy_be: 0.625,
		accuracy_altman: 0.493,
		accuracy_auditor: 0.527,
		f1_be: 0.837,
		f1_altman: 0.503,
		f1_auditor: 0.079,
	},
	{
		months: 28,
		accuracy_be: 0.851,
		accuracy_altman: 0.507,
		accuracy_auditor: 0.527,
		f1_be: 0.843,
		f1_altman: 0.523,
		f1_auditor: 0.079,
	},
	{
		months: 26,
		accuracy_be: 0.851,
		accuracy_altman: 0.5,
		accuracy_auditor: 0.527,
		f1_be: 0.845,
		f1_altman: 0.513,
		f1_auditor: 0.079,
	},
	{
		months: 24,
		accuracy_be: 0.873,
		accuracy_altman: 0.5,
		accuracy_auditor: 0.52,
		f1_be: 0.871,
		f1_altman: 0.51,
		f1_auditor: 0.077,
	},
	{
		months: 22,
		accuracy_be: 0.887,
		accuracy_altman: 0.507,
		accuracy_auditor: 0.513,
		f1_be: 0.887,
		f1_altman: 0.526,
		f1_auditor: 0.052,
	},
	{
		months: 20,
		accuracy_be: 0.847,
		accuracy_altman: 0.52,
		accuracy_auditor: 0.513,
		f1_be: 0.839,
		f1_altman: 0.538,
		f1_auditor: 0.052,
	},
	{
		months: 18,
		accuracy_be: 0.887,
		accuracy_altman: 0.547,
		accuracy_auditor: 0.507,
		f1_be: 0.886,
		f1_altman: 0.564,
		f1_auditor: 0.051,
	},
	{
		months: 16,
		accuracy_be: 0.9,
		accuracy_altman: 0.553,
		accuracy_auditor: 0.513,
		f1_be: 0.899,
		f1_altman: 0.568,
		f1_auditor: 0.076,
	},
	{
		months: 14,
		accuracy_be: 0.907,
		accuracy_altman: 0.56,
		accuracy_auditor: 0.527,
		f1_be: 0.908,
		f1_altman: 0.577,
		f1_auditor: 0.123,
	},
	{
		months: 12,
		accuracy_be: 0.913,
		accuracy_altman: 0.553,
		accuracy_auditor: 0.527,
		f1_be: 0.915,
		f1_altman: 0.584,
		f1_auditor: 0.123,
	},
];

const data24 = dataRaw[3];
const data12 = dataRaw[9];

let svgMargin = { top: 32, right: 8, bottom: 40, left: 40 };
let svgWidth;
let svgHeight;

function drawChartBenchmark(type) {
	// type = ['accuracy', 'f1']

	const data = dataRaw.map((d) => ({
		months: +d.months,
		be: +d[type + '_be'],
		altman: +d[type + '_altman'],
		auditor: +d[type + '_auditor'],
	}));

	let yAxisTitle;
	switch (type) {
		case 'accuracy':
			yAxisTitle = 'Accuracy rate';
			break;
		case 'f1':
			yAxisTitle = 'F1-Score';
			break;
		default:
			console.log('drawChartBenchmark() Error: No type specified.');
	}

	let svg = d3
		.select(idWrapper)
		.append('svg')
		.attr('width', svgWidth + svgMargin.left + svgMargin.right)
		.attr('height', svgHeight + svgMargin.top + svgMargin.bottom)
		.append('g')
		.attr(
			'transform',
			'translate(' + svgMargin.left + ',' + svgMargin.top + ')'
		);

	let xScale = d3.scaleLinear().domain([30, 12]).range([0, svgWidth]);

	let xAxis = d3
		.axisBottom(xScale)
		.tickSize(-svgHeight)
		.tickPadding([8])
		.tickSizeOuter(0);

	svg
		.append('g')
		.attr('transform', 'translate(0,' + svgHeight + ')')
		.call(xAxis);

	let yScale = d3.scaleLinear().domain([0, 1]).nice().range([svgHeight, 0]);

	let yAxis = d3
		.axisLeft(yScale)
		.tickSize(-svgWidth)
		.tickPadding([8])
		.tickFormat(d3.format('.0%'));

	svg.append('g').call(yAxis);

	function lineGenerator(yKey) {
		return d3
			.line()
			.x(function (d) {
				return xScale(d.months);
			})
			.y(function (d) {
				return yScale(d[yKey]);
			});
	}

	let lineBe = lineGenerator('be');
	let lineAltman = lineGenerator('altman');
	let lineAuditor = lineGenerator('auditor');

	let defs = svg.append('defs');

	defs
		.append('mask')
		.attr('id', 'maskDashed')
		.append('path')
		.attr('d', lineAltman(data))
		.attr('fill', 'none')
		.attr('stroke', 'white')
		.attr('stroke-width', 2)
		.attr('stroke-dasharray', '8 4');

	defs
		.append('mask')
		.attr('id', 'maskDotted')
		.append('path')
		.attr('d', lineAuditor(data))
		.attr('fill', 'none')
		.attr('stroke', 'white')
		.attr('stroke-width', 2)
		.attr('stroke-dasharray', '2 2');

	let pathBe = svg
		.append('path')
		.attr('d', lineBe(data))
		.attr('fill', 'none')
		.attr('stroke', '#B3B3B3')
		.attr('stroke-width', 2);

	let pathAltman = svg
		.append('path')
		.attr('d', lineAltman(data))
		.attr('fill', 'none')
		.attr('stroke', '#B3B3B3')
		.attr('stroke-width', 2)
		.attr('mask', 'url(#maskDashed)');

	let pathAuditor = svg
		.append('path')
		.attr('d', lineAuditor(data))
		.attr('fill', 'none')
		.attr('stroke', '#B3B3B3')
		.attr('stroke-width', 2)
		.attr('mask', 'url(#maskDotted)');

	let totalLengthBe = pathBe.node().getTotalLength();
	let totalLengthAltman = pathAltman.node().getTotalLength();
	let totalLengthAuditor = pathAuditor.node().getTotalLength();

	svg
		.append('text')
		.attr('text-anchor', 'start')
		.attr('x', -svgMargin.left)
		.attr('y', -svgMargin.top / 1.5)
		.attr('class', 'axisLabel')
		.text(yAxisTitle);

	svg
		.append('text')
		.attr('text-anchor', 'end')
		.attr('x', svgWidth + svgMargin.right)
		.attr('y', svgHeight + svgMargin.bottom - 3)
		.attr('class', 'axisLabel')
		.text('Number of months before Target Date');

	svg.selectAll('.tick').selectAll('text').attr('class', 'axisLabel');
	svg.selectAll('.tick').selectAll('line').attr('class', 'axisDomain');
	svg
		.selectAll('.axisLabelSecondary')
		.selectAll('text')
		.attr('class', 'axisLabelSecondary');
	svg.selectAll('.domain').remove();

	//

	ScrollTrigger.create({
		trigger: idWrapper,
		onEnter: function () {
			pathBe
				.attr('stroke-dasharray', totalLengthBe + ' ' + totalLengthBe)
				.attr('stroke-dashoffset', totalLengthBe)
				.transition()
				.duration(1000)
				.ease(d3.easeCubicInOut)
				.attr('stroke-dashoffset', 0);

			pathAltman
				.attr('stroke-dasharray', totalLengthAltman + ' ' + totalLengthAltman)
				.attr('stroke-dashoffset', totalLengthAltman)
				.transition()
				.delay(250)
				.duration(1000)
				.ease(d3.easeCubicInOut)
				.attr('stroke-dashoffset', 0);

			pathAuditor
				.attr('stroke-dasharray', totalLengthAuditor + ' ' + totalLengthAuditor)
				.attr('stroke-dashoffset', totalLengthAuditor)
				.transition()
				.delay(500)
				.duration(1000)
				.ease(d3.easeCubicInOut)
				.attr('stroke-dashoffset', 0);
		},
	});
}

function clearChartBenchmark() {
	d3.select(idWrapper).selectAll('svg').remove();
}

function formatPercent(num) {
	// return parseInt(num * 100);
	return d3.format('.0%')(num);
}

function setBenchmarkStats(statistic, type) {
	let el12 = document.getElementById('wrapper__' + type + '-12');
	let el24 = document.getElementById('wrapper__' + type + '-24');

	el12.innerText = formatPercent(data12[statistic + '_' + type]);
	el24.innerText = formatPercent(data24[statistic + '_' + type]);
}

$(document).ready(function () {
	width = div.clientWidth;
	setBenchmarkStats('accuracy', 'be', 'wrapper__be-12', 'wrapper__be-24');
	setBenchmarkStats(
		'accuracy',
		'altman',
		'wrapper__altman-12',
		'wrapper__altman-24'
	);
	setBenchmarkStats(
		'accuracy',
		'auditor',
		'wrapper__auditor-12',
		'wrapper__auditor-24'
	);

	$('#radio__statistic input:radio').on('change', function () {
		let selectedStatistic = $(this).val();
		clearChartBenchmark();
		drawChartBenchmark(selectedStatistic);
		setBenchmarkStats(
			selectedStatistic,
			'be',
			'wrapper__be-12',
			'wrapper__be-24'
		);
		setBenchmarkStats(
			selectedStatistic,
			'altman',
			'wrapper__altman-12',
			'wrapper__altman-24'
		);
		setBenchmarkStats(
			selectedStatistic,
			'auditor',
			'wrapper__auditor-12',
			'wrapper__auditor-24'
		);
	});
});

$(window).on('load', function () {
	svgWidth = $(idWrapper).width() - svgMargin.left - svgMargin.right;
	if (width >= 991) {
		svgHeight = $(idWrapper).height() - svgMargin.top - svgMargin.bottom;
	} else {
		svgHeight = $(idWrapper).width() / 2 - svgMargin.top - svgMargin.bottom;
	}

	drawChartBenchmark('accuracy');

	window.addEventListener('resize', () => {
		svgWidth = $(idWrapper).width() - svgMargin.left - svgMargin.right;
		svgHeight = $(idWrapper).width() / 2 - svgMargin.top - svgMargin.bottom;

		clearChartBenchmark();
		drawChartBenchmark($('#toggle__statistic input:radio').val());
	});
});
