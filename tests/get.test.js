import { assert } from "chai";
import get from "../src/get.js";

describe("get() Tests", () => {
  describe("Positive Test Cases", () => {
    it("should get the value at the specified path of an object", () => {
      const object = { a: [{ b: { c: 3 } }] };
      assert.strictEqual(get(object, "a[0].b.c"), 3);
      assert.strictEqual(get(object, ["a", "0", "b", "c"]), 3); //Alternate path format
    });

    it("should return the default value if the resolved value is undefined", () => {
      const object = { a: [{ b: { c: 3 } }] };
      assert.strictEqual(get(object, "a.x.c", "default"), "default");
    });

    it("should return the value at the specified path of an array", () => {
      const array = [[{ a: 1 }]];
      assert.strictEqual(get(array, "[0][0].a"), 1);
    });

    it("should return the entire object if path is empty", () => {
      const object = { a: [{ b: { c: 3 } }] };
      assert.deepEqual(get(object, ""), object);
    });

    it("should return the value at the specified path of a string", () => {
      const string = "hello";
      assert.strictEqual(get(string, "length"), 5);
    });
  });

  describe("Negative Test Cases", () => {
    it("should return undefined for empty objects", () => {
      const object = {};
      assert.strictEqual(get(object, "a"), undefined);
    });

    it("should return the default value for non-existent paths", () => {
      const object = { a: [{ b: { c: 3 } }] };
      assert.strictEqual(get(object, "a[0].b.c.x"), undefined);
    });

    it("should return the default value for non-existent paths with a default value", () => {
      const object = { a: [{ b: { c: 3 } }] };
      assert.strictEqual(get(object, "a[0].b.c.x", "default"), "default");
    });

    it("should return undefined if the object is null, NaN or undefined", () => {
      assert.strictEqual(get(null, "a.b.c"), undefined);
      assert.strictEqual(get(undefined, "a.b.c"), undefined);
      assert.strictEqual(get(NaN, "a.b.c"), undefined);
    });

    it("should return the default value if the object is null, NaN or undefined with a default value", () => {
      assert.strictEqual(get(null, "a.b.c", "default"), "default");
      assert.strictEqual(get(undefined, "a.b.c", "default"), "default");
      assert.strictEqual(get(NaN, "a.b.c", "default"), "default");
    });

    it("should return undefined for non-object values", () => {
      assert.strictEqual(get(123, "a.b.c"), undefined);
      assert.strictEqual(get("Hello", "a.b.c"), undefined);
      assert.strictEqual(get(true, "a.b.c"), undefined);
    });

    it("should return the default value for non-object values with a default value", () => {
      assert.strictEqual(get(123, "a.b.c", "default"), "default");
      assert.strictEqual(get("Hello", "a.b.c", "default"), "default");
      assert.strictEqual(get(true, "a.b.c", "default"), "default");
    });
  });
});
