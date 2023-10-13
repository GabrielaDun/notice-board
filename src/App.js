import { Routes, Route } from 'react-router-dom';

// import routes
import Home from './components/pages/Home/Home.js';

const App = () => (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
);

export default App;
