
import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import { API_URL } from '../../../config';
import { useState } from 'react';
import { Form, Alert, Spinner } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/userRedux'



const LoginPage = () => {
const [login, setLogin] = useState('');
const [password, setPassword] = useState('');
const [status, setStatus] = useState(null) // "loading", "success", "serverError", "clientError"
const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // if we want to use JSON we need to
    },
    body: JSON.stringify({ login, password }) // We can use this format becuase we are sending only password and login
  }
  setStatus('loading');
  fetch(`${API_URL}/auth/login`, options)
    .then( res => {
      if (res.status === 200) {
        setStatus('success');
        dispatch(logIn({ login }));
      } else if (res.status === 400 ) {
        setStatus('clientError');
      }
      else {
        setStatus('serverError');
      }
    })
    .catch(err => {
      setStatus('serverError')
    })
}
  return (
    <div >
        <Form className="col-12 col-sm-6 mx-auto" onSubmit={handleSubmit}>
        <PageTitle>Sing In</PageTitle>
        {status === "success" && (
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been successfully logged in! </p>
          </Alert>
        )}
        {status === "serverError" && (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong...</Alert.Heading>
            <p>Unexpected error.. Try again!</p>
          </Alert>
        )}
        {status === "clientError" && (
          <Alert variant="danger">
            <Alert.Heading>Incorrect data</Alert.Heading>
            <p>Login or password are incorrect...</p>
          </Alert>
        )}
        {status === "loading" && (
          <Spinner animation="border" role="status" className="block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
          <Form.Group className="mb-3" controlId="formLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder="Enter login" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
          </Form.Group>
          <Button>Submit</Button>

        </Form>
    </div>
  )
  };
  
  export default LoginPage; 