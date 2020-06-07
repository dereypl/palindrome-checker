import {checkIsPalindrome} from "../services/palindromeService";

/*
    There should be positive test also, but in the guidelines there was 'one unit test'.
    I've decided to test exceptional cases.
 */

describe('checkIsPalindrome function', () => {

    test('should return false on bad input data', () => {
        expect(checkIsPalindrome(null)).toEqual(false);
        expect(checkIsPalindrome(undefined)).toEqual(false);
        expect(checkIsPalindrome("")).toEqual(false);
        expect(checkIsPalindrome("itIsNotPalindrome")).toEqual(false);
    })
});
