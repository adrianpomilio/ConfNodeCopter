  var flight = {};

  var ctrlMap = {
      forwardBtn : {evt:'click', action:'forward', value:false},
      rightBtn : {evt:'click', action:'right', value:false},
      leftBtn : {evt:'click', action:'left', value:false},
      backBtn : {evt:'click', action:'back', value:false},
      takeoffBtn : {evt:'click', action:'takeoff', value:false},
      hoverBtn : {evt:'click', action:'hover', value:false},
      landBtn : {evt:'click', action:'land', value:false},
      recoverBtn : {evt:'click', action:'recover', value:false}
  };

  flight.setup = (function( map ) {

  for(key in ctrlMap){
      obj = ctrlMap[key];
      id = key;
      evtHandlers(id, obj);
    }

  }());



  function evtHandlers(id, obj){
    return $('#'+id).on( obj.evt, function( evt ){
        socket.send(obj.action);

      });
  };

  // Chaos
//  function keySense(e) {
//     var key = e.keyCode || e.charCode || 0;
//
//      switch(key){
//          case 83: //S
//              console.log("Stop");
//              socket.send("hover");
//              break;
//
//          case 68: //D
//              console.log("Down");
//              socket.send("land");
//              break;
//          case 32: //Space
//              console.log("take off");
//
//              socket.send("takeoff");
//
//              break;
//
//          case 38: //forward
//              console.log("forward");
//              socket.send("forward");
//              break;
//
//          case 40: //back
//              console.log("back");
//              socket.send("back");
//              break;
//
//          case 39: //right
//              console.log("right");
//              socket.send("right");
//              break;
//
//          case 37: //left
//              console.log("left");
//              socket.send("left");
//              break;
//      }
//  };
//  document.onkeydown = keySense;

  
