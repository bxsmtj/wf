// DEFINE DIMENSIONS
let div = document.getElementById('wrapper');
let width = div.clientWidth;
let height = div.clientHeight;
const margin = { top: 0, right: 0, bottom: 0, left: 0 };

// const rawData = [];

// const processedData = rawData.map((d) => ({
// 	x: +d.A,
// 	y: +d.B,
// }));

// function drawChart() {

// FUNCTION TO DRAW CHART
async function drawChart() {
	// let url = window.location.href;

	let urlFull = 'https://b-x-t.webflow.io/be-score';

	function processUrl(string) {
		let split = string.split('/');
		let last = split[split.length - 1];

		const acceptableUrls = ['b-x-t.webflow.io'];

		if (last === '') {
			return split[split.length - 2];
		} else {
			return last;
		}
	}

	let url = processUrl(urlFull);

	console.log(url);
	const rawData = await d3.csv('data_contour.csv');

	const arrXY = [
		{
			id: 0,
			url: '/',
			x: 'BK',
			y: 'BW',
		},
		{
			id: 1,
			url: 'https://b-x-t.webflow.io/be-score',
			x: 'J',
			y: 'BW',
		},
		{
			id: 2,
			url: 'https://b-x-t.webflow.io/bcf-score',
			x: 'AP',
			y: 'BW',
		},
		{
			id: 3,
			url: 'https://b-x-t.webflow.io/bcs-score',
			x: 'BB',
			y: 'BW',
		},
		{
			id: 4,
			url: 'https://b-x-t.webflow.io/about',
			x: 'X',
			y: 'BW',
		},
		{
			id: 5,
			url: 'https://b-x-t.webflow.io/contact',
			x: 'AO',
			y: 'BW',
		},
		{
			id: 6,
			url: 'https://b-x-t.webflow.io/discovery-sessions',

			x: 'BR',
			y: 'BW',
		},
		{
			id: 7,
			url: 'https://b-x-t.webflow.io/bx-journal',
			x: 'BY',
			y: 'BW',
		},
		{
			id: 8,
			url: 'https://b-x-t.webflow.io/bx-alerts',
			x: 'AI',
			y: 'BW',
		},
	];

	function getXY(url) {
		let foundObj = arrXY.find((d) => d['url'].includes(url));
		console.log(foundObj);

		if (foundObj === undefined) {
			return 0;
		} else {
			return foundObj.id;
		}
	}

	let contourId = getXY(url);

	const processedData = rawData.map((d) => ({
		x: +d[arrXY[contourId].x],
		y: +d[arrXY[contourId].y],
	}));

	console.log(processedData);

	const xAccessor = (d) => d.x;
	const yAccessor = (d) => d.y;
	// DEFINE VARIABLES
	// animation elements
	const duration = 5000;

	// DRAW CHART COMPONENTS
	const svg = d3
		.select(div)
		.append('svg')
		.attr('width', width)
		.attr('height', height);

	function setContourAttr(selection) {
		selection
			.attr('fill', 'transparent')
			.attr('stroke', 'rgb(140, 166, 140)')
			.attr('stroke-opacity', 0.2);
	}

	const g = svg.append('g');
	const g0 = g.append('g').call(setContourAttr);
	const g1 = g
		.append('g')
		.call(setContourAttr)
		.attr('transform', 'translate(2,2)');
	const g2 = g
		.append('g')
		.call(setContourAttr)
		.attr('transform', 'translate(4,4)');

	// PREP DATA
	// load and process data

	// initial set up of data
	const slices = [
		{ lower: 0, upper: 200 },
		{ lower: 100, upper: 300 },
		{ lower: 200, upper: 400 },
	];
	let data = processedData.slice(slices[0].lower, slices[0].upper);
	let prevData = data.slice(); // make copy for exit transition

	// FUNCTION TO UPDATE DATA
	function updateData(sliceIndex) {
		prevData = data.slice();
		data = processedData.slice(
			slices[sliceIndex].lower,
			slices[sliceIndex].upper
		);
	}

	// DEFINE SCALES
	let x = d3
		.scaleLinear()
		.domain(d3.extent(data, xAccessor))
		.range([margin.left, width - margin.right]);

	let y = d3
		.scaleLinear()
		.domain(d3.extent(data, yAccessor))
		.range([height - margin.bottom, margin.top]);

	let animation;
	// FUNCTION TO UPDATE CHART
	function updateChart() {
		// set consistent threshold
		const thresholds = 10;

		// define contour generator function
		const contourFunc = d3
			.contourDensity()
			.thresholds(thresholds)
			.x((d) => x(xAccessor(d)))
			.y((d) => y(yAccessor(d)))
			.size([width, height])
			.bandwidth([50]);

		// mark the points as entering or exiting
		const entering = data.map((d) => {
			return {
				...d,
				type: 'entering',
			};
		});
		const exiting = prevData.map((d) => {
			return {
				...d,
				type: 'exiting',
			};
		});

		// combine the entering and exiting points
		const allData = entering.concat(exiting);

		// start a global transition
		d3.transition()
			.duration(duration)
			.tween('contours', () => {
				return (tweenValue) => {
					const inverse = 1 - tweenValue;

					// set the weight accessor to return the tween value
					// entering/(exiting) gradually increases/(decreases) effect on contour generator
					contourFunc.weight((d) => {
						return d.type === 'entering' ? tweenValue : inverse;
					});

					// generate the contour data
					const contours = contourFunc(allData);

					// create reusable function to draw contours
					function drawContours(selection) {
						selection.data(contours).join('path').attr('stroke-width', 0.25);
						selection.exit().remove();
						selection.enter().append('path').style('opacity', 1);
						selection.attr('d', d3.geoPath());
					}

					// draw the contours

					g0.selectAll('path').call(drawContours);
					g1.selectAll('path').call(drawContours);
					g2.selectAll('path').call(drawContours);
				};
			});
	}

	let interval;

	function startAnimation() {
		let sliceIndex = 0;
		updateData(sliceIndex);
		updateChart();
		sliceIndex++;
		updateData(sliceIndex);
		updateChart();

		// RUN ANIMATION

		interval = setInterval(function () {
			sliceIndex++;
			if (sliceIndex == 3) {
				sliceIndex = 0;
			}
			updateData(sliceIndex);
			updateChart();
		}, duration);
	}

	startAnimation();

	// SET ZOOM
	// define zoom settings (specific to each [x, y] combo)
	let zoomSettings = [
		{
			id: 0,
			scale: 5,
			translateWidth: -width * 2.75,
			translateHeight: -height,
		},
		{
			id: 1,
			scale: 5,
			translateWidth: -width / 1.5,
			translateHeight: -height,
		},
		{
			id: 2,
			scale: 5,
			translateWidth: -width * 3.5,
			translateHeight: -height * 1.5,
		},
		{
			id: 3,
			scale: 5,
			translateWidth: -width * 2,
			translateHeight: -height / 3,
		},
		{
			id: 4,
			scale: 5,
			translateWidth: -width * 3.5,
			translateHeight: -height * 1.75,
		},
		{
			id: 5,
			scale: 5,
			translateWidth: -width / 2.5,
			translateHeight: 1,
		},
		{
			id: 6,
			scale: 5,
			translateWidth: 1,
			translateHeight: -height / 2,
		},
		{
			id: 7,
			scale: 5,
			translateWidth: width / 10,
			translateHeight: -height * 2.25,
		},
		{
			id: 8,
			scale: 5,
			translateWidth: -width * 2.75,
			translateHeight: -height,
		},
	];

	// 	id: 1,
	// scale: 5,
	// translateWidth: -width / 2,
	// translateHeight: -height,

	// set zoom function
	let zoom = d3.zoom().on('zoom', zoomed);

	svg
		.call(zoom)
		.call(
			zoom.transform,
			d3.zoomIdentity
				.translate(
					zoomSettings[contourId].translateWidth,
					zoomSettings[contourId].translateHeight
				)
				.scale(zoomSettings[contourId].scale)
		);

	function zoomed({ transform }) {
		g.attr('transform', transform);
	}

	// immediately disable user zoom & pan ability
	svg.on('.zoom', null);

	// UPDATE DIMENSIONS WHENEVER WINDOW IS RESIZED
	window.addEventListener('resize', () => {
		clearInterval(interval);
		svg.interrupt();
		width = div.clientWidth;
		height = div.clientHeight;
		svg.attr('width', width).attr('height', height);
		startAnimation();
	});
}

// CALL MAIN FUNCTION
drawChart();
