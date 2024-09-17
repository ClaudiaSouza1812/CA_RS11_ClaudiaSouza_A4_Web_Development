import { describe, it, test, expect } from 'vitest';
import { isLeapYear } from '../test1.mjs';

// describe, it, test, expect

// test suite
describe("testar se a função isLeapYear funciona", () => {
    // em alternativa a it podemos utilizar test
    it('should return true when passing a leap year', () => {
        // Arrange
        let year = 2024;

        // Act
        let result = isLeapYear(2024);

        // Assert
        // toBe é um matcher
        // expect(result).toBe(true);
        expect(result).toBeTruthy();
    })
    it('should return false when passing a year which is not a leap year', () => {
        // Arrange
        let year = 2023;

        // Act
        let result = isLeapYear(2023);

        // Assert
        // toBe é um matcher
        // expect(result).toBe(false);
        expect(result).toBeFalsy();
    })
    it('should return false when passing a year which remainder when divided by 4 is not 0', () => {
        expect(isLeapYear(2022)).toBeFalsy();
    })
    it('should return false when passing a year which is a multiple of 4, is divided by 100, but is not divided by 400', () => {
        expect(isLeapYear(1800)).toBeFalsy();
    })
    it('should return true when passing a year which is a multiple of 4, is divided by 100, and is divided by 400', () => {
        expect(isLeapYear(2000)).toBeTruthy();
    })
})