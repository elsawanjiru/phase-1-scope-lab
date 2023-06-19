let customerName;

function declareCustomerName() {
  customerName = 'bob';
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}

describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      declareCustomerName();
      console.log(customerName);
      console.log(customerName === 'bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      customerName = 'bob';
      upperCaseCustomerName();
      console.log(customerName);
      console.log(customerName === 'BOB');
    });
  });

  describe('setBestCustomer()', function() {
    it('sets the bestCustomer', function() {
      setBestCustomer();
      console.log(bestCustomer);
      console.log(bestCustomer === 'not bob');
    });
  });

  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');
      console.log(bestCustomer);
      console.log(bestCustomer === 'maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('throws an error when trying to reassign the least favorite customer', function() {
      try {
        changeLeastFavoriteCustomer();
      } catch (error) {
        console.log(error.message);
        console.log(error.message === 'Assignment to constant variable.');
      }
    });
  });
});