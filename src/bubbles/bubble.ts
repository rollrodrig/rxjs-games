import Settings from "./settings";

class Bubble {
	x: number;
	y: number;
	element: HTMLElement;
	settings: Settings
	size: number;
	constructor(settings: Settings) {
		this.settings = settings;
		this.size = this.settings.bubbleSize;
	}
	create() {
		this.element = document.createElement("div");
		this.element.className = "bubble"
		this.element.style.width = `${this.size}px`;
		this.element.style.height = `${this.size}px`;
		this.element.style.left = this.x.toString() + 'px';
		this.element.style.top = this.y.toString() + 'px';
		this.settings.canvasElement.appendChild(this.element)
	}
	position() {
		const xmin = this.size/2;
		const xmax = this.settings.canvasWidth - this.size/2;
		const ymin = this.size/2;
		const ymax = this.settings.canvasHeight - this.size/2;
		this.x = this.random(xmin, xmax);
		this.x = this.x - this.size/2;
		this.y = this.random(ymin, ymax);
		this.y = this.y - this.size/2;
	}
	random(min:number, max:number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
