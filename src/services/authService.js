const AUTH_TOKEN = 'AUTH_TOKEN';
const FAKE_DB_USER = {
    username: 'admin',
    password: 'admin'
};

/*
    User authentication implemented on frontend is highly not secure.
    Everything that we write is send to the browser. Because of that user can see,
    or even worst - interfere with the app security.
    We should keep passwords in an encrypted form - but it's impossible to store any secrets without backed service.
    User can open browser devtools and change memory variables stored in localStorage, sessionStorage and cookies.

    In my opinion, we should use frontend + backend with the JWT.
    Username and hash of the password is stored inside of the database and on auth request
    we check if the credentials are valid. If everything is ok, we generate the token and send it back to the user.
    To gain access for the backend C.R.U.D. operations we should include JWT in HTTP headers.
    Even if client change properties of the token like 'user_role' JWT signature will not be valid.
    API should always check the token and send HTTP 401 or 403 errors if needed.
 */

// --- LOGIN / LOGOUT ---
const logInUser = () => localStorage.setItem(AUTH_TOKEN, 'token');
export const isUserLogged = () => localStorage.getItem(AUTH_TOKEN) === 'token';


// --- AUTHENTICATE USER ---
export const authenticate = (username, password) => {

    if (username === FAKE_DB_USER.username && password === FAKE_DB_USER.password) {
        logInUser();
        return true;
    }

    return false;
};
