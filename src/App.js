import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";

import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <div className="header-bg">
        <Navbar />
        <Header />
      </div>
      <Features data-aos="fade-up" />
      <Download />
      <Faq />

      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
