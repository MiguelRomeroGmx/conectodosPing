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
  var desconexion = document.getElementById("ultDesconexion");
  var desconexion2 = document.getElementById("ultDesconexion2");
  var reconexion = document.getElementById("reconexion");
  var reconexion2 = document.getElementById("reconexion2");
  var totalDesconexion = document.getElementById("totalDesconexion");
  var totalDesconexion2 = document.getElementById("totalDesconexion2");

  var puntos;
  var puntos2;
  var control;
  var control2;
  var numDesconexion;
  var numReconexion;
  var numDesconexion2;
  var numReconexion2;
  var controlUltDesconexion;
  var controlUltDesconexion2;
  var dia;

  var mostrarPing = document.getElementById("mostrarPing");
  var datos = document.getElementById("datos");
  var mostrarPing2 = document.getElementById("mostrarPing2");
  var datos2 = document.getElementById("datos2");


  var ping = firebase.database().ref().child("torre_1/dato");
  var ping2 = firebase.database().ref().child("torre_2/dato");

  var fecha = new Date();
  var mes = fecha.getMonth() + 1;
  if (mes < 10) {
      mes = "0" + mes;
  }
  var dias = fecha.getDate();
  if (dias < 10) {
      dias = "0" + dias;
  }
  dia = dias + "-" + mes + "-" + fecha.getFullYear();

  numDesconexion = firebase.database().ref().child("torre_1/desconexion/" + dia + "/contador");
  numReconexion = firebase.database().ref().child("torre_1/reconexion/" + dia + "/contador");
  numDesconexion2 = firebase.database().ref().child("torre_2/desconexion/" + dia + "/contador");
  numReconexion2 = firebase.database().ref().child("torre_2/reconexion/" + dia + "/contador");


  numDesconexion.on("value", function (snaptshot) {
      numDesconexion = snaptshot.val();
      totalDesconexion.innerHTML = numDesconexion;
      ultDesconexion = firebase.database().ref().child("torre_1/desconexion/" + dia + "/" + numDesconexion);
      
      ultDesconexion.on("value", function (snaptshot) {
        ultDesconexion = snaptshot.val();
        desconexion.innerHTML = ultDesconexion;
    });
  });

  numReconexion.on("value", function (snaptshot) {
      numReconexion = snaptshot.val();
      ultReconexion = firebase.database().ref().child("torre_1/reconexion/" + dia + "/" + numReconexion);

      ultReconexion.on("value", function (snaptshot) {
          ultReconexion = snaptshot.val();
          reconexion.innerHTML = ultReconexion;
      });
  });

  numDesconexion2.on("value", function (snaptshot) {
      numDesconexion2 = snaptshot.val();
      totalDesconexion2.innerHTML = numDesconexion2;
      ultDesconexion2 = firebase.database().ref().child("torre_2/desconexion/" + dia + "/" + numDesconexion2);

      ultDesconexion2.on("value", function (snaptshot) {
          ultDesconexion2 = snaptshot.val();
          desconexion2.innerHTML = ultDesconexion2;
      });

  });

  numReconexion2.on("value", function (snaptshot) {
      numReconexion2 = snaptshot.val();
      ultReconexion2 = firebase.database().ref().child("torre_2/reconexion/" + dia + "/" + numReconexion2);

      ultReconexion2.on("value", function (snaptshot) {
          ultReconexion2 = snaptshot.val();
          reconexion2.innerHTML = ultReconexion2;
      });
  });


