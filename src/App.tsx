// App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dots } from './Dots';
import { Slide1 } from './pages/Slide1';
import { Slide2 } from './pages/Slide2';
// import Login from './Login';
import { Data } from './pages/data';
import { Login } from './pages/login';
import { Main } from './pages/main';
// import Data from './Data';
import { Otp } from './pages/otp';
// import Loader from './Loader';
// import Popup from './Popup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/data" element={<Data />} />
        <Route path="/otp" element={<Otp />} />
        {/* <Route path="/loader" element={<Loader />} />
        <Route path="/popup" element={<Popup />} /> */}
      </Routes>
      <Dots />
    </Router>
  );
};

export default App;
