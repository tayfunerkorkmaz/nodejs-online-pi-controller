var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out');
var LED1 = new Gpio(17, 'out');
var LED2 = new Gpio(27, 'out');
var Sound = require('node-aplay');
var socket = require('socket.io-client')('server-adress');

socket.on('connect', function () {
    console.log('Connected to Server');
	socket.on
});

socket.on('disconnect', function () {
	
});

process.chdir(__dirname);

var music = new Sound(__dirname + '/music.wav');

socket.on('motor', (data) => {

    var value = data.message ? 1 : 0;
    console.log(data, value);
    if (value != LED.readSync() && data.motor == 1) {
        LED.writeSync(value);
    }
    if (value != LED1.readSync() && data.motor == 2) {
        LED1.writeSync(value);
    }
    if (value != LED2.readSync() && data.motor == 3) {
        LED2.writeSync(value);
    }

});

socket.on('music', (data) => {
	console.log(data);
    if (data.message == "play" && i == 0) {
        music.play();
    }
    if (data.message == "play" && i == 1) {
        music.resume();
    }
    if (data.message == "pause") {
        music.pause();
        i = 1;
    }
    if (data.message == "stop") {
        music.stop();
    }
});

var i = 0;
process.on('SIGINT', function () {
    LED.writeSync(0);
    LED.unexport();
    LED1.writeSync(0);
    LED1.unexport();
    LED2.writeSync(0);
    LED2.unexport();

    process.exit();
});

