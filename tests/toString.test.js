import { assert } from "chai";
import toString from "../src/toString.js";

describe("toString() Tests", () => {
  describe("positive test cases", () => {
    it("should convert null to an empty string", () => {
      assert.equal(toString(null), "");
    });

    it("should convert undefined to an empty string", () => {
      assert.equal(toString(undefined), "");
    });

    it("should convert -0 to '-0'", () => {
      assert.equal(toString(-0), "-0");
    });

    it("should convert an array to a string", () => {
      assert.equal(toString([1, 2, 3]), "1,2,3");
    });

    it("should convert a symbol to a string", () => {
      const symbol = Symbol("test");
      assert.equal(toString(symbol), symbol.toString());
    });

    it("should convert a number to a string", () => {
      assert.equal(toString(123), "123");
    });

    it("should convert an object to a string", () => {
      assert.equal(toString({ a: 1 }), "[object Object]");
    });

    it("should return the same string if input is a string", () => {
      assert.equal(toString("test"), "test");
    });
  });

  describe("negative test cases", () => {
    it("should handle Infinity correctly", () => {
      assert.equal(toString(Infinity), "Infinity");
    });

    it("should return 'NaN' for 0 / 0", () => {
      assert.equal(toString(0 / 0), "NaN");
    });

    it("should handle NaN correctly", () => {
      assert.equal(toString(NaN), "NaN");
    });

    it("should return 'Infinity' for 1 / 0", () => {
      assert.equal(toString(1 / 0), "Infinity");
    });

    it("should return '-Infinity' for -1 / 0", () => {
      assert.equal(toString(-1 / 0), "-Infinity");
    });
  });
});
