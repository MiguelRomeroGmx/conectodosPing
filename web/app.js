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
  var mostrarPing = document.getElementById("mostrarPing");

  var ping = firebase.database().ref().child("ping");

  ping.on("value", function (snaptshot) {
      ping = snaptshot.val();
        mostrarPing.innerHTML = ping;
        console.log(ping);
  });