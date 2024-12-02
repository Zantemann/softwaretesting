import { assert } from "chai";
import castArray from "../src/castArray.js";

describe("castArray", () => {
  describe("Valid Inputs", () => {
    it("should return the same array if input is already an array", () => {
      const array = [1, 2, 3];
      assert.strictEqual(castArray(array), array);
      assert.deepEqual(castArray([]), []);
    });

    it("should wrap a non-array value in an array", () => {
      assert.deepEqual(castArray(1), [1]);
      assert.deepEqual(castArray("string"), ["string"]);
      assert.deepEqual(castArray({ a: 1 }), [{ a: 1 }]);
    });
  });

  describe("Invalid Inputs", () => {
    it("should return an empty array when no arguments are provided", () => {
      assert.deepEqual(castArray(), []);
    });

    it("should wrap null and undefined in an array", () => {
      assert.deepEqual(castArray(null), [null]);
      assert.deepEqual(castArray(undefined), [undefined]);
      assert.deepEqual(castArray(NaN), [NaN]);
    });
  });
});
