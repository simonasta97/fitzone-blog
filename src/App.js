import './App.css';
import { Routes, Route} from 'react-router';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import Coaches from './components/Coaches';
import Contact from './components/Contact';
import Loading from './components/Loading';
import ScrollUp from './components/ScrollUp';
import Home from './components/Home';


function App() {
  return (
    <>
        <Loading />

        <Navigation />

        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Fitness />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/coaches" element={<Coaches />} />
        </Routes>

        <Contact />
        <ScrollUp />
    </>
  );
}

export default App;
