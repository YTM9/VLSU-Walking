const login = require("./login");

describe("Login Function Tests", () => {

    test("Should return true for correct credentials", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Should return false for incorrect username", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Should return false for incorrect password", () => {
        expect(login("admin", "password")).toBe(false);
    });

    test("Should return false for incorrect username and password", () => {
        expect(login("guest", "abc")).toBe(false);
    });

});
