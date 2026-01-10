import { HashRouter, Routes, Route } from "react-router-dom";

//import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <Experience />
              <Tech />
              <div id="work">
                <Works />
              </div>
              {/* <Feedbacks /> */}
              <div className='relative z-0' id="contact">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
