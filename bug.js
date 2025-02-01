function foo(a) {
  return a + bar();
}

function bar() {
  return 1;
}

foo(2); // returns NaN