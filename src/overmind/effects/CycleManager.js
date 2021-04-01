export default class CycleManager {
  constructor({ timer}) {
    this.paused = false;
    this.counter = 0;
    Object.assign(this, {timer})
  }

  _setupInterval() {
    this.interval = setInterval(() => {
      if (this.paused) {
        return;
      }

      this.counter = this.counter + 1;
      this.lastCallTimestamp = new Date();
      this.onCycle(this.counter)
    }, this.timer)
  }

  initialize(onCycle) {
    this.onCycle = onCycle;
    this._setupInterval()
  }

  pause() {
    this.paused = new Date();
    clearInterval(this.interval);
  }

  resume() {
    const pausedTimestamp = this.paused;
    const timeDelta = this.timer - (pausedTimestamp - this.lastCallTimestamp);
    const startAt = pausedTimestamp ? timeDelta : 0;
    clearInterval(this.interval);
    setTimeout(() => {
      this._setupInterval();
    }, startAt)
  }
}
