// Write your solution in this file!
describe('Fix the Scope', function() {
    describe('declare customerName to be bob in global scope', function() {
      it('returns the customerName', function() {
        expect(customerName).to.equal('bob');
      });
    });

    describe('upperCaseCustomerName()', function() {
      it('modifies the customerName variable', function() {
        expect(customerName).to.equal('bob');

        upperCaseCustomerName();

        expect(customerName).to.equal('BOB');
      });
    });

    describe('setBestCustomer()', function() {
      it('sets the bestCustomer', function() {
        expect(bestCustomer).to.equal(undefined);

        setBestCustomer();

        expect(bestCustomer).to.equal('not bob');
      });
    });

    describe('overwriteBestCustomer()', function() {
      it('overwrites the best customer', function() {
        overwriteBestCustomer('maybe bob');

        expect(bestCustomer).to.equal('maybe bob');
      });
    });

    describe('changeLeastFavoriteCustomer()', function() {
      it('throws an error when trying to reassign the least favorite customer', function() {
        expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
      });
    });
  });