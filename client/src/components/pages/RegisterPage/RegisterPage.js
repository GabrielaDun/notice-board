import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
//import styles from './RegisterPage.module.scss'
import { API_URL } from '../../../config';
import { useState } from 'react';

import { Form } from "react-bootstrap";


const RegisterPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const fd = new FormData()
    fd.append('login', login);
    fd.append('password', password)
    fd.append('phone', phone)
    fd.append('avatar', avatar)

    const options = {
      method: 'POST',
      body: fd
    }
    fetch(`${API_URL}auth/register`, options)
  }
    return (
      <div >
      <PageTitle>Sing Up</PageTitle>
          <Form className="col-12 col-sm-6 mx-auto" onSubmit={handleSubmit}>
          <PageTitle>Sing Up</PageTitle>
            <Form.Group className="mb-3" controlId="formLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder="Enter login" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Avatar">
              <Form.Label>Avatar</Form.Label>
              <Form.Control type="file" onChange={e => setAvatar(e.target.files[0])} />
            </Form.Group>

            <Button>Submit</Button>

          </Form>
      </div>
    )
    };
  
  export default RegisterPage; 