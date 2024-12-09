import { assert } from "chai";
import add from "../src/add.js";

describe("add.js", () => {
  describe("Positive Test Cases", () => {
    it("should add two numbers correctly", () => {
      assert.equal(add(2, 3), 5);
      assert.equal(add(2, -3), -1);
      assert.equal(add(-2, -3), -5);
    });

    it("should add zero to a number succesfully", () => {
      assert.equal(add(0, 5), 5);
      assert.equal(add(-10, 0), -10);
      assert.equal(add(0, 0), 0);
    });
  });

  describe("Negative Test Cases", () => {
    it("should return NaN when input(s) are strings", () => {
      assert.isNaN(add(-2, "string"));
      assert.isNaN(add("string", 5));
      assert.isNaN(add("string", "hello"));
    });


    it("should return NaN when adding NaN", () => {

      assert.isNaN(add(2, NaN));
      assert.isNaN(add(NaN, -5));
      assert.isNaN(add(NaN, NaN));
    });

    it("should return NaN when adding null", () => {

      assert.isNaN(add(2, null));
      assert.isNaN(add(null, -5));
      assert.isNaN(add(null, null));
    });

    it("should return NaN when adding undefined", () => {
      
      assert.isNaN(add(2, undefined));
      assert.isNaN(add(undefined, -5));
      assert.isNaN(add(undefined, undefined));
      
    });

    it("should return NaN with null, NaN and undefined combinations", () => {

      assert.isNaN(add(NaN, null));
      assert.isNaN(add(null, undefined));
      assert.isNaN(add(NaN, undefined));

    });


    it("should handle infinite and safe max/min values", () => {
      assert.equal(add(Infinity, 1), Infinity);
      assert.equal(add(-Infinity, -1), -Infinity);
      assert.equal(add(Number.MAX_SAFE_INTEGER, 1),Number.MAX_SAFE_INTEGER + 1);
      assert.equal(add(Number.MIN_SAFE_INTEGER, -1),Number.MIN_SAFE_INTEGER - 1);
    });

    it("should return NaN when input(s) are boolean", () => {
      
      assert.isNaN(add(5, true));
      assert.isNaN(add(false, -3));
      assert.isNaN(add(true, false));
      assert.isNaN(add(true, true));
      assert.isNaN(add(false, false));

    });

    it("should return NaN when input(s) are empty arrays or objects", () => {
      
      assert.isNaN(add([], []));
      assert.isNaN(add({}, {}));
      assert.isNaN(add({}, []));
      assert.isNaN(add(2, []));
      assert.isNaN(add({}, -5));
    });

    it("should return NaN when input(s) are non-empty arrays or objects", () => {

      assert.isNaN(add([2],[-5]))
      assert.isNaN(add([1,2],[-5]))
      assert.isNaN(add({a:2}, {a:-5}));
      assert.isNaN(add({a:1, b:2}, {a:-5}));
      assert.isNaN(add({a:2},[-5]))
      assert.isNaN(add(2,[-5]))
      assert.isNaN(add({a:2}, -5));
    });

  });
});
