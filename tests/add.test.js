import { assert } from "chai";
import add from "../src/add.js";

describe("add.js", () => {
  describe("Valid inputs", () => {
    it("should add two positive numbers", () => {
      assert.equal(add(2, 3), 5);
    });

    it("should add two negative numbers", () => {
      assert.equal(add(-2, -3), -5);
    });

    it("should add a positive and a negative number", () => {
      assert.equal(add(2, -3), -1);
    });

    it("should add zero to a number", () => {
      assert.equal(add(0, 5), 5);
      assert.equal(add(5, 0), 5);
      assert.equal(add(0, 0), 0);
    });
  });

  describe("Boundary values", () => {
    it("should handle Number.MAX_SAFE_INTEGER correctly", () => {
      assert.equal(
        add(Number.MAX_SAFE_INTEGER, 1),
        Number.MAX_SAFE_INTEGER + 1
      );
    });

    it("should handle Number.MIN_SAFE_INTEGER correctly", () => {
      assert.equal(
        add(Number.MIN_SAFE_INTEGER, -1),
        Number.MIN_SAFE_INTEGER - 1
      );
    });
  });

  describe("Invalid inputs", () => {
    it("should return NaN when one input is a string", () => {
      assert.isNaN(add("string", 5));
      assert.isNaN(add("string", "hello"));
    });

    it("should return non undefined value", () => {
      assert.strictEqual(add(2, undefined), 2);
      assert.strictEqual(add(undefined, -5), -5);
      assert.strictEqual(add(undefined, undefined), 0);
    });

    it("should return 0 for non numeric inputs", () => {
      assert.strictEqual(add(undefined, undefined), 0);
      assert.strictEqual(add(null, null), 0);
      assert.strictEqual(add(null, undefined), 0);
      assert.strictEqual(add(NaN, NaN), 0);
      assert.strictEqual(add(NaN, null), 0);
      assert.strictEqual(add(NaN, undefined), 0);
    });

    it("should handle infinite values", () => {
      assert.equal(add(Infinity, 1), Infinity);
      assert.equal(add(-Infinity, -1), -Infinity);
    });

    it("should return NaN when inputs are non-numeric", () => {
      assert.isNaN(add({}, []));
    });

    it("should return NaN for NaN inputs", () => {
      assert.isNaN(add(NaN, 2));
    });
  });
});
