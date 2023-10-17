//import { logOut } from '../../../redux/userRedux';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logOut } from '../../../redux/userRedux';


const Logout = () => {

const dispatch = useDispatch();

useEffect(() => {
    const options = {
        method: 'DELETE',
        };
    
        fetch(`${API_URL}/auth/logout`, options)
        .then(() => {
            dispatch(logOut());
        })
    }, [dispatch]);
    
    return null
};

    
  
  export default Logout; 