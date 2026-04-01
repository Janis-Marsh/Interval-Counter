let count = 0;
let intervalId = null;

function start() {
    if (intervalId !== null) {
        console.log('counter is already running');
        return
    }

    console.log('start counter');
    intervalId = setInterval( function() {
        count++;
        document.getElementById('count').textContent = count;
    },1000);

    console.log('IntervalId', intervalId);
}

function stop() {
    if ( intervalId === null) {
        console.log('no active interval id');
        return;
    }

    clearInterval(intervalId);
    console.log('Counter stopped')
    intervalId = null;
}

function reset() {
    stop();
    count = 0;
    document.getElementById('count').textContent = count;
    console.log('Counter Reset');
}