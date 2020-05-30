import Bubble from "./bubble";
import Settings from "./settings";

class BubblesManager {
	bubbles: Bubble[] = []
	settings: Settings;
	constructor(settings: Settings) {
		this.settings = settings;
	}
	createBubble() {
		const bubble: Bubble = new Bubble(this.settings);
		bubble.create()
		// this.bubbles.push(bubble)
	}
}
export default BubblesManager;
