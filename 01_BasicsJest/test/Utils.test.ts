import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should reuturn uppercase", () => {
    // arrange: (get upper case function)
    const sut = toUpperCase;
    const expected = "ABC";

    // act: (Evaluate method)
    const actual = sut("abc");

    // assert: (validate assertion)
    expect(actual).toBe(expected);
  });
});
