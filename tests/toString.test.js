import { assert } from "chai";
import toString from "../src/toString.js";

describe("toString() Tests", () => {
  describe("Positive Test Cases", () => {
  
    it("should return the same string if input is a string", () => {
      assert.equal(toString("test"), "test");
      assert.equal(toString(""), "");
    });

    it("should convert numbers to strings", () => {
      assert.equal(toString(-0), "-0");
      assert.equal(toString(5), "5");
      assert.equal(toString(-12.7), "-12.7");
    });

    it("should convert boolean to string", () => {
      assert.equal(toString(true), "true");
      assert.equal(toString(false), "false");
    });

    it("should convert an array to a string", () => {
      assert.equal(toString([1, 2, 3]), "1,2,3");
      assert.equal(toString([]), "");
    });

    it("should convert an object to a string", () => {
      assert.equal(toString({ a: 1 }), "[object Object]");
      assert.equal(toString({}), "[object Object]");
    });

    it("should convert a symbol to a string", () => {
      const symbol = Symbol("test");
      assert.equal(toString(symbol), symbol.toString());
    });
  });

  describe("Negative Test Cases", () => {

    it("should convert null, NaN and undefined to an empty string", () => {
      assert.equal(toString(null), "");
      assert.equal(toString(NaN), "");
      assert.equal(toString(undefined), "");
    });

    it("should handle Infinity correctly", () => {
      assert.equal(toString(Infinity), "Infinity");
      assert.equal(toString(-Infinity), "-Infinity");
    });

    it("should return 'NaN' when dividing with zero", () => {
      assert.equal(toString(0 / 0), "NaN");
      assert.equal(toString(1 / 0), "NaN");
      assert.equal(toString(-1 / 0), "NaN");
    });

  });
});
