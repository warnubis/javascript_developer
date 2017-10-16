
;(function($) {
$.fn.newsticker = function(  ) {
//var settings = $.extend({
  //color:'red'
//},options);
var text = " +++ Sport: Nachricht1 +++ Politik: Nachricht 2 +++ ";
var begin = 0;
var end = text.length;

return this.each( function() {
  $('<newsticker>').val("" +
 text.substring(begin,end) + " " + text.substring(0,begin));

 begin ++;
 if(begin >= end)
 {
  begin = 0;
 }
 //newsticker();

});
  //return this;
};
}(jQuery));
// o12 = $.extend( {}, o1, o2); // zusammenlegen von o1 und o2 in einem neuem Objekt
// $.extend( o1, o2); // zusammenlegen von o1 und o2 aber gespeichert wird in o1
