var x = parseInt(prompt("Please enter first number"));
var y = parseInt(prompt("Please Enter second number"));

class Test {
  a = null;
  b = null;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  mul() {
    return this.a * this.b;
  }
}

const t = new Test(x, y);

document.writeln("Addition of two number is "+ t.sum()+"<br>");
document.writeln("Multiplication of two number is "+ t.mul());