import build from "../api/app";

describe("GIVEN app is running", () => {
  describe("request the '/health' route", () => {
    it("should return status code 200", async () => {
      // arrange
      const app = build({});
      const expectedStatusCode = 200;
      const testOptions = {
        method: "GET",
        url: "/health",
      };

      // act
      const response = await app.inject(testOptions);

      // assert
      expect(response.statusCode).toBe(expectedStatusCode);

      app.close();
    });
  });
});
