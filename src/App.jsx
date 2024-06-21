import Header from "./compo/Header";
import Home from "./compo/Home";
import Project from "./compo/Project";
import ETC from "./compo/ETC";
import All from "./compo/All";
import About from "./compo/About";
import Footer from "./compo/Footer";
import NotFound from "./compo/NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./scss/base/reset.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/All/*" element={<All />} />
          <Route path="/Project/*" element={<Project />} />
          <Route path="/ETC/*" element={<ETC />} />
          <Route path="/About/*" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
