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
  }

  uglyFunction(a) {
    return a + g;
  }

  buggyFunction () {
    return missingVar + 'toto';
  }
}

export {Operation, Foo};
