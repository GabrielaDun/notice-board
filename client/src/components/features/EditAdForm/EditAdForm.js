import { editAd, getAdsById } from '../../../redux/adsRedux';
import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { API_URL } from '../../../config';

const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    const pageData = useSelector(state => getAdsById(state, id));
    console.log(pageData);

    const handleSubmit = ad => {
        const fd = new FormData()
        fd.append('title', ad.title);
        fd.append('text', ad.text)
        fd.append('published', ad.published)
        fd.append('photo', ad.photo)
        fd.append('price', ad.price)
        fd.append('location', ad.location)
        fd.append('seller', 'seller')

        const options = {
        method: 'PUT',
        body: fd
        }
        fetch(`${API_URL}/api/ads/${id}`, options)
        .then(res => {
            if (res.status === 200) {
                dispatch(editAd({...ad, id}));
                navigate('/')
                console.log('Success')
            } else if (res.status === 400) {
                console.log('Status 400')
            } else if (res.status === 409 ){
                console.log('Status 409')
            }
            else {
                console.log('Status 500')
            }
        })
        .catch(err => {
            console.log('Server Error', err)
        })
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