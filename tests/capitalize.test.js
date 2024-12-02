import { assert } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  describe('Positive Testing', () => {
    it('should capitalize the first letter and lowercase the rest for a lowercase word', () => {
      assert.strictEqual(capitalize('hello'), 'Hello');
    });

    it('should capitalize the first letter and lowercase the rest for an uppercase word', () => {
      assert.strictEqual(capitalize('HELLO'), 'Hello');
    });

    it('should capitalize the first letter and lowercase the rest for a mixed-case word', () => {
      assert.strictEqual(capitalize('hElLo'), 'Hello');
    });

    it('should handle a single lowercase character', () => {
      assert.strictEqual(capitalize('a'), 'A');
    });

    it('should handle a single uppercase character', () => {
      assert.strictEqual(capitalize('A'), 'A');
    });

    it('should handle strings with trailing whitespace', () => {
      assert.strictEqual(capitalize('hello  '), 'Hello  ');
    });

    it('should handle strings with internal whitespace', () => {
      assert.strictEqual(capitalize('hello world'), 'Hello world');
    });
  });

  describe('Negative Testing', () => {
    
    it('should return an empty string when input is an empty string', () => {
      assert.strictEqual(capitalize(''), '');
    });
    
    it('should handle strings with leading whitespace', () => {
      assert.strictEqual(capitalize('  hello'), '  hello');
    });

    it('should handle non-alphabetic starting characters correctly', () => {
      assert.strictEqual(capitalize('123abc'), '123abc');
      assert.strictEqual(capitalize('!@#abc'), '!@#abc');
    });

    it('should convert non-string inputs to strings and capitalize appropriately', () => {
      assert.strictEqual(capitalize(123), '123');
      assert.strictEqual(capitalize(true), 'True');
      assert.strictEqual(capitalize([1, 2, 3]), '1,2,3');
      assert.strictEqual(capitalize({}), '[object object]');
      assert.strictEqual(capitalize(null), 'Null');
      assert.strictEqual(capitalize(undefined), 'Undefined');
    });

  });
});
