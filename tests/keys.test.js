import { assert } from "chai";
import keys from "../src/keys.js";

describe("keys() Tests", () => {
  describe("positive test cases", () => {
    it("should return own enumerable property names of an object", () => {
      function Foo() {
        this.a = 1;
        this.b = 2;
      }
      Foo.prototype.c = 3;
      const result = keys(new Foo());
      assert.includeMembers(result, ["a", "b"]);
      assert.lengthOf(result, 2);
    });

    it("should return own enumerable property names of an array", () => {
      assert.deepEqual(keys([1, 2, 3]), ["0", "1", "2"]);
    });

    it("should return own enumerable property names of a string", () => {
      assert.deepEqual(keys("hi"), ["0", "1"]);
    });

    it("should return own enumerable property names of an object with symbol properties", () => {
      const symbol = Symbol("test");
      const obj = { a: 1, [symbol]: 2 };
      assert.deepEqual(keys(obj), ["a"]);
    });

    it("should return an empty array for an empty object", () => {
      assert.deepEqual(keys({}), []);
    });

    it("should return own enumerable property names of a function", () => {
      function testFunc() {}
      testFunc.a = 1;
      testFunc.b = 2;
      assert.deepEqual(keys(testFunc), ["a", "b"]);
    });
  });

  describe("negative test cases", () => {
    it("should return an empty array for null", () => {
      assert.deepEqual(keys(null), []);
    });

    it("should return an empty array for undefined", () => {
      assert.deepEqual(keys(undefined), []);
    });

    it("should return an empty array for a number", () => {
      assert.deepEqual(keys(123), []);
    });

    it("should return an empty array for a boolean", () => {
      assert.deepEqual(keys(true), []);
      assert.deepEqual(keys(false), []);
    });

    it("should return an empty array for a symbol", () => {
      assert.deepEqual(keys(Symbol("test")), []);
    });
  });
});