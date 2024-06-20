import Header from "./compo/Header";
import Home from "./compo/Home";
import Page1 from "./compo/Page1";
import Page2 from "./compo/Page2";
import Page3 from "./compo/Page3";
import Page4 from "./compo/Page4";
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
          <Route path="/Page1/*" element={<Page1 />} />
          <Route path="/Page2/*" element={<Page2 />} />
          <Route path="/Page3/*" element={<Page3 />} />
          <Route path="/Page4/*" element={<Page4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
