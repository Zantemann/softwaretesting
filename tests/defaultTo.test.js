import { assert } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  describe('Valid Inputs', () => {
    it('should return the value when it is a non-null, defined, and non-NaN number', () => {
      assert.strictEqual(defaultTo(1, 10), 1);
    });

    it('should return the value when it is a non-null, defined, and non-NaN string', () => {
      assert.strictEqual(defaultTo('hello', 'default'), 'hello');
    });

    it('should return the value when it is a non-null, defined, and non-NaN object', () => {
      const obj = { a: 1 };
      assert.strictEqual(defaultTo(obj, { b: 2 }), obj);
    });

    it('should return the value when it is a non-null, defined, and non-NaN array', () => {
      const arr = [1, 2, 3];
      assert.strictEqual(defaultTo(arr, [4, 5, 6]), arr);
    });

    it('should return the value when it is a boolean true', () => {
      assert.strictEqual(defaultTo(true, false), true);
    });

    it('should return the value when it is a boolean false', () => {
      assert.strictEqual(defaultTo(false, true), false);
    });

    it('should return the value when it is an empty string', () => {
      assert.strictEqual(defaultTo('', 'default'), '');
    });

    it('should return the value when it is zero', () => {
      assert.strictEqual(defaultTo(0, 10), 0);
    });

    it('should return the value when it is a negative number', () => {
      assert.strictEqual(defaultTo(-5, 10), -5);
    });

    it('should return the value when it is an empty array', () => {
      const arr = [];
      assert.strictEqual(defaultTo(arr, [1, 2, 3]), arr);
    });

    it('should return the value when it is an empty object', () => {
      const obj = {};
      assert.strictEqual(defaultTo(obj, { a: 1 }), obj);
    });
  
  });


  describe('Invalid Inputs', () => {
    it('should return the default value when the input is null', () => {
      assert.strictEqual(defaultTo(null, 'default'), 'default');
    });

    it('should return the default value when the input is undefined', () => {
      assert.strictEqual(defaultTo(undefined, 'default'), 'default');
    });

    it('should return the default value when the input is NaN', () => {
      assert.strictEqual(defaultTo(NaN, 'default'), 'default');
    });
  });
});
