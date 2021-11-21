// const assert = require('assert'); // node
const assert = require('chai').assert;                            // chai
const should = require('chai').should();

describe('Mis ejemplos con mocha', () => {
  it('Validando que el numero 5 este en mi array', () => {
    assert.equal([1, 2, 3, 4, 5].length, 5);
  });

  it('Quiero validar que 2 + 2 = 4', () => {
    const suma = 2 + 2;
    assert.equal(suma, 6);
  })

});