import Prey from './prey';

(function() {
  'use strict';

  describe('About My Prey', function() {

    beforeEach( function() {
      window.x = new Prey();
    });

    describe('creating my Prey', function() {
      it('should create an instance of Prey', function () {
        expect(x instanceof Prey).to.equal(true);
      });
    });

    describe('my Preys health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('Prey taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(100);
      });
    });

  });

}());


// Good Guy

// Bad Guy


// Both will have attack methods
// Both will have health

