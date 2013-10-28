var express = require('express')
	, path = require('path')
	, app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server)
    , arDrone = require('ar-drone')
	, client = arDrone.createClient();

server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendfile( __dirname + '/public/views/index.html');

});

io.sockets.on('connection', function (socket) {
  socket.on('message', function (msg) {
  	
  	flightControls(msg);
   });
  socket.on('disconnect', function () { });
});





// Nodecopter stuff:


function flightControls(msg) { 
	console.log(msg)
	console.log('flight control called')
	switch (msg) {
	  case 'forward':
	    	client.front(.2);
	    break;
	  case 'back':
	    	client.back(.2);
	    break;
	  case 'left':
	    	client.left(.2);
	    break;

	  case 'right':
	    	client.right(.2);
	    break;
	  case 'takeoff':
	    	client.takeoff(function(){
	    		
	    		console.log('we have liftoff')
	    	});
	    	
	    break;
	  case 'land':
	    	client.land(function(){
	    		
	    		console.log('we have landed')})
	    break;
	   case 'rotate':
	    	client.land(function(){
	    		
	    		console.log('we have landed')})
	    break;
	    case 'altitude':
	    	client.land(function(){
	    		
	    		console.log('changing altitude')})
	    break;
	  case 'hover':
	  		client.stop();
	  	break;
	  case 'recover':
	 	 console.log('trying to rescue');
	  		client.disableEmergency()
	  	break;
	  default:
	     console.log('things went really bad')
	     break;
	}
}


// https://github.com/felixge/node-ar-drone
//https://github.com/remy/nodemon
// https://github.com/visionmedia/express/wiki/Migrating-from-2.x-to-3.x