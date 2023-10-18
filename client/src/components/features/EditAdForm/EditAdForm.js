import { editAd, getAdsById } from '../../../redux/adsRedux';
import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";

const EditPostForm = () => {
    console.log('YEEYYY');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    const pageData = useSelector(state => getAdsById(state, id));
    console.log(pageData);

    const handleSubmit = ad => {
        dispatch(editAd({...ad, id}));
        navigate('/')
    }
    if (!pageData) return <Navigate to="/" />
    else return (
    <PostForm  
        action={handleSubmit} 
        actionText='Save Edits'
        {...pageData} 
        />
    )
}

export default EditPostForm;