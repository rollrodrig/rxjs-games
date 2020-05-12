import Settings from "./settings";
import { fromEvent, interval, timer, merge, of } from "rxjs";
import { take, tap, finalize, takeWhile, switchMap } from "rxjs/operators";
import { gsap } from "gsap";
import Utils from "./utils";

class Bubble {
	private x: number;
	private y: number;
	private element: HTMLElement;
	private settings: Settings
	private size: number;
	constructor(settings: Settings) {
		this.settings = settings;
		this.size = this.settings.bubbleSize;
	}
	create() {
		this.position();
		this.element = document.createElement("div");
		this.element.className = "bubble"
		this.element.style.width = `${this.size}px`;
		this.element.style.height = `${this.size}px`;
		this.element.style.left = this.x.toString() + 'px';
		this.element.style.top = this.y.toString() + 'px';
		this.settings.canvasElement.appendChild(this.element)
		this.initCountDown()
	}
	private updateCountDown(time: number) {
		let t = this.settings.bubbleCountDownTop - time;
		this.element.innerHTML = t.toString()
	}
	private initCountDown() {
		let clicked = false;
		merge(
			interval(1000)
			.pipe(
				takeWhile(time => (time < 4 && clicked === false)),
				tap(time => {
					this.updateCountDown(time)
				}),
				finalize(() => {
					const t = clicked ? 50 : 300;
					timer(t)
					.subscribe(_ => {
						clicked ? this.bubbleWasClicked() : this.countDownFinished()
					})
				})
			),
			fromEvent(this.element, 'click')
			.pipe(
				take(1),
				tap(_ => {
					clicked = true;
				})
			)
		)
		.subscribe(_ => {
			// console.log(_);
		})
	}
	private remove() {
		console.log('remove bubble')
	}
	private countDownFinished() {
		gsap.to(this.element, {
			rotation: 27,
			left: 10,
			top: this.settings.canvasHeight,
			duration: 0.5
		})
	}
	private bubbleWasClicked() {
		gsap.to(this.element, {
			alpha: 0,
			duration: 0.3
		})
	}
	private position() {
		const xmin = this.size/2;
		const xmax = this.settings.canvasWidth - this.size/2;
		const ymin = this.size/2;
		const ymax = this.settings.canvasHeight - this.size/2;
		this.x = Utils.random(xmin, xmax);
		this.x = this.x - this.size/2;
		this.y = Utils.random(ymin, ymax);
		this.y = this.y - this.size/2;
	}
}
export default Bubble;
