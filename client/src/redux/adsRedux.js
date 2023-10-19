import { API_URL } from '../config';
import shortid from 'shortid';

// selector
export const getAllOffers = state => state.ads;
export const getAdsById = ({ ads }, adId) => ads.find(ad => ad._id === adId);

//action
const createActionName = (actionName) => `api/ads/${actionName}`;
const DELETE_AD = createActionName('DELETE_AD')
const ADD_AD = createActionName('ADD_AD')
const EDIT_AD = createActionName('EDIT_AD')
const UPLOAD_AD = createActionName('UPLOAD_AD')

// action creators
export const deleteAd = payload => ({type: DELETE_AD, payload});
export const addAd = payload => ({type: ADD_AD, payload});
export const editAd = payload => ({type: EDIT_AD, payload});
export const uploadAd = payload => ({type: UPLOAD_AD, payload});

export const fetchAd = (dispatch) => {
  fetch(`${API_URL}/api/ads`)
  .then(res => res.json())
  .then(ads => dispatch(uploadAd(ads)))
};

const adsReduces = (statePart = null, action) => {
    switch (action.type) {
        case DELETE_AD:
            return [...statePart.filter(posts => posts.id !== action.payload)];
        case ADD_AD:
            return [...statePart,{ ...action.payload, id: shortid() }];
        case EDIT_AD:
            return statePart.map(post => post._id === action.payload.id ? {...post, ...action.payload }:post )
        case UPLOAD_AD:
            return [...action.payload]
        default:
            return statePart;
    }
};

export default adsReduces;