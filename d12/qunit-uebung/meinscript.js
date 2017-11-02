var pyth = function() {
  var a, b, c, o = {}, i = 0;
  for (a = 1; a<= 1000; a++ ) {
   for (b = 1; b<= 1000; b++ ) {
     i++;
      c = 1000 - b - a;
       if ( a+b+c == 1000 &&
        a*a+b*b == c*c ) {
          o.a = a;
          o.b = b;
          o.c = c;
        console.log( i );
        return o;
     }
   }
  }
};
