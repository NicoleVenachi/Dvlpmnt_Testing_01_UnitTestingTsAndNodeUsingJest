import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

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
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password should have at least 8 characters to be valid", () => {
    //act
    const actual = sut.checkPassword("12345678Ac");

    //assert
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("Password with no upper case is invalid", () => {
    //act
    const actual = sut.checkPassword("abcd");

    //assert
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password should contain upper case to be valid", () => {
    //act
    const actual = sut.checkPassword("12345abcdA");

    //assert
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it("Password with no lower case is invalid", () => {
    //act
    const actual = sut.checkPassword("12345BCDER");

    //assert
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Password should contain lower case to be valid", () => {
    //act
    const actual = sut.checkPassword("abcdA");

    //assert
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it("Complex Password is valid", () => {
    //act
    const actual = sut.checkPassword("1234aVbasd");

    //assert
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  it("Admim Password with no number is invalid ", () => {
    //act
    const actual = sut.checkAdminPassword("abcd");

    //assert
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("Admim Password should contain numbers to be valid ", () => {
    //act
    const actual = sut.checkAdminPassword("abcd12");

    //assert
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
