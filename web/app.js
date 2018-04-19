var config = {
    apiKey: "AIzaSyCtObdc66qWY73dCoxeDwZV9UHHB8zQB3I",
    authDomain: "conectodosping.firebaseapp.com",
    databaseURL: "https://conectodosping.firebaseio.com",
    projectId: "conectodosping",
    storageBucket: "",
    messagingSenderId: "829429621487"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var hora;
  var mostrarPing = document.getElementById("mostrarPing");
  var datos = document.getElementById("datos");

  var ping = firebase.database().ref().child("ping");




  ping.on("value", function (snaptshot) {
      ping = snaptshot.val();
        mostrarPing.innerHTML = ping;
        console.log(ping);
        var fecha = new Date();
        if (ping == 1) {
            hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            datos.innerHTML = hora;
      
      
        }
        if (ping == 0) {
            hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            datos.innerHTML = hora; 
      
      
        }

    });


