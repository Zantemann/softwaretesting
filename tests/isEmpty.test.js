import { assert } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty() Tests", () => {
  describe("positive test cases", () => {
    it("should return true for null", () => {
      assert.isTrue(isEmpty(null));
    });

    it("should return true for undefined", () => {
      assert.isTrue(isEmpty(undefined));
    });

    it("should return true for boolean values", () => {
      assert.isTrue(isEmpty(true));
      assert.isTrue(isEmpty(false));
    });

    it("should return true for numbers", () => {
      assert.isTrue(isEmpty(1));
      assert.isTrue(isEmpty(0));
      assert.isTrue(isEmpty(-1));
    });

    it("should return true for empty arrays", () => {
      assert.isTrue(isEmpty([]));
    });

    it("should return true for empty strings", () => {
      assert.isTrue(isEmpty(""));
    });

    it("should return true for empty objects", () => {
      assert.isTrue(isEmpty({}));
    });

    it("should return true for empty maps", () => {
      assert.isTrue(isEmpty(new Map()));
    });

    it("should return true for empty sets", () => {
      assert.isTrue(isEmpty(new Set()));
    });

    it("should return true for empty arguments object", function () {
      assert.isTrue(isEmpty(arguments));
    });
  });

  describe("negative test cases", () => {
    it("should return false for non-empty arrays", () => {
      assert.isFalse(isEmpty([1, 2, 3]));
    });

    it("should return false for non-empty strings", () => {
      assert.isFalse(isEmpty("abc"));
    });

    it("should return false for non-empty objects", () => {
      assert.isFalse(isEmpty({ a: 1 }));
    });

    it("should return false for non-empty maps", () => {
      const map = new Map();
      map.set("key", "value");
      assert.isFalse(isEmpty(map));
    });

    it("should return false for non-empty sets", () => {
      const set = new Set();
      set.add(1);
      assert.isFalse(isEmpty(set));
    });

    it("should return false for non-empty arguments object", function () {
      (function () {
        assert.isFalse(isEmpty(arguments));
      })(1, 2, 3);
    });

    it("should return false for objects with prototype properties", () => {
      function Foo() {
        this.a = 1;
      }
      Foo.prototype.b = 2;
      assert.isFalse(isEmpty(new Foo()));
    });
  });
});
