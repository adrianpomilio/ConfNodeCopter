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

  }());;



  function evtHandlers(id, obj){
    return $('#'+id).on( obj.evt, function( evt ){
        socket.send(obj.action);

      });
  };

  
