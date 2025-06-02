import { DataBase } from "../../../app/server_app/data/DataBase";
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string;
  name: string;
  color: string;
};
describe("DataBase test suite", () => {
  let sut: DataBase<someTypeWithId>;
  let fakeId = "1234";
  const someTestObject01 = {
    id: "",
    name: "someName",
    color: "blue",
  };
  const someTestObject02 = {
    id: "",
    name: "someOtherName",
    color: "blue",
  };

  beforeEach(() => {
    //arrange - initialice sut before each test
    sut = new DataBase();

    // need to rewrite the generateRandomId implementation, to know its value on a call
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId); //alway return fake ID
  });

  //-------INSERT-----------
  //test Id returned, test if the object was inserted, check how many times the object was inserted
  it("Should return id after insert", async () => {
    const actual = await sut.insert({
      id: "",
    } as any);

    expect(actual).toBe(fakeId);
  });

  //-------Get-----------
  it("Should get element after insert", async () => {
    //arrange
    const id = await sut.insert(someTestObject01);

    //act
    const actual = await sut.getBy("id", id);

    //assert
    expect(actual).toBe(someTestObject01);
  });

  //-------Find by-----------
  it("Should find all elements with the same property", async () => {
    //arrange
    await sut.insert(someTestObject01);
    await sut.insert(someTestObject02);

    const expected = [someTestObject01, someTestObject02];
    //act
    const actual = await sut.findAllBy("color", "blue");

    //assert
    expect(actual).toEqual(expected);
  });

  //-------Update-----------
  it("Should change the color object", async () => {
    //arrange
    const id = await sut.insert(someTestObject01);
    const expectedColor = "red";
    //act
    await sut.update(id, "color", expectedColor);
    const queriedObject = await sut.getBy("id", id);
    const actualColor = queriedObject.color;

    //assert
    expect(actualColor).toBe(expectedColor);
  });

  //-------Delete-----------
  it("Should delete the object", async () => {
    //arrange
    const id = await sut.insert(someTestObject01);

    //act
    await sut.delete(id);
    const actual = await sut.getBy("id", id);

    //assert
    expect(actual).toBeUndefined();
  });

  //-------Get all-----------
  it("Should getAllElements", async () => {
    //arrange
    await sut.insert(someTestObject01);
    await sut.insert(someTestObject02);

    const expected = [someTestObject01, someTestObject02];

    //act
    const actual = await sut.getAllElements();

    //assert
    expect(actual).toEqual(expected);
  });
});
