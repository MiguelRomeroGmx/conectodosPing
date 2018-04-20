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
  var puntos;
  var maxPuntos;
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
            // firebase.database().ref(hora).set(hora);
            datos.innerHTML = hora;
      
      
        }
        if (ping == 0) {
            hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            // firebase.database().ref(hora).set(hora);
            datos.innerHTML = hora; 

        }



var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["13:56:45", "13:56:46", "13:56:47", "13:56:48", "13:56:49", "13:56:50"],
        datasets: [{
            label: 'Ping Conectodos',
            // data: [1, 1, 1, 0, 1, 0],
            data: [ping],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});










    });

    


    