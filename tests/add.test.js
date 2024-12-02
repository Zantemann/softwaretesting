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
    });
  });

  describe("Boundary values", () => {
    it("should handle Number.MAX_SAFE_INTEGER correctly", () => {
      assert.equal(add(Number.MAX_SAFE_INTEGER, 1), Number.MAX_SAFE_INTEGER + 1);
    });

    it("should handle Number.MIN_SAFE_INTEGER correctly", () => {
      assert.equal(add(Number.MIN_SAFE_INTEGER, -1), Number.MIN_SAFE_INTEGER - 1);
    });

    it("should handle zero correctly", () => {
      assert.equal(add(0, 0), 0);
    });
  });

  describe("Invalid inputs", () => {
    it("should return NaN when one input is a string", () => {
      assert.isNaN(add("string", 5));
      assert.isNaN(add("string", "hello"));
    });

    it("should return NaN when inputs are non-numeric", () => {
      assert.isNaN(add(null, undefined));
      assert.isNaN(add({}, []));
    });

    it("should return NaN for NaN inputs", () => {
      assert.isNaN(add(NaN, 2));
    });
  });

  describe("Special cases", () => {
    it("should handle Infinity values", () => {
      assert.equal(add(Infinity, 1), Infinity);
      assert.equal(add(-Infinity, -1), -Infinity);
    });

    it("should handle very large numbers", () => {
      assert.equal(add(1e308, 1e308), Infinity);
    });

    it("should handle very small numbers", () => {
      assert.equal(add(1e-308, 1e-308), 2e-308);
    });
  });
});
