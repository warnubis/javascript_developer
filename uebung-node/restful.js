/*console.log('Hello, i am a server!');
var x = require('./test-module');
var sum = x.testFunc(1,2);
console.log('Die Summe: ', sum);*/

/* Standart http-Modul
var http = require( 'http' );
http.createServer( function(req, res) {
  res.write( 'hallo Welt' );
  res.end();
}).listen(54321);
*/

var express = require( 'express' );
var app = express();
var fs = require( 'fs' );
var bp = require( 'body-parser' );

var server = app.listen( 54321, function() {
    console.log( 'Server läuft ja immer noch' );
});

app.use( bp.urlencoded({extended:true} ) ); // POST Daten geparst
app.use( express.static( 'inc' ) );

app.get('/', function( req, res) {
  fs.readFile('index.html', function(err, data) {
    if (!err) {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data);
    }
  })

});

app.get('/getsomething', function( req, res) {
  fs.readFile('clicks.json', function(err, data) {
    console.log(JSON.parse(data));
    res.end(JSON.stringify(JSON.parse(data)));
  } );
});


app.post('/getsomething', function( req, res) {
  console.log(req.body.anzahlklicks);
  fs.writeFile( 'clicks.json', JSON.stringify( { klicks: req.body.anzahlklicks} ), function() {
    console.log('clicks.json gespeichert');
  res.end( 'erst ' + req.body.anzahlklicks + ' Klicks<br>Klich mich härter');
  } );


});

app.get('/:datanode/:id', function(req, res) {
  res.end(req.params.datanode+' --- '+req.params.id);
})
