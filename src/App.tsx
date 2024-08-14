// App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dots } from './Dots';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
// import Login from './Login';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import {Data} from './pages/Data'
// import Data from './Data';
import {OTP} from './pages/otp';
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
        <Route path="/otp" element={<OTP />} />
        {/* <Route path="/loader" element={<Loader />} />
        <Route path="/popup" element={<Popup />} /> */}
      </Routes>
      <Dots />
    </Router>
  );
};

export default App;
