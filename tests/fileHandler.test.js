const fs = require("fs");
const { readData, writeData } = require("../utils/fileHandler");

test("should read and write student data", () => {
  const sample = [{ id: 1, name: "Test", age: 20, course: "CSE" }];
  writeData(sample);

  const result = readData();
  expect(result).toEqual(sample);
});
