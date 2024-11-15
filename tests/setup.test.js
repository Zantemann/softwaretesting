import { assert } from "chai";
import map from "../src/map.js";

describe("Pipeline Test", () => {
  it("should pass this placeholder test", () => {
    assert.isTrue(true);
  });

  it("should map array values using the iteratee function", () => {
    function square(n) {
      return n * n;
    }

    const result = map([4, 8], square);
    assert.deepEqual(result, [16, 64]);
  });

  it("should return an empty array when input is null or undefined", () => {
    function square(n) {
      return n * n;
    }

    assert.deepEqual(map(null, square), []);
    assert.deepEqual(map(undefined, square), []);
  });
});
