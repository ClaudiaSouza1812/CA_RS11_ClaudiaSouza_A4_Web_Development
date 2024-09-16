
import { describe, it, test, expect, vitest } from "vitest";
import { checkLeapYear } from "../Demonstrations/test1.mjs";

// describe
// it
// test
// expect

// test suite
describe("test if the function checkLeapYear works", () => {
    // we can use "it()" or "test()"
    it("should return true when passing a leap year", () => {
        // Arrange
        let year = 2024;
        // Act
        let result = checkLeapYear(year);
        // Assert
        // toBe its a matcher
        // expect(result).toBe(true);
        expect(result).toBe(true);
    })
    it("should return false when a not leap year is passed", () => {
        // Arrange
        let year = 500;

        // Act
        let result = checkLeapYear(year);

        // Assert
        // toBe its a matcher
        expect(result).toBe(false);
    })
    it("should return false when passing a year which remainder when divided by 4 is not 0", () => {
        expect(checkLeapYear(2022)).toBeFalsy();
    })
    it("should return false when passing a year which is multiple of 4, is divided by 100, but is not divided by 400", () => {
        expect(checkLeapYear(1800)).toBeFalsy();
    })
    it("should return true when passing a year which is multiple of 4, is divided by 100, but is divided by 400", () => {
        expect(checkLeapYear(2000)).toBeTruthy();
    })
})