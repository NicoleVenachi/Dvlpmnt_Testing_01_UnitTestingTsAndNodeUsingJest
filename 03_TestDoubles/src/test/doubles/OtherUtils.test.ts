import { calculateComplexity } from "../../app/doubles/OtherUtils";

describe("OtherUtils Test Suite", () => {
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
    const actual = calculateComplexity(someInfo);

    // Assert
    export(actual).toBe(10);
  });
});
