var http = require('http');
var manejador = function(solicitud,respuesta){
    var i = 0;
    while(true){
        console.log('bucle infinito '+i)
        i++
    } 
};

var servidor = http.createServer(manejador);

servidor.listen(3000);