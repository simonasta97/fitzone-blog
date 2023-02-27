import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Service from './components/Service';
import Coaches from './components/Coaches';
import Contact from './components/Contact';


function App() {
  return (
    <div>
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="object" id="object_one"></div>
                    <div className="object" id="object_two"></div>
                    <div className="object" id="object_three"></div>
                    <div className="object" id="object_four"></div>
                    <div className="object" id="object_five"></div>
                    <div className="object" id="object_six"></div>
                    <div className="object" id="object_seven"></div>
                    <div className="object" id="object_eight"></div>
                    <div className="object" id="object_big"></div>
                </div>
            </div>
        </div>

        <Navigation />

        <Header />
        <About />

        <Features />

        <Service />

        <Coaches />

        <Contact />



        <div className="scrollup">
            <a href="#"><i className="fa fa-chevron-up"></i></a>
        </div>
    </div>
  );
}

export default App;
