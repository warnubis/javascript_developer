/*
Funktionenliste Wifi 2017
*/


var checkEingabe = function( wert ) {
  // Wert muss größer sein als null und darf nicht NaN sein
  if ( wert < 1 || isNaN( wert ) == true) {
    return false;
  }
  else {
    return true;
  }
  // Rückgabe ok (true/false)

}

var eingabeKorrekt = function ( feld ) {
  var i = document.getElementById( feld ).value * 1;

  if (!checkEingabe(i)){
    document.getElementById(feld).className = 'error';
    return false;
    }
    else return true;
}

var hideElement = function( idElement) {
  document.getElementById(idElement).className = 'page';
}

var showElement = function( idElement) {
  document.getElementById(idElement).className = 'page page-visible';
}

var changeElement = function ( idElement, visible) {
  if (visible) {
    showElement(idElement);
  }
  else hideElement(idElement);
}

var changeToInputScreen = function() {
    document.getElementById('feldCM').value = '';
    document.getElementById('feldKG').value = '';

    //document.getElementById( 'page-ausgabe' ).className = 'page';
    //document.getElementById( 'page-eingabe' ).className = 'page page-visible';
    changeElement('page-eingabe', true);
    changeElement('page-ausgabe', false);
}

var e = function( idElement){
  return document.getElementById( idElement);
}

var zufallsZahl = function(von, bis) {
    random = Math.floor(Math.random() * (bis - von) + 1) + von;
    return random;

}
