import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

class Settings {
	bubbleSize = 40;
	bubbleCountDownTop = 3;
	canvasWidth = window.innerWidth;
	canvasHeight = window.innerHeight;
	timePlaying = 0;
	pointsPerKill = 100;
	speed: number = 1000;
	speedChange: number = 50;
	score: number = 0;
	metterLimit = 1000;
	scoreElement: HTMLElement;
	canvasElement: HTMLElement;
	startElement: HTMLElement;
	init() {
		this.scoreElement  = document.getElementById('score');
		this.canvasElement  = document.getElementById('canvas');
		this.startElement  = document.getElementById('btn-start');
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight
	}
	listenResize() {
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
		fromEvent(window, 'resize')
		.pipe(
			throttleTime(300)
		)
		.subscribe(_ => {
			this.canvasWidth = window.innerWidth;
			this.canvasHeight = window.innerHeight;
		})
	}

}
export default Settings;