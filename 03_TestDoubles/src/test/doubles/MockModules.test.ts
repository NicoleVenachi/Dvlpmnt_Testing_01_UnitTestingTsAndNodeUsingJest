//
//
jest.mock("../../app/doubles/OtherUtils", () => ({
  ...jest.requireActual("../../app/doubles/OtherUtils"),
  calculateComplexity: () => {
    return 10;
  },
}));

jest.mock("uuid", () => ({
  ...jest.requireActual("uuid"),
  v4: () => "123",
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("module test", () => {
  test("Caculate complexity", () => {
    // arrange
    //act
    const result = OtherUtils.calculateComplexity({} as any);
    // console.log(result);

    // assert
    expect(result).toBe(10);
  });

  test("keep other fns", () => {
    // arrange
    //act
    const result = OtherUtils.toUpperCase("abc");
    // console.log(result);

    // assert
    expect(result).toBe("ABC");
  });

  test("string with id", () => {
    // arrange
    //act
    const result = OtherUtils.toLowerCaseWithId("abc");
    console.log(result);

    // assert
    expect(result).toBe("abc123");
  });
});
