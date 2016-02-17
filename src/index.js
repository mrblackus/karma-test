import Bar from './bar';

class Operation {
  plus(a, b) {
    return a + b;
  }

  minus(a, b) {
    return a - b;
  }
}

class Foo {
  constructor() {
    this.g = 2;
    this.bar = new Bar(3);
  }

  uglyFunction(a) {
    return a + g + this.bar.baz();
  }

  buggyFunction () {
    return missingVar + 'toto';
  }
}

export {Operation, Foo};
