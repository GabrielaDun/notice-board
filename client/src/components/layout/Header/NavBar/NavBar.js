import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkIfLoggedIn } from '../../../../redux/userRedux';

const NavBar = () => {
    const isLoggedin = useSelector(checkIfLoggedIn);
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb4 rounded">
            <Container>
                <Navbar.Brand>Notice Board</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link to="/" as={NavLink}>
                            Home
                        </Nav.Link>
                        {!isLoggedin && (
                            <Nav.Link to="/login" as={NavLink}>
                                Log In
                            </Nav.Link>
                        )}
                         {!isLoggedin && (
                            <Nav.Link to="/register" as={NavLink}>
                                Register
                            </Nav.Link>
                        )}
                        {isLoggedin && (
                            <Nav.Link to="/logout" as={NavLink}>
                                Sign Out
                            </Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar; 