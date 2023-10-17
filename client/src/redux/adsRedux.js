// selector


//action
const createdActionName = (actionName) => `app/ads/${actionName}`;
//const LOG_IN = createdActionName('LOG_IN');


// action creators
/*
export const logIn = payload => ({
    type: LOG_IN,
    payload
})
*/

const adsReduces = (statePart = null, action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default adsReduces;