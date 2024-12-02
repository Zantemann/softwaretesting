import { assert } from 'chai';
import eq from '../src/eq.js';

describe('eq', () => {
  describe('Positive Cases', () => {
    it('should return true for identical object references', () => {
      const object = { a: 1 };
      assert.isTrue(eq(object, object));
    });

    it('should return true for identical strings', () => {
      assert.isTrue(eq('a', 'a'));
    });

    it('should return true for identical numbers', () => {
      assert.isTrue(eq(1, 1));
    });

    it('should return true for NaN compared to NaN', () => {
      assert.isTrue(eq(NaN, NaN));
    });

    it('should return true for identical boolean values', () => {
      assert.isTrue(eq(true, true));
      assert.isTrue(eq(false, false));
    });

    it('should return true for null compared to null', () => {
      assert.isTrue(eq(null, null));
    });

    it('should return true for undefined compared to undefined', () => {
      assert.isTrue(eq(undefined, undefined));
    });
  });

  describe('Negative Cases', () => {
    it('should return false for different object references with same properties', () => {
      const object1 = { a: 1 };
      const object2 = { a: 1 };
      assert.isFalse(eq(object1, object2));
    });

    it('should return false for string compared to object-wrapped string', () => {
      assert.isFalse(eq('a', Object('a')));
    });

    it('should return false for different strings', () => {
      assert.isFalse(eq('a', 'b'));
    });

    it('should return false for different numbers', () => {
      assert.isFalse(eq(1, 2));
    });

    it('should return false for number compared to string representation', () => {
      assert.isFalse(eq(1, '1'));
    });

    it('should return false for boolean true compared to boolean false', () => {
      assert.isFalse(eq(true, false));
    });

    it('should return false for null compared to undefined', () => {
      assert.isFalse(eq(null, undefined));
    });

    it('should return false for number compared to NaN', () => {
      assert.isFalse(eq(1, NaN));
    });
  });
});
