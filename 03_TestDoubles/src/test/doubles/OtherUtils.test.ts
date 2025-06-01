import {
  calculateComplexity,
  OtherStringUtils,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe.skip("OtherUtils Test Suite", () => {
  // ------------------ SPIES--------------
  describe.only("OtherStringUtils test with spies", () => {
    // arragnge

    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    test("use a spy to track calls args", () => {
      const tpUpperCaseSpy = jest.spyOn(sut, "toUpperCase");

      // act
      sut.toUpperCase("asd");

      expect(tpUpperCaseSpy).toBeCalledWith("asd");
    });

    test("use a spy to track calls tto other module", () => {
      const consoleLogSpy = jest.spyOn(console, "log");

      // act
      sut.logString("abc");

      expect(consoleLogSpy).toBeCalledWith("abc");
    });

    test.only("use a spy to replace the implementation of a method", () => {
      jest.spyOn(sut, "callExternalService").mockImplementation(() => {
        console.log("calling mocked implementation");
      });

      //act
      sut.callExternalService();

      // expect(consoleLogSpy).toBeCalledWith("abc");
    });
  });

  // ------------------ MOCKS JEST NATIVE --------------
  describe.only("Tracking callbacks using Jest Mocks", () => {
    const callBackMock = jest.fn();

    afterEach(() => {
      // independence, clear mock, calls and inners args
      jest.clearAllMocks();
    });

    it("ToUpperCase - Should call a callback for invalid argument - Track Calls", () => {
      // Act (fake object passed)
      const actual = toUpperCaseWithCb("", callBackMock);

      // Assert
      expect(actual).toBeUndefined();
      expect(callBackMock).toBeCalledWith(`Invalid argument`);
      expect(callBackMock).toBeCalledTimes(1);
    });

    it("ToUpperCase - Should call a callback for valid argument - Track Calls", () => {
      // Act (fake object passed)
      const actual = toUpperCaseWithCb("abc", callBackMock);

      // Assert
      expect(actual).toBe("ABC");
      expect(callBackMock).toBeCalledWith(`called another funcntion with abc`);
      expect(callBackMock).toBeCalledTimes(1);
    });
  });

  // ------------------ MOCKS --------------
  describe.only("Tracking callbacks", () => {
    // arrange (Mock)
    let cbArgs = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      //should track the args
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      // clearing tracking fields (Test Independence)
      cbArgs = [];
      timesCalled = 0;
    });

    it("ToUpperCase - Should call a callback for invalid argument - Track Calls", () => {
      // Act (fake object passed)
      const actual = toUpperCaseWithCb("", callbackMock);

      // Assert
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain(`Invalid argument`);
      expect(timesCalled).toBe(1);
    });

    it("ToUpperCase - Should call a callback for valid argument - Track Calls", () => {
      // Act (fake object passed)
      const actual = toUpperCaseWithCb("abc", callbackMock);

      // Assert
      expect(actual).toBe("ABC");
      expect(cbArgs).toContain(`called another funcntion with abc`);
      expect(timesCalled).toBe(1);
    });
  });
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
