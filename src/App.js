import './App.css';
import { Routes, Route} from 'react-router';
import Navigation from './components/Navigation';
import Coaches from './components/Coaches';
import Loading from './components/Loading';
import ScrollUp from './components/ScrollUp';
import Home from './components/Home/Home'
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import Login  from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register';
import PrivateGuard from './components/common/PrivateGuard';
import PrivateRoute from './components/common/PrivateRoute';
import { Logout } from './components/Logout/Logout';
import Blog from './components/Blog/Blog';
import { PostProvider } from './contexts/PostContext';
import { PostDetails } from './components/Details/PostDetails';
import { PostEdit } from './components/Edit/PostEdit';
import { PostCreate } from './components/Create/PostCreate';


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
                        <Route path="/details/:postId/edit" element={<PostEdit />} />
                    </Route>
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/coaches" element={<Coaches />} />
                    <Route path="/create" element={(
                        <PrivateRoute>
                            <PostCreate />
                        </PrivateRoute>
                    )} />
                    <Route path="/details/:postId" element={<PostDetails />} />
                </Routes>
                <Footer />
                <ScrollUp />
            </AuthProvider>
          </PostProvider>
    </>
  );
}

export default App;
