export const checkIsPalindrome = expression => {

    // --- CHECK IF NOT NULL OR UNDEFINED ---
    if(!expression) return false;

    // --- CHECK IF LENGTH > 0 ---
    if(!expression.trim().length) return false;

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