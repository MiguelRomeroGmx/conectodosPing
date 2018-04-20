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
  var control;
  var maxPuntos;
  var mostrarPing = document.getElementById("mostrarPing");
  var datos = document.getElementById("datos");
  var monitor;
  var ping = firebase.database().ref().child("ping");

// actualizaGrafico();
puntos = 0;
maxPuntos = 10;
monitor = 0;
  


  ping.on("value", function (snaptshot) {
        control = 1;
        console.log("firebase");
        ping = snaptshot.val();
        mostrarPing.innerHTML = "En Línea";
        console.log(ping);
        var fecha = new Date();
        if (ping == 1) {
            hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            addData(myChart, hora, 1);
        }
        if (ping == 0) {
            hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            addData(myChart, hora, 1);
        }
        console.log("control",control);
        
    });

  
    
    function actualizaGrafico() {
            console.log("Actualizar");
            if (control > 2 ) {
                mostrarPing.innerHTML = "Sin Conexión";
              var fecha = new Date();
              hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
              addData(myChart, hora, 0);
              datos.innerHTML = hora;
            }
            datos.innerHTML = hora;
            control++;
            console.log("control", control);
        }


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Ping Conectodos',
            // data: [1, 1, 1, 0, 1, 0],
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
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
        title: {
            display: true,
            text: 'Antena 1 - Fibra Óptica Paraíso'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



function addData(chart, label, data) {
    puntos++;
    console.log(puntos);
    chart.data.labels.push(label);
    if (puntos > 50) {
        chart.data.labels.splice(0, 1);
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        if (puntos > 50) {
            dataset.data.splice(0, 1);
        }
    });
    if (puntos > 50) {
        puntos--;
    }
    chart.update();
}





