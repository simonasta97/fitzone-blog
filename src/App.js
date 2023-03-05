import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import Coaches from './components/Coaches';
import Contact from './components/Contact';
import Loading from './components/Loading';
import ScrollUp from './components/ScrollUp';


function App() {
  return (
    <>
        <Loading />

        <Navigation />

        <Header />

        <About />

        <Fitness />

        <Nutrition />

        <Coaches />

        <Contact />

        <ScrollUp />
    </>
  );
}

export default App;
