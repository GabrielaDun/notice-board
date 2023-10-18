import { addAd } from '../../../redux/adsRedux';
import PostForm from '../PostForm/PostForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = ad => {
        dispatch(addAd(ad));
        navigate('/')
    }

    return (
    <PostForm action={handleSubmit} actionText='Add Ad'> 
    </PostForm>
    )
}

export default AddPostForm;