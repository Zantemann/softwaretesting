import { assert } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  describe("Positive Test Cases", () => {
    it("should return the value when parameter is valid string", () => {
      assert.strictEqual(defaultTo("hello", "default"), "hello");
      assert.strictEqual(defaultTo("", "default"), "");
    });

    it("should return the value when parameter is valid number", () => {
      assert.strictEqual(defaultTo(1, 10), 1);
      assert.strictEqual(defaultTo(0, 10), 0);
      assert.strictEqual(defaultTo(-5, 10), -5);
    });

    it("should return the value when parameter is valid array", () => {
      const arr = [1, 2, 3];
      assert.strictEqual(defaultTo(arr, [4, 5, 6]), arr);

      const array = [];
      assert.strictEqual(defaultTo(array, [1, 2, 3]), array);
    });

    it("should return the value when parameter is valid object", () => {
      const obj = { a: 1 };
      assert.strictEqual(defaultTo(obj, { b: 2 }), obj);

      const object = {};
      assert.strictEqual(defaultTo(object, { a: 1 }), object);
    });

    it("should return the value when parameter is valid boolean", () => {
      assert.strictEqual(defaultTo(true, false), true);
      assert.strictEqual(defaultTo(false, true), false);
    });
  });

  describe("Negative Test Cases", () => {
    it("should return the default value when the input is null", () => {
      assert.strictEqual(defaultTo(null, "default"), "default");
    });

    it("should return the default value when the input is undefined", () => {
      assert.strictEqual(defaultTo(undefined, "default"), "default");
    });

    it("should return the default value when the input is NaN", () => {
      assert.strictEqual(defaultTo(NaN, "default"), "default");
    });
  });
});
