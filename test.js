describe('Main file', function () {
  describe('plus function', function () {

    it('should return an integer', function () {
      expect(plus(1, 2)).to.be.a('number');
    });

    it('should return a correct value', function () {
      expect(plus(1, 2)).to.be.equal(3);
    });
  });
});
