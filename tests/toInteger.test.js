import { assert } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger() Tests", () => {
  describe("Positive Test Cases", () => {
    it("should convert a float to an integer", () => {
      assert.strictEqual(toInteger(3.2), 3);
      assert.strictEqual(toInteger(-12.7), -12);
    });

    it("should return the same integer for integer input", () => {
      assert.strictEqual(toInteger(5), 5);
      assert.strictEqual(toInteger(0), 0);
      assert.strictEqual(toInteger(-15), -15);
    });

    it("should convert a string representation of a number to an integer", () => {
      assert.strictEqual(toInteger("3.2"), 3);
      assert.strictEqual(toInteger("0"), 0);
      assert.strictEqual(toInteger("-12.7"), -12);
    });

    it("should convert Number.MIN_VALUE and Number.MAX_VALUE correctly", () => {
      assert.strictEqual(toInteger(Number.MIN_VALUE), 0);
      assert.strictEqual(toInteger(Number.MAX_VALUE), 1.7976931348623157e308);
    });

    it("should convert Infinity to the maximum/minimum integer", () => {
      assert.strictEqual(toInteger(Infinity), 1.7976931348623157e308);
      assert.strictEqual(toInteger(-Infinity), -1.7976931348623157e308);
    });

    it("should return correct boolean values", () => {
      assert.strictEqual(toInteger(true), 1);
      assert.strictEqual(toInteger(false), 0);
    });
  });

  describe("Negative Test Cases", () => {

    it("should return 0 for null, NaN or undefined", () => {
      assert.strictEqual(toInteger(null), 0);
      assert.strictEqual(toInteger(NaN), 0);
      assert.strictEqual(toInteger(undefined), 0);
    });

    it("should return 0 for non-numeric strings", () => {
      assert.strictEqual(toInteger("abc"), 0);  
      assert.strictEqual(toInteger(""), 0);
    });

    it("should return 0 for objects", () => {
      assert.strictEqual(toInteger({a: 1}), 0);
      assert.strictEqual(toInteger({}), 0); //?
    });

    it("should return 0 for arrays", () => {
      assert.strictEqual(toInteger([1, 2, 3]), 0);
      assert.strictEqual(toInteger([]), 0); //?
    });

    it("should return 0 for functions", () => {
      assert.strictEqual(toInteger(() => {}),0);
    });

    it("should return 0 for symbols", () => {
      assert.strictEqual(toInteger(Symbol("test")), 0);
    });
  });
});
