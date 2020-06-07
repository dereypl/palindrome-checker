import initialState from '../../utils/init_state'

// --- ACTION TYPES ---
export const PALINDROME_LIST_ADD = 'PALINDROME_LIST_ADD';

// --- REDUCER ---
const palindromesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PALINDROME_LIST_ADD:
            return {
                ...state,
                palindromes: [payload, ...state.palindromes]
            };
        default:
            return state;
    }
};

export default palindromesReducer;