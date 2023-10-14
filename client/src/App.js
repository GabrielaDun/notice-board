import { Routes, Route } from 'react-router-dom';

// import routes
import HomePage from './components/pages/Home/HomePage.js';
import AddAdPage from './components/pages/AddAdPage/AddAdPage.js';
import EditAdPage from './components/pages/EditAdPage/EditAdPage.js';
import LoginPage from './components/pages/LoginPage/LoginPage.js';
import { Register } from '../../controllers/auths.controller.js';
import SearchPhrasePage from './components/pages/SearchPhrasePage/SearcgPhrasePage.js';
import SingleAdPage from './components/pages/SingleAdPage/SingleAdPage.js';
import { Container } from 'react-bootstrap';

const App = () => (
  <main>
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-ad" element={<AddAdPage />} />
        <Route path="/edit-ad" element={<EditAdPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchPhrasePage />} />
        <Route path="/page/:id" element={<SingleAdPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  </main>
);

export default App;
