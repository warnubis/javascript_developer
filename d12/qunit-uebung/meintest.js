QUnit.test( 'Übungstest', function(assert){
  assert.ok(typeof pyth == 'function', 'pyth() existiert');
  var o = pyth();
  console.log(o);
  assert.ok(Number.isInteger(o['a']) == true, 'a ist eine ganze Zahl');
  assert.ok(Number.isInteger(o['b']) == true, 'b ist eine ganze Zahl');
  assert.ok(Number.isInteger(o['c']) == true, 'c ist eine ganze Zahl');
  assert.ok(Math.sign(o['a']) == 1, 'a ist eine positive Zahl');
  assert.ok(Math.sign(o['b']) == 1, 'b ist eine positive Zahl');
  assert.ok(Math.sign(o['c']) == 1, 'c ist eine positive Zahl');
  assert.ok(o['a'] + o['b'] + o['c'] == 1000, 'Summe ist 1000');
  assert.ok(Math.pow(o['a'],2) + Math.pow(o['b'],2) == Math.pow(o['c'],2), 'Formel stimmt');


});