puntos = 0;
puntos2 = 0;
 

  ping.on("value", function (snaptshot) {
        control = 1;
        var fecha = new Date();
        var horas = fecha.getHours();
        if (horas < 10) {
            horas = "0" + horas;
        }
        var minutos = fecha.getMinutes();
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        var segundos = fecha.getSeconds();
        if (segundos <10) {
            segundos = "0" + segundos;
        }
        hora = horas + ":" + minutos + ":" + segundos;
        if (controlUltDesconexion == 1){
                reconexion.innerHTML = hora;
                var ctrlReconexion = firebase.database().ref().child("torre_1/reconexion/" + dia + "/contador");
                ctrlReconexion.on("value", function (snaptshot) {
                    ctrlReconexion = snaptshot.val();
                });
                ctrlReconexion++;
                firebase.database().ref("torre_1/reconexion/" + dia + "/contador").set(ctrlReconexion);
                var mes = fecha.getMonth() + 1;
                if (mes < 10) {
                    mes = "0" + mes;
                }
                var dias = fecha.getDate();
                // var dias = 15;
                if (dias <10) {
                    dias = "0" + dias;
                }
                dia = dias + "-" + mes + "-" + fecha.getFullYear();
                console.log(dia);
                firebase.database().ref("torre_1/reconexion/" + dia + "/" + ctrlReconexion).set(hora);
            }
        controlUltDesconexion = 0;
        ping = snaptshot.val();
        var antena = "En Linea";
        firebase.database().ref("torre_1/antena").set(antena);
        mostrarPing.innerHTML = "En Línea";
        if (ping == 1) {
            addData(myChart, hora, 1);
        }
        if (ping == 0) {
            addData(myChart, hora, 1);
        }
    });

    ping2.on("value", function (snaptshot) {
        control2 = 1;
        var fecha = new Date();
        var horas = fecha.getHours();
        if (horas < 10) {
            horas = "0" + horas;
        }
        var minutos = fecha.getMinutes();
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        var segundos = fecha.getSeconds();
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        hora = horas + ":" + minutos + ":" + segundos;
        if (controlUltDesconexion2 == 1){
                reconexion2.innerHTML = hora;
                var ctrlReconexion2 = firebase.database().ref().child("torre_2/reconexion/" + dia + "/contador");
                ctrlReconexion2.on("value", function (snaptshot) {
                    ctrlReconexion2 = snaptshot.val();
                });
                ctrlReconexion2++;
                firebase.database().ref("torre_2/reconexion/" + dia + "/contador").set(ctrlReconexion2);
                var mes = fecha.getMonth() + 1;
                if (mes < 10) {
                    mes = "0" + mes;
                }
                var dias = fecha.getDate();
                if (dias < 10) {
                    dias = "0" + dias;
                }
                dia = dias + "-" + mes + "-" + fecha.getFullYear();
                console.log(dia);
                firebase.database().ref("torre_2/reconexion/" + dia + "/" + ctrlReconexion2).set(hora);
            }
        controlUltDesconexion2 = 0;
        ping2 = snaptshot.val();
        var antena = "En Linea";
        firebase.database().ref("torre_2/antena").set(antena);
        mostrarPing2.innerHTML = "En Línea";
        if (ping2 == 1) {
            addData2(myChart2, hora, 1);
        }
        if (ping2 == 0) {
            addData2(myChart2, hora, 1);
        }
    });

    
    function actualizaGrafico() {
            if (control > 5) { 
                if (controlUltDesconexion == 0) {
                    desconexion.innerHTML = hora;
                    controlUltDesconexion = 1;
                    var fecha = new Date();
                    var mes = fecha.getMonth() + 1;
                    if (mes < 10) {
                        mes = "0" + mes;
                    }
                    var dias = fecha.getDate();
                    // var dias = 15;
                    if (dias < 10) {
                        dias = "0" + dias;
                    }
                    dia = dias + "-" + mes + "-" + fecha.getFullYear();
                    var ctrlDesconexion = firebase.database().ref().child("torre_1/desconexion/" + dia + "/contador");
                    ctrlDesconexion.on("value", function (snaptshot) {
                        ctrlDesconexion = snaptshot.val();
                    });
                    ctrlDesconexion++;
                    firebase.database().ref("torre_1/desconexion/" + dia + "/contador").set(ctrlDesconexion);
                    firebase.database().ref("torre_1/desconexion/" + dia + "/" + ctrlDesconexion).set(hora);
                }
                firebase.database().ref("torre_1/antena").set("Sin Conexion");
                mostrarPing.innerHTML = "Sin Conexión";
                var fecha = new Date();
                var horas = fecha.getHours();
                if (horas < 10) {
                    horas = "0" + horas;
                }
                var minutos = fecha.getMinutes();
                if (minutos < 10) {
                    minutos = "0" + minutos;
                }
                var segundos = fecha.getSeconds();
                if (segundos < 10) {
                    segundos = "0" + segundos;
                }
                hora = horas + ":" + minutos + ":" + segundos;
                addData(myChart, hora, 0);
                datos.innerHTML = hora;
            }
            if (control2 > 5) {
                if (controlUltDesconexion2 == 0) {
                    desconexion2.innerHTML = hora;
                    controlUltDesconexion2 = 1;
                    var fecha = new Date();
                    var mes = fecha.getMonth() + 1;
                    if (mes < 10) {
                        mes = "0" + mes;
                    }
                    var dias = fecha.getDate();
                    // var dias = 31;
                    if (dias < 10) {
                        dias = "0" + dias;
                    }
                    dia = dias + "-" + mes + "-" + fecha.getFullYear();
                    var ctrlDesconexion2 = firebase.database().ref().child("torre_1/desconexion/" + dia + "/contador");
                    ctrlDesconexion2.on("value", function (snaptshot) {
                        ctrlDesconexion2 = snaptshot.val();
                    });
                    ctrlDesconexion2++;
                    firebase.database().ref("torre_2/desconexion/" + dia + "/contador").set(ctrlDesconexion2);
                    firebase.database().ref("torre_2/desconexion/" + dia + "/" + ctrlDesconexion2).set(hora);
                }
                firebase.database().ref("torre_2/antena").set("Sin Conexion");
                mostrarPing2.innerHTML = "Sin Conexión";
                var fecha = new Date();
                var horas = fecha.getHours();
                if (horas < 10) {
                    horas = "0" + horas;
                }
                var minutos = fecha.getMinutes();
                if (minutos < 10) {
                    minutos = "0" + minutos;
                }
                var segundos = fecha.getSeconds();
                if (segundos < 10) {
                    segundos = "0" + segundos;
                }
                hora = horas + ":" + minutos + ":" + segundos;
                addData2(myChart2, hora, 0);
                datos2.innerHTML = hora;
            }
            datos.innerHTML = hora;
            datos2.innerHTML = hora;
            control++;
            control2++;
            console.log("control= " + control);
            
    }

    // graficos

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
            text: 'Torre 1 - Fibra Óptica Paraíso'
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


var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Ping Conectodos',
             data: [],
            //data: [],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
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
            text: 'Torre 2 - Fibra Óptica Comalcalco'
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
    // console.log(puntos);
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


function addData2(chart, label, data) {
    puntos2++;
    // console.log(puntos2);
    chart.data.labels.push(label);
    if (puntos2 > 50) {
        chart.data.labels.splice(0, 1);
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        if (puntos2 > 50) {
            dataset.data.splice(0, 1);
        }
    });
    if (puntos2 > 50) {
        puntos2--;
    }
    chart.update();
}




