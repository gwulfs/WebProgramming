var x = 0;
function a() {
  var y = 6;
  console.log(x, y);
  function b() {
    var x = 7;
    var y = 8;
    z = 9;
    console.log(x, y, z);
  }
  b();
  console.log(x, y, z);
}
a();
console.log(x, z);
console.log(y);
