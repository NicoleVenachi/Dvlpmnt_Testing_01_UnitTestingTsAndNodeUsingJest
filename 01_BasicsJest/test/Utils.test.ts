import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      // arrange
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      //clearing mocks
      console.log("Teardown");
    });

    it.skip("Should return correct upper case", () => {
      // act:
      const actual = sut.toUpperCase("abc");

      // assert: (validate assertion)
      expect(actual).toBe("ABC");
    });

    it.todo("Test long strings");

    it.concurrent("Should throw error on invalid argument - function", () => {
      // act:
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      // assert:
      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid argument");
    });

    xit("Should throw error on invalid argument - arrow function", () => {
      // act-assert:
      expect(() => {
        sut.toUpperCase("");
      }).toThrow();
    });

    fit("Should throw error on invalid argument - try-catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo should thorw error for invalid arg!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument");
        done();
      }
    });
  });

  it("should return uppercase", () => {
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

  describe("ToUpperCase examples", () => {
    //arrange
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input to upercha should be $expected", ({ input, expected }) => {
      //act
      const actual = toUpperCase(input);

      //assert
      expect(actual).toBe(expected);
    });
  });
});
