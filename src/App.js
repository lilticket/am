import './styles/Main.css'


import Home from './pages/Home';


import './fonts/Bold_Italic.otf';
import './fonts/Bold.otf';
import './fonts/DemiBold_Italic.otf';
import './fonts/DemiBold.otf';
import './fonts/ExtraBold_Italic.otf';
import './fonts/ExtraBold.otf';
import './fonts/ExtraLight_Italic.otf';
import './fonts/ExtraLight.otf';
import './fonts/Italic.otf';
import './fonts/Light.otf';
import './fonts/Medium_Italic.otf';
import './fonts/Medium.otf';
import './fonts/Regular.otf';
import Contact from './pages/Contact';
import Photography from './pages/Photography';
import Developer from './pages/Developer';
import Footer from './pages/Footer';



function App() {
  return (
    <div>
      <img src={require("./collections/_UNI1796.JPG")} className='background_img' />
      <Home />
      <Photography />
      <Developer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
