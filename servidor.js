var http = require("http");
var fs = require("fs");

   http.createServer (function (request,response){
//    response.writeHead(200, { 'content-Type': 'text/plain'});
   //response.end('ola mastertech\n');
   fs.readFile("hello-world.html", function (err, data){
       if (err){
           response.writeHead(404);
           response.end(JSON.stringify(err));
           return;
       }
       response.writeHead(200);
       response.end(data);
       
   });
   
}).listen(8080);
console.log('meu servidor esta rodando na porta 8080 :D');
 