import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';

import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CreationPage from './pages/CreationPage';
import CreationPageView from './pages/CreationPageView';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PublishPage from './pages/PublishPage';

import CreationAdmin from './pages/CreationAdmin';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return <div>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/publish" element={<PublishPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/creation" element={<CreationPage />} />
        <Route path="/creation/:id" element={<CreationPageView />} />
        <Route path="/admin" element={<CreationAdmin />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    <FooterComponent/>
  </div>;
}

export default App;
