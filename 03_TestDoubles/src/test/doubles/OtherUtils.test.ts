import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils Test Suite", () => {
  // ---------------- STUBS --------------------
  it("Should calculate String Complexity", () => {
    // Arrange
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "SomeInfo",
        field2: "SomeOtherInfo",
      },
    };

    // Act
    const actual = calculateComplexity(someInfo as any);

    // Assert
    expect(actual).toBe(10);
  });

  // ---------------- FAKES --------------------
  it("ToUpperCase - Should call a callback for invalid argument", () => {
    // Act (fake object passed)
    const actual = toUpperCaseWithCb("", () => {}); //valid arg should received string as arg

    // Assert
    expect(actual).toBeUndefined();
  });
  it("ToUpperCase - Should call a callback for valid argument", () => {
    // Act (fake object passed)
    const actual = toUpperCaseWithCb("abc", () => {}); //valid arg should received string as arg

    // Assert
    expect(actual).toBe("ABC");
  });
});
