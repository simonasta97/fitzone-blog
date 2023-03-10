import './App.css';
import { Routes, Route} from 'react-router';
import Navigation from './components/Navigation';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import Coaches from './components/Coaches';
import Loading from './components/Loading';
import ScrollUp from './components/ScrollUp';
import Home from './components/Home/Home'
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import Login  from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register';
import PrivateGuard from './components/common/PrivateGuard';
import { Logout } from './components/Logout/Logout';
import { PostProvider } from './contexts/PostContext';


function App() {
  return (
    <>
        <PostProvider>
            <AuthProvider>
                <Loading />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterWithAuth/>} />
                    <Route element={<PrivateGuard />}>
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                    <Route path="/features" element={<Fitness />} />
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/coaches" element={<Coaches />} />
                </Routes>
                <Footer />
                <ScrollUp />
            </AuthProvider>
          </PostProvider>
    </>
  );
}

export default App;
