import { Routes, Route } from 'react-router-dom';

// import routes
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/HomePage/HomePage.js';
import AddAdPage from './components/pages/AddAdPage/AddAdPage.js';
import EditAdPage from './components/pages/EditAdPage/EditAdPage.js';
import LoginPage from './components/pages/LoginPage/LoginPage.js';
import SearchPhrasePage from './components/pages/SearchPhrasePage/SearcgPhrasePage.js';
import SingleAdPage from './components/pages/SingleAdPage/SingleAdPage.js';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import RegisterPage from './components/pages/RegisterPage/RegisterPage.js';
import { logIn } from './redux/userRedux.js';
import { useDispatch} from "react-redux";
import Logout from './components/pages/Logout/Logout.js';

const App = () => {

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ad/add" element={<AddAdPage />} />
          <Route path="/ad/edit/:id" element={<EditAdPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={< Logout/>} />
          <Route path="/search/:searchPhrase" element={<SearchPhrasePage />} />
          <Route path="/page/:id" element={<SingleAdPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
    )
};

export default App;
