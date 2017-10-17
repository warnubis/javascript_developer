
;(function($) {
$.fn.newsticker = function() {



return this.each(function() {
  var text = $(this).val();
var begin = 0;
var end = text.length;
console.log(text);
  $(this).val( '' + text.substring( begin, end ) + ' ' + text.substring( 0, begin ) );

 begin ++;
 console.log(begin);
 if(begin >= end) {begin = 0;}

 setTimeout(newsticker, 50);


});

};
}(jQuery));
