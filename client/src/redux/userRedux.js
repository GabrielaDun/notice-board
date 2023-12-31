

// selector
export const checkIfLoggedIn = ({ user }) => user && user.hasOwnProperty('login');
export const takeLoginInfo = ({ user }) => user ? user.login : null;
export const getEditPermit = ({ user}, adsSeller) => user && user.login === adsSeller ? user : null;
//action
const createdActionName = (actionName) => `app/users/${actionName}`;
const LOG_IN = createdActionName('LOG_IN');
const LOG_OUT = createdActionName('LOG_OUT');

// action creators

export const logIn = payload => ({ type: LOG_IN, payload })
export const logOut = payload => ({ type: LOG_OUT, payload })


const userReduces = (statePart = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload
        case LOG_OUT:
            return null;
        default:
            return statePart;
    }
};

export default userReduces;