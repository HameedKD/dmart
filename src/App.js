import Header from "./Component/Header/Header";
import Homepage from "./Component/Homepage/Homepage";
import Footer from "./Component/Footer/Footer";
import Laptop from "./Laptop/Laptop";
import Swatch from "./Component/Swatch/Swatch";
import Woman from "./Component/Woman/Woman";
import Kids from "./Component/Kidstoy/Kids";
import Beauty from "./Component/Beauty/Beauty";
import Cart from "./Component/Cart/Cart";
import ScrollToTop from "./Component/scrolltop";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";

import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
const App = () =>{
  const design = (
    <>
      <Router>
        <ScrollToTop />
         <Header />
            <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/laptop" element={<Laptop />} />
                  <Route path="/smartwatch" element={<Swatch />} />
                  <Route path="/women" element={<Woman />} />
                  <Route path="/kid" element={<Kids />} />
                  <Route path="/beauty" element={<Beauty />} />
                  <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
      </Router>
    </>
  );
  return design;
}
export default App;