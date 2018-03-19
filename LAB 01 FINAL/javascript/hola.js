var http = require('http')

var manejador = function(solicitud,respuesta){
   
  console.log('Hola mundo!')
    respuesta.write('hola mundo')
    respuesta.end()
    
};

var  servidor = http.createServer(manejador)
servidor.listen(3000)
