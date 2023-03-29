// React, Hooks
import { Routes, Route} from 'react-router';

// Context
import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';
import { ProgramsProvider } from './contexts/ProgramContext';
import { NotificationProvider } from './contexts/NotificationContext';

// CSS
import './App.css';

// Components
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import ScrollUp from './components/ScrollUp';
import Home from './components/Home/Home'
import Footer from './components/Footer';
import Login  from './components/Login/Login';
import { RegisterWithAuth } from './components/Register/Register';
import PrivateGuard from './components/common/PrivateGuard';
import PrivateRoute from './components/common/PrivateRoute';
import { Logout } from './components/Logout/Logout';
import Blog from './components/Blog/Blog';
import { PostDetails } from './components/Details/PostDetails';
import { PostEdit } from './components/Edit/PostEdit';
import { PostCreate } from './components/Create/PostCreate';
import Coaches from './components/Coaches/Coaches';
import Programs from './components/Programs/Programs';
import { ProgramAdd } from './components/Programs/ProgramAdd';
import { ProgramEdit } from './components/Programs/ProgramEdit';
import { NotFound } from './components/NotFound/NotFound';
import Notification from './components/common/Notification/Notification';


function App() {
    return (
        <>
            <PostProvider>
                <AuthProvider>
                    <ProgramsProvider>
                        <NotificationProvider>
                            <Loading />
                            <Navigation />
                            <Notification />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<RegisterWithAuth />} />
                                <Route element={<PrivateGuard />}>
                                    <Route path="/logout" element={<Logout />} />
                                    <Route path="/details/:postId/edit" element={<PostEdit />} />
                                    <Route path="/programs/:programId/edit" element={<ProgramEdit />} />
                                </Route>
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/programs" element={<Programs/>} />
                                <Route path="/coaches" element={<Coaches />} />
                                <Route path="/create" element={(
                                    <PrivateRoute>
                                        <PostCreate />
                                    </PrivateRoute>
                                )} />
                                <Route path="/addProgram" element={(
                                    <PrivateRoute>
                                        <ProgramAdd />
                                    </PrivateRoute>
                                )} />
                                <Route path="/details/:postId" element={<PostDetails />} />
                                <Route path="*" element={<NotFound />}></Route>
                            </Routes>
                            <Footer />
                            <ScrollUp />
                            </NotificationProvider>
                    </ProgramsProvider>
                </AuthProvider>
            </PostProvider>
        </>
    );
}

export default App;
