var Operation = new KarmaTest.Operation();
var Foo = new KarmaTest.Foo();

describe('Main file', function () {
  describe('plus function', function () {

    it('should return an integer', function () {
      expect(Operation.plus(1, 2)).to.be.a('number');
    });

    it('should return a correct value', function () {
      expect(Operation.plus(1, 2)).to.be.equal(3);
    });
  });

  describe('minus function', function () {

    it('should return an integer', function () {
      expect(Operation.minus(1, 2)).to.be.a('number');
    });

    it('should return a correct value', function () {
      expect(Operation.minus(1, 2)).to.be.equal(-1);
    });
  });
});
