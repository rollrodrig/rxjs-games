import { timer, interval, fromEvent, Observable } from 'rxjs';

class Game {
	timeInterval: any;
	init() {
		this.timeInterval = interval(1000)
		.subscribe(console.log)
	}
	start() {

	}
	pause() {

	}
	gameOver() {

	}
}
export default Game;
