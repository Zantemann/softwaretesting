import { assert } from "chai";
import eq from "../src/eq.js";

describe("eq", () => {
  describe("Positive Test Cases", () => {
    it("should return true for identical object references", () => {
      const object = { a: 1 };
      assert.isTrue(eq(object, object));
    });

    it("should return true for identical array references", () => {
      const arr = [1,2,3];
      assert.isTrue(eq(arr, arr));
    });

    it("should return true for identical strings", () => {
      assert.isTrue(eq("abc123", "abc123"));
      assert.isTrue(eq("", ""));
    });

    it("should return true for identical numbers", () => {
      assert.isTrue(eq(1, 1));
    });

    it("should return true for identical boolean values", () => {
      assert.isTrue(eq(true, true));
      assert.isTrue(eq(false, false));
    });

    it("should return true for null, NaN or undefined are compare with themselves", () => {
      assert.isTrue(eq(null, null));
      assert.isTrue(eq(NaN, NaN));
      assert.isTrue(eq(undefined, undefined));
    });

  });

  describe("Negative Test Cases", () => {
    it("should return false for different object references with same properties", () => {
      const object1 = { a: 1 };
      const object2 = { a: 1 };
      assert.isFalse(eq(object1, object2));
    });

    it("should return false for identical array references", () => {
      const arr1= [1,2,3,4];
      const arr2= [1,2,3,4];
      assert.isFalse(eq(arr1, arr2));
    });

    it("should return false for string compared to object-wrapped string", () => {
      assert.isFalse(eq("a", Object("a")));
    });

    it("should return false for different strings", () => {
      assert.isFalse(eq("a", "b"));
    });

    it("should return false for different numbers", () => {
      assert.isFalse(eq(-1, 2));
    });

    it("should return false for number compared to string representation", () => {
      assert.isFalse(eq(1, "1"));
    });

    it("should return false for different boolean values", () => {
      assert.isFalse(eq(true, false));
      assert.isFalse(eq(true, 1));
    });

    it("should return false for mixed null, undefined and NaN comparisons", () => {
      assert.isFalse(eq(null, undefined));
      assert.isFalse(eq(null, NaN));
      assert.isFalse(eq(NaN, undefined));
    });

    it("should return false for 0 compared to NaN/null/undefined", () => {
      assert.isFalse(eq(0, NaN));
      assert.isFalse(eq(0, null));
      assert.isFalse(eq(0, undefined));
    });
  });
});
