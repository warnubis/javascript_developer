
;(function($) {
$.fn.newsticker = function() {
var _t = this;

//var text = $(_t).val();
return this.each(function() {

// $.fn.funktion.apply(this, [parameter]) Möglichkeit immer das gleiche This zu übergeben
	var begin = 0;

function internNewsticker() {

var text = 'Endlich ein Lauftext';
 var end = text.length;
console.log(text);
  $(_t).val( '' + text.substring( begin, end ) + ' ' + text.substring( 0, begin ) );

 begin ++;
 console.log(begin);
 if(begin >= end) {begin = 0;}
  setTimeout(internNewsticker, 200);
}

internNewsticker();

});

};
}(jQuery));
