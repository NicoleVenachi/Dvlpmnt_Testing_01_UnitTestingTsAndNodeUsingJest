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

  describe("getStrringInfo for arg My-string should", () => {
    it("return right lenght", () => {
      // arrange:
      const sut = getStringInfo;

      // act:
      const actual = sut("My-String");

      //assert
      expect(actual.characters).toHaveLength(9);
    });

    it("return right lower case", () => {
      // arrange:
      const sut = getStringInfo;

      // act:
      const actual = sut("My-String");

      // assert:
      expect(actual.lowerCase).toBe("my-string");
    });

    it("return right upper case", () => {
      // arrange:
      const sut = getStringInfo;

      // act:
      const actual = sut("My-String");

      // assert:
      expect(actual.upperCase).toBe("MY-STRING");
    });

    it("return right charachters", () => {
      // arrange:
      const sut = getStringInfo;

      // act:
      const actual = sut("My-String");

      // assert:
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
    });

    it("return defined extra info", () => {
      // arrange:
      const sut = getStringInfo;

      // act:
      const actual = sut("My-String");

      // assert:
      //check for undefined (in this case it is an {} can't be undefined)
      expect(actual.extraInfo).toBeDefined();
    });

    it("return right extra info", () => {
      // arrange:
      const sut = getStringInfo;

      // act:
      const actual = sut("My-String");

      // assert:
      expect(actual.extraInfo).toEqual({});
    });
  });
});
