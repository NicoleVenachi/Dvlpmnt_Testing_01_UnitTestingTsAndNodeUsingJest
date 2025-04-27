import { getStringInfo, toUpperCase } from "../app/Utils";

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

  it.only("should return info for a valid string", () => {
    // arrange:
    const sut = getStringInfo;

    // act:
    const actual = sut("My-String");

    // assert:
    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);

    expect(actual.characters).toContain<string>("M");

    // valitate inner array regardless of the order
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );

    //check for undefined (in this case it is an {} can't be undefined)
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
