console.log('Environment variable HOST:' + window.__env__.HOST);

describe('Main file', function () {
  describe('plus function', function () {

    it('should return an integer', function () {
      expect(plus(1, 2)).to.be.a('number');
    });

    it('should return a correct value', function () {
      expect(plus(1, 2)).to.be.equal(3);
    });
  });

  describe('minus function', function () {

    it('should return an integer', function () {
      expect(minus(1, 2)).to.be.a('number');
    });

    it('should return a correct value', function () {
      expect(minus(1, 2)).to.be.equal(-1);
    });
  });
});
