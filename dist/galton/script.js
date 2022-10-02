// let windowWidth = window.innerWidth;
// window.addEventListener('resize', function () {
// 	width = window.innerWidth;
// });

function drawGalton(elementId) {
	let Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		World = Matter.World,
		Bodies = Matter.Bodies;
	Bounds = Matter.Bounds;

	// create engine
	let engine = Engine.create({
			enableSleeping: true,
		}),
		world = engine.world;

	// create renderer
	let render = Render.create({
		element: document.getElementById(elementId),
		engine: engine,
		options: {
			width: 520,
			height: 347,
			wireframes: false,
			background: '#1C1E1C',
			hasBounds: true,
			showSleeping: false,
		},
	});

	Render.run(render);

	// create runner
	let runner = Runner.create();
	Runner.run(runner, engine);

	const size = 5;

	// add bodies
	let total = 1400;
	setInterval(() => {
		if (total-- > 0) {
			const circle = Bodies.rectangle(
				250 + (-0.5 + Math.random()),
				-20,
				size,
				size,
				{
					friction: 0.00001,
					restitution: 0.5,
					density: 0.001,
					frictionAir: 0.042,
					sleepThreshold: 25,
					render: {
						fillStyle: '#E0EBE0',
						visible: true,
					},
				}
			);

			Matter.Events.on(circle, 'sleepStart', () => {
				Matter.Body.setStatic(circle, true);
			});
			World.add(world, circle);
		}
	}, 10);

	const pegs = [];
	const spacingY = 35;
	const spacingX = 40;
	let i, j, lastI;
	for (i = 0; i < 13; i++) {
		for (j = 1; j < i; j++) {
			pegs.push(
				Bodies.circle(
					250 + (j * spacingX - i * (spacingX / 2)),
					i * spacingY,
					size,
					{
						isStatic: true,
						render: {
							fillStyle: '#ffffff',
							visible: false,
						},
					}
				)
			);
		}
		lastI = i;
	}
	for (i = 0; i < 15; i++) {
		World.add(
			world,
			Bodies.rectangle(
				110 - spacingX + (j * spacingX - i * spacingX),
				lastI * spacingY + 215,
				size / 2,
				lastI + 300,
				{
					isStatic: true,
					render: {
						fillStyle: '#ffffff',
						visible: false,
					},
					chamfer: {
						radius: [size * 0.4, size * 0.4, 0, 0],
					},
				}
			)
		);
	}
	World.add(
		world,
		Bodies.rectangle(250, lastI * 1.33 * spacingY + 257, 1000, 50, {
			isStatic: true,
			render: {
				fillStyle: '#ffffff',
				visible: false,
			},
		})
	);

	World.add(world, pegs);

	if (elementId == 'wrapper__galton-1') {
		Bounds.translate(render.bounds, { x: 0, y: 800 - 347 - 173.5});
	} else if (elementId == 'wrapper__galton-2') {
		Bounds.translate(render.bounds, { x: 0, y: 800 - 347 });
	}

	return {
		engine: engine,
		runner: runner,
		render: render,
		canvas: render.canvas,
		stop: function () {
			Matter.Render.stop(render);
			Matter.Runner.stop(runner);
		},
	};
}

drawGalton('wrapper__galton-1');
drawGalton('wrapper__galton-2');
