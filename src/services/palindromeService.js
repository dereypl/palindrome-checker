import {PALINDROME_LIST_ADD} from "../store/reducers/palindromesReducer";

export const checkIsPalindrome = expression => {

    // --- CHECK IF NOT NULL OR UNDEFINED ---
    if (!expression) return false;

    // --- CHECK IF LENGTH > 0 ---
    if (!expression.trim().length) return false;

    // --- REMOVE WHITE SPACES & MAKE CASE INSENSITIVE ---
    expression = expression.toLowerCase().replace(/ /g, '');

    // --- FASTER THAN `str.split('').reverse().join('')` ---
    let length = Math.floor(expression.length / 2);
    for (let i = 0; i < length; i++) {
        if (expression[i] !== expression[expression.length - i - 1])
            return false;
    }

    // --- EVERYTHING OK, IT'S A PALINDROME ---
    return true;
};

export const addToList = (expression) => dispatch => {

    // --- CHECK EXPRESSION AND RETURN BOOLEAN VALUE ---
    let isPalindrome = checkIsPalindrome(expression);

    // --- ADD EXPRESSION TO REDUX PALINDROMES LIST ---
    dispatch({type: PALINDROME_LIST_ADD, payload: {value: expression, isPalindrome}});
};