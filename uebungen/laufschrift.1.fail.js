
;(function($) {
$.fn.newsticker = function() {
var text = '$(this).val();'
var begin = 0;
var end = text.length;


return this.each(function() {

console.log(text);
for(var i = 0; i <= (end*5);i++){
  $(this).val( '' + text.substring( begin, end ) + ' ' + text.substring( 0, begin ) );

 begin ++;
 console.log(begin);
 if(begin >= end) {begin = 0;}

 setTimeout('', 500);
}

});

};
}(jQuery));
