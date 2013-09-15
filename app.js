/*Take takeoff(cb)

Land land(cb)

client.disableEmergency()



Client.takeoff(cb)

client.after(){
	this.up(1);
	this.down(0);
	this.up(0);
	this.getVideoStream();
}
.after(){
	this.stop();
	this.land();
} 
*/

var arDrone = require('ar-drone');
var client = arDrone.createClient();
	client.on('navdata', console.log);
client.takeoff(function(){console.log('we took off')});

client.up(1);
client.on('navdata.demo.batteryPercentage', console.log)
client
	.after(3000, function(){	
		this.animate('flipLeft', 15);	
	})
	.after(2000, function(){
		this.animate('flipBehind', 15);		
	})
	.after(2000, function(){
		this.animate('flipRight', 15);		
	})
	.after(2000, function(){
		this.animate('flipAhead', 15);		
			
	})
	.after(6000, function(){

		this.stop();
		this.land();
	});




