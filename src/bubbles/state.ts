import Settings from './settings';
class State {
	settings: Settings;
	constructor(settings: Settings) {
		this.settings = settings;
	}
	addGameSpeed() {
		this.settings.speed -= this.settings.speedChange;
	}
	addScore(){
		this.settings.score += this.settings.pointsPerKill;
	}
}
export default State;
