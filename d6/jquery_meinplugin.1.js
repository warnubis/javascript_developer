
$.fn.red = function() {
  return this.css({color:'red'});

  //return this; // transparente Methode
  //return this.parent(); // destruktiv, weil jQuery aber was anderes als transparent

  // kein return => terminierende Methode
  // reurn kein jQuery => terminierend
};



;(function($) {
$.fn.colorize = function( options ) {
  var settings = $.extend({
    r:0,
    g:0,
    b:0
  },options);

   return this.each( function() { // Schleife für jedes Element das gewählt ist
    if ($(this).hasClass( 'nocolorize' ) == false ) { // führe nur aus wenn das einzelne Element nicht die Klasse hat
      $(this).css({color:'rgb('+settings.r+','+settings.g+','+settings.b+')'});
    };
  });



  //return this;
};
}(jQuery));
// o12 = $.extend( {}, o1, o2); // zusammenlegen von o1 und o2 in einem neuem Objekt
// $.extend( o1, o2); // zusammenlegen von o1 und o2 aber gespeichert wird in o1
