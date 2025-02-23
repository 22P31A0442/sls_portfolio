import Certifications from "./assets/components/portfolio/Certificarions";
import HomePage from "./assets/components/portfolio/Home_Page";
import Homecv from "./assets/components/portfolio/Home_cv";
import About from "./assets/components/portfolio/About";
import Education from "./assets/components/portfolio/Education";
import Projectt from "./assets/components/portfolio/Projectt";
import ContactForm from "./assets/components/portfolio/contact";
import Footerr from "./assets/components/portfolio/footer";
function App() {
  return (
    <div>
      <HomePage/>
      <Homecv/>
      <About/>
      <Education/>
      <Certifications/>
      <Projectt/>
      <ContactForm/>
      <Footerr/>
    </div>
  );
}

export default App;
