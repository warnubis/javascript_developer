QUnit.test( 'mein erster Test', function(assert){
 assert.ok( 1=='1', 'automatische Typumwandlung')

});

QUnit.test( 'Zahlen addieren', function(assert){
  assert.ok(typeof add == 'function', 'add() existiert');
  assert.equal( add(1,2), 3, 'addieren von zahlen');
  assert.equal( add('1', '2'), 3, 'addieren mit Typumwandlung');
  assert.equal( add('a', 'b'), 'ab', 'Bei nichtnumerischen Werten verketten');
  assert.equal( add('1,5', 1.2), 2.7, 'Addieren Komazahlen . oder ,');
});

QUnit.test( 'Objekte', function(assert){
  assert.ok(typeof create == 'function', 'create() existiert');
  //assert.equal(create(1,2), {a:1, b:2}, 'Zahlenobjekt');
  assert.deepEqual( create(1,2), {a:1, b:2}, 'Zahlenobjekt');
  assert.deepEqual( create(1,2,3), {a:1,b:2,c:3}, 'Zahlenobjekt beliebig viele Werte');
  assert.deepEqual( create(2,3,1), {a:1,b:2,c:3}, 'Zahlenobjekt sortiert');
  assert.throws( create(), /Error/, 'keine Werte');
  assert.throws( create('a'), /Error/, 'nichtnumerische Werte');
});

QUnit.module( 'Setup HTML', {
  before:function() {
    var div = document.createElement( 'div' );
    div.id = 'ausgabe';
    document.getElementById( 'qunit-fixture' ).appendChild( div );
  },
  after:function() {
    document.getElementById( 'qunit-fixture' ).innerHTML = '';
  }
})

QUnit.test( 'Addiere mit Ausgabe', function(assert){
  outputSum(1,2);
  assert.equal( document.getElementById('ausgabe').innerHTML, '3', 'Ausgabe');
});
