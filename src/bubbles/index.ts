import { timer, interval, fromEvent } from 'rxjs';
import { 
	mapTo,
	finalize,
	mergeMap,
	takeUntil,
	takeWhile,
	repeat,
	merge,
	map,
	take,
	tap,
	exhaustMap,
	delay,
	switchMap,
	mergeAll,
	first,
} from 'rxjs/operators';
import Settings from './settings';
import Bubble from './bubble';
import BubblesManager from './BubblesManager';

const settings: Settings = new Settings();
settings.init();
settings.listenResize();

const bubbleManager: BubblesManager = new BubblesManager(settings);
bubbleManager.createBubble()

// const bubbleSize = 40;
// const canvasWidth = window.innerWidth;
// const canvasHeight = window.innerHeight
// let timePlaying = 0;
// let pointsPerKill = 10;
// let speed: number = 1000;
// let score: number = 0;

// const scoreElement: HTMLElement = document.getElementById('score');
// const canvasElement: HTMLElement = document.getElementById('canvas');
// const startElement: HTMLElement = document.getElementById('btn-start');

// const createBubble = (position:{x: number, y: number}): HTMLElement => {
// 	const e: HTMLElement = document.createElement("div");
// 	e.className = "bubble"
// 	e.style.width = `${bubbleSize}px`;
// 	e.style.height = `${bubbleSize}px`;
// 	const p = {...position};
// 	p.x = p.x - bubbleSize/2;
// 	p.y = p.y - bubbleSize/2;
// 	e.style.left = p.x.toString() + 'px';
// 	e.style.top = p.y.toString() + 'px';
// 	return e;
// }

// const random = (min:number, max:number) => {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const randomPosition = (): {x: number, y:number} => {
// 	const xmin = bubbleSize/2;
// 	const xmax = canvasWidth - bubbleSize/2;
// 	const ymin = bubbleSize/2;
// 	const ymax = canvasHeight - bubbleSize/2;
// 	const x = random(xmin, xmax);
// 	const y = random(ymin, ymax);
// 	return {x: x, y: y}
// }
// const updateStatus = (score: number) => {
// 	scoreElement.innerHTML = `Score: ${score}`
// }
// const hiddeStartButton = () => {
// 	startElement.style.display = 'none';
// 	document.getElementById("btn-start-shadow").style.display = 'none';
// }
// const game: any = interval(speed)
// .pipe(
// 	tap(_ => {
// 		const position = randomPosition();
// 		const bubble = createBubble(position)
// 		canvasElement.appendChild(bubble)
// 	})
// )
// fromEvent(startElement, 'click')
// .pipe(
// 	tap(_ => hiddeStartButton()),
// 	switchMap(() => game)
// )
// .subscribe(console.log)

// const bubble = interval(1000)
// 	.pipe(
// 		take(3),
// 	)
// 	.subscribe(console.log)
// fromEvent(document.getElementById("aaa"), 'click')
// .pipe(
// 	tap(_ => bubble),
// )
// .subscribe(console.log)


// const game = interval(speed)
// 	.pipe(
// 		// mergeMap(()=> {
// 		// 	const position = randomPosition();
// 		// 	const bubble = createBubble(position)
// 		// 	box.appendChild(bubble)
// 		// 	return fromEvent(bubble, 'click')
// 		// 		.pipe(
// 		// 			first(),
// 		// 			map((e)=>  console.log(e))
// 		// 		)
// 		// }),
// 	)
// game.subscribe(e => {
// 	score += points;
// 	updateStatus(level, score);
// });




/*
each 1000ms a bubble appear
each bubble has a backward time running from 5 to 0
when time reach to 0, the bubble moves to the bottom left corner.
I the bottom left corner there is meter
ech bubble in the meter add 10 points.
each second passend remove 1 point from metter
when the metter reach 100 points the game ends.
Game over message appear and a button "play again"
when user click the bubble it desapears and 100 points score is added
every 1000 points score the appear bubble time is reduced in 50ms



*/