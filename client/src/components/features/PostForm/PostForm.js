import React, { useState } from "react";
import styles from './PostForm.module.scss';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Button from "../../common/Button/Button";

const PostForm = ({action, actionText, ...props}) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [text, setText] = useState(props.text ||'');
    const [published, setPublished] = useState(props.published ||'');
    const [price, setPrice] = useState (props.price ||'');
    const [location, setLocation] = useState (props.location ||'');
    const [photo, setPhoto] = useState (null);
    const seller = 'unbiv';


    const handleSubmit = () => {
        console.log('POSTFORM')
        action({title, text, published, photo, price, location, seller})
    }

    return (
    <form className={styles.root} onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 10, maxLength: 50 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder="Enter title"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field requires more than 10 characters and less than 50.</small>}
        </Form.Group >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
                {...register("price")}
                value={price} 
                onChange ={e => setPrice(e.target.value)} 
                type="number" 
                placeholder="Enter price" 
            />
            {errors.price&&<small className="d-block form-text text-danger mt-2">Price can't be empty.</small>}
        <Form.Group className="mb-3" controlId="Avatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" onChange={e => setPhoto(e.target.files[0])} />
        </Form.Group>
        </Form.Group>
            <p>Published</p>
            <DatePicker
                value={published} 
                selected={published}
                onChange={(date) => setPublished(date)} 
                type="date" 
                className="date" 
            />
        <Form.Group>
        <Form.Label>Location</Form.Label>
          <Form.Control
            {...register("location")}
            value={location}
            onChange={e => setLocation(e.target.value)}
            type="text" placeholder="Enter title"
          />
          {errors.location && <small className="d-block form-text text-danger mt-2">Location can't be empty</small>}
            <Form.Label>Description:</Form.Label>
            <Form.Control
                {...register("description", {required: true, minLength: 20, maxLength: 1000})}
                value={text} 
                onChange={e => setText(e.target.value)}
                className="textarea" 
                placeholder=" Leave a short description here"
                rows="1" 
            />
            {errors.text&&<small className="d-block form-text text-danger mt-2">This field requires at least 20 characters and maximum 1000.</small>}
        </Form.Group>
        <Button>{actionText}</Button> 
    </form>
    )
}


export default PostForm;