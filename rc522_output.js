var rc522 = require('./build/Release/rc522');
var timeout = null;

rc522(function(rfidTagSerialNumber) {
	if(timeout) {
		clearTimeout(timeout);
	}

	timeout = setTimeout(() => {
		console.log('false');
	}, 2000);

	console.log(rfidTagSerialNumber);
});
