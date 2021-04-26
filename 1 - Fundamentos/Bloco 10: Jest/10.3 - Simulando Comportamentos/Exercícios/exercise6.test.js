const fetchDog = require("./exercise6");
jest.mock('./exercise6')
describe("exercise 6", () => {

    afterEach(() => fetchDog.mockReset());
  test("success", async () => {
    fetchDog.mockResolvedValue("request sucess");

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    expect(fetchDog()).resolves.toBe("request sucess");
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test("fail", async () => {
    fetchDog.mockRejectedValue("request failed");

    expect(fetchDog).toHaveBeenCalledTimes(0);
    expect(fetchDog()).rejects.toMatch("request failed");
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });
});

// Sources: https://app.betrybe.com/course/fundamentals/js-unit-tests/jest-mocks-solutions
// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c