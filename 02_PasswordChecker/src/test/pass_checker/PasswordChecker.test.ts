import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    //arrange
    sut = new PasswordChecker();
  });

  it("Password with less than 8 characters is invalid", () => {
    //act
    const actual = sut.checkPassword("1234567");

    //assert
    expect(actual).toBe(false);
  });

  it("Password should have at least 8 characters", () => {
    //act
    const actual = sut.checkPassword("12345678Ac");

    //assert
    expect(actual).toBe(true);
  });

  it("Password with no upper case is invalid", () => {
    //act
    const actual = sut.checkPassword("12345abcd");

    //assert
    expect(actual).toBe(false);
  });

  it("Password should contain upper case to be valid", () => {
    //act
    const actual = sut.checkPassword("12345abcdA");

    //assert
    expect(actual).toBe(true);
  });

  it("Password with no lower case is invalid", () => {
    //act
    const actual = sut.checkPassword("12345BCDER");

    //assert
    expect(actual).toBe(false);
  });

  it("Password should contain lower case to be valid", () => {
    //act
    const actual = sut.checkPassword("12345abcdA");

    //assert
    expect(actual).toBe(true);
  });
});
