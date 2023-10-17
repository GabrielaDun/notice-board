// selector


//action
const createdActionName = (actionName) => `app/users/${actionName}`;
const LOG_IN = createdActionName('LOG_IN');


// action creators

export const logIn = payload => ({ type: LOG_IN, payload })

const userReduces = (statePart = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload
        default:
            return statePart;
    }
};

export default userReduces;