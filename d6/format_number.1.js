
;(function($) {
$.fn.formatNumbers = function( options ) {
var settings = $.extend({
  color:'red'
},options);

return this.each( function() {

    var i, inhalt = $(this).html(), neuerInhalt = '';
    for (i in inhalt) {
      neuerInhalt += isFinite( inhalt[i] ) ? '<n style="color:red;">'+inhalt[i]+'</n>' : inhalt[i];
    }
      // !isNan( ... ) == isFinite( ... )
    $(this).html( neuerInhalt );
  //var num = 'h2h2h2'.match(/\d+/);
  //var num = $(this).html().replace(/[0-9]/g, '' );
//$(num).css({color:'rgb('+settings.r+','+settings.g+','+settings.b+')'});
        //console.log(num);
});
  //return this;
};
}(jQuery));
// o12 = $.extend( {}, o1, o2); // zusammenlegen von o1 und o2 in einem neuem Objekt
// $.extend( o1, o2); // zusammenlegen von o1 und o2 aber gespeichert wird in o1
