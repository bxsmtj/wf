gsap.registerPlugin(ScrollTrigger);
idWrapper = '#wrapper__chart-benchmark';
// const dataRaw = []

let svgMargin = { top: 32, right: 8, bottom: 40, left: 40 };
let svgWidth;
let svgHeight;

async function drawChartBenchmark(type) {
	// type = ['accuracy', 'f1']
	const dataRaw = await d3.csv('data_benchmark.csv');

	const data = dataRaw.map((d) => ({
		months: +d.months,
		be: +d[type + '_be'],
		altman: +d[type + '_altman'],
		auditor: +d[type + '_auditor'],
	}));

	console.log(data);

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

	let line = d3
		.line()
		.x(function (d) {
			return xScale(d.months);
		})
		.y(function (d) {
			return yScale(d.be);
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
			path
				.attr('stroke-dasharray', totalLength + ' ' + totalLength)
				.attr('stroke-dashoffset', totalLength)
				.transition()
				.duration(1000)
				.ease(d3.easeLinear)
				.attr('stroke-dashoffset', 0);
		},
	});
}

$(window).on('load', function () {
	svgWidth = $(idWrapper).width() - svgMargin.left - svgMargin.right;
	svgHeight = $(idWrapper).width() / 2 - svgMargin.top - svgMargin.bottom;

	drawChartBenchmark('accuracy');

	window.addEventListener('resize', () => {
		svgWidth = $(idWrapper).width() - svgMargin.left - svgMargin.right;
		svgHeight = $(idWrapper).width() / 2 - svgMargin.top - svgMargin.bottom;

		// clearChart();

		drawChartBenchmark('accuracy');
	});
});
