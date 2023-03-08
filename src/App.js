import './App.css';
import { Routes, Route} from 'react-router';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import Coaches from './components/Coaches';
import Loading from './components/Loading';
import ScrollUp from './components/ScrollUp';
import Home from './components/Home';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import Login  from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register';


function App() {
  return (
    <>
        <AuthProvider>
            <Loading />

            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterWithAuth/>} />
                <Route path="/features" element={<Fitness />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/coaches" element={<Coaches />} />
            </Routes>

            <Footer />
            <ScrollUp />
        </AuthProvider>
        
    </>
  );
}

export default App;
