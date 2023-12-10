import { describe, it, expect } from '@jest/globals';
import StringUtils from './string-utils';

describe('StringUtils', () => {
    it('isEmpty returns true with null or undefined', () => {
        // Arrage
        const maybeString = undefined;
        const maybeString2 = null;

        // Assert
        expect(StringUtils.isEmpty(maybeString)).toBe(true);
        expect(StringUtils.isEmpty(maybeString2)).toBe(true);
    });

    it('isEmpty returns true with space only', () => {
        // Arrage
        const spaceOnly = '   ';
        
        // Assert
        expect(StringUtils.isEmpty(spaceOnly));
    });

    it('isEmpty returns true with string with only line references', () => {
        // Arrage
        const returnsOnly = `\n\n\n`;

        // Assert
        expect(StringUtils.isEmpty(returnsOnly));
    });

    it('isNotEmpty works properly', () => {
        // Arrange
        const string = 'I am string';

        // Assert
        expect(StringUtils.isNotEmpty(string)).toBe(true);
    });
});