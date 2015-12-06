var x = 0;
function a() {
  var y = 6;
  console.log(x, y); // 0, 6
  function b() {
    var x = 7;
    var y = 8;
    z = 9;
    console.log(x, y, z); // 7, 8, 9
  }
  b();
  console.log(x, y, z); // 0, 6, 9
}
a();
console.log(x, z); // 0, 9
try {
  console.log(y); // eh?
}
catch (e) {
  console.log("Bruh");
}
console.log("Okay, everybody wins!");
