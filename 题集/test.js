function a() {
  function b() {
    function c() {
      console.log(2);
      return;
    }
    c();
    console.log(1)
  }
  return b();
}
a();