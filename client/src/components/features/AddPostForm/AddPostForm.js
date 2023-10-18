import { addAd } from '../../../redux/adsRedux';
import PostForm from '../PostForm/PostForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { API_URL } from '../../../config';
import { Alert, Spinner } from "react-bootstrap";

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = ad => {
        console.log('AD DPOST FORM')
        console.log(ad)
        const fd = new FormData()
        fd.append('title', ad.title);
        fd.append('text', ad.text)
        fd.append('published', ad.published)
        fd.append('photo', ad.photo)
        fd.append('price', ad.price)
        fd.append('location', ad.location)
        fd.append('seller', 'seller')

        const options = {
        method: 'POST',
        body: fd
        }
        fetch(`${API_URL}/api/ads`, options)
        .then(res => {
            if (res.status === 201) {
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
            setStatus('serverError')
        })
        dispatch(addAd(ad));
        navigate('/')
    }

    return (
    <PostForm action={handleSubmit} actionText='Add Ad'> 
    </PostForm>
    )
}

export default AddPostForm;