// Excercise
// Methods in prototype objects as a optimization tecnique

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; },
        set: function (value) { duration = value; }
    });

    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime; }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime; }
    });
    Object.defineProperty(this, 'running', {
        get: function () { return running; }
    });


}

// Prototype members
Stopwatch.prototype.start = function () {

    if (this.running)
        throw new Error('StopWatch has already started.');

    this.running = true;

    this.startTime = new Date();
}

Stopwatch.prototype.stop = function () {

    if (!this.running)
        throw new Error('Stopwatch is not started');

    this.running = false;

    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
}

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    duration = 0;
}