var add = function(a, b) {
  if(typeof a == 'string') a = a.replace(',', '.');
  if(typeof b == 'string') b = b.replace(',', '.');

  if(isFinite(a) ) a*=1;
  if(isFinite(b) ) b*=1;
  return a + b;
};

var create = function() {
  //var werte = arguments.sort();
  //if ( arguments.length == 0 ) throw 'Fehler: keine Werte';
  arguments = Array.prototype.sort.call( arguments );
  var o = {};
  var indexe = 'abcde';
  for ( var i in arguments) {
    //o[ indexe[i] ] = arguments[i];
    o[String.fromCharCode( i*1+97 ) ] = arguments[i];
  }

  return o;
};
 var outputSum = function(x, y){
   document.getElementById('ausgabe').innerHTML = add(x,y);
 }
