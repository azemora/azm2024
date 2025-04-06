import styles from "./style";
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, Services, Hero2, Eemails, Hero3, Lgservicos, Business2, CardDeal2, Roadmap, Devmap, Devmap2, Otherprojects, ScientificArticles } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => (
  <div className='bg-gray-200 w-full overflow-hidden'>
    
    {/* Container para a Navbar com o efeito de vinheta */}
    <div className={`${styles.paddingX} ${styles.flexStart} relative navbar-container`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      <div className="navbar-vignette"></div>
    </div>

    {/* Seção Hero */}
    <div className={`bg-custom-image5 bg-no-repeat bg-center ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Seção Business com fundo cinza */}
    <div className={`bg-gray-200 bg-no-repeat bg-cover bg-center ${styles.paddingX} ${styles.flexStart} style={{ marginBottom: '10rem' }}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
      </div>
    </div>

    {/* Outras seções da página */}
    <div className={`bg-gray-200  bg-no-repeat bg-cover bg-center ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Otherprojects />
      </div>
    </div>

    <div className={`bg-gray-200 bg-no-repeat bg-cover bg-center ${styles.paddingX} ${styles.flexStart} style={{ marginBottom: '2rem' }}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal/>
      </div>
    </div>

    <div className={`bg-gray-200 bg-no-repeat bg-center ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ScientificArticles/>
      </div>
    </div>

    <div className={`bg-bgfooter bg-no-repeat bg-center ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

const Servicos = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business2 />
        <Roadmap />
        <div style={{ marginTop: '5rem' }}></div>
        <Footer />
      </div>
    </div>
  </div>
);

const Aboutus = () => (
  <div className='bg-gray-200 w-full overflow-hidden'>
    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexStart} relative navbar-container`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      <div className="navbar-vignette"></div>
    </div>

    <div className={`bg-custom-image6 bg-no-repeat bg-center ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero2/>
      </div>
    </div>

    {/* Content Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Devmap />
        <Devmap2 />
      </div>
    </div>

    {/* Footer Section */}
    <div className={`bg-bgfooter bg-no-repeat bg-center ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);


const App = () => (
  console.log(import.meta.env),
  <BrowserRouter basename={import.meta.env.PROD ? '/azm2024' : '/'}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/timeline" element={<Aboutus />} />
      <Route path="/aboutus" element={<Servicos />} />
    </Routes>
  </BrowserRouter>
);

const globalStyles = `
  .grain-background {
    position: relative;
    overflow: hidden;
  }

  .grain-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.05);
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    opacity: 0.3;
    z-index: 1;
    background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 3px 3px;
  }
`;

export default App;
