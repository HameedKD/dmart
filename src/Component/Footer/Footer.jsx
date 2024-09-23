import "./Footer.css";
import { 
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

  const Footer = () =>{
    const openLinkedIn = () =>{
    window.open("http://linkedin.com/in/abdul-hameed-11645930a", "_black");
  };
  const openWhatsApp = () => {
    const phoneNumber = "8934867146"; 
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };  
  const openGitHub = () => {
    window.open("https://github.com/HameedKD", "_blank");
  }; 

    const design = (
        <>
         <div className="footer-box">
          <Container>
          <h1 className="text-white mb-3 ">D-Mart.. </h1> 
            <Row className=" mt-5 text-white">
             {/*  col-1 */}
                  <Col>
                  <h4>D-Mart.</h4>
                     <p>Address : Shaheen Bagh Delhi . <br />
                        Pin Code : 110025
                      </p>
                     <span>Phone : 8934867146</span>
                     <p>Email : hameedkd143@gmail.com</p>
                      <Link>
                      <button onClick={openLinkedIn} className="icon-box rounded">
                        <i className="fa fa-linkedin"></i>
                      </button>
                      </Link>
                      <Link>
                      <button onClick={openWhatsApp} className="icon-box rounded text-success">
                        <i className="fa fa-whatsapp"></i>
                      </button>
                      </Link>
                      <Link>
                          <button onClick={openGitHub} className="icon-box rounded text-danger">
                          <i class="fa fa-github"></i>
                          </button>
                      </Link>
                  </Col>
             {/* col-2 */}
                 <Col md>
                  <ul className="rever mb-5">
                     <h4 className="useful">Useful Links</h4>
                      <Link to="/">
                      <li className="mb-1">
                        Home
                     </li>
                      </Link>

                      <Link to="/laptop">
                      <li className="mb-1">
                        <a>Laptop</a>
                     </li>
                      </Link>

                      <Link to="/smartwatch">
                      <li className="mb-1">
                        <a>Smart Watch</a>
                     </li>
                      </Link>

                      <Link to="/women">
                      <li className="mb-1">
                        <a>Woman Clothes</a>
                     </li>
                      </Link>

                      <Link to="/kid">
                      <li className="mb-1">
                        <a>Kids Toy</a>
                     </li>
                      </Link>

                      <Link to="beauty">
                      <li className="mb-1">
                        <a>Beauty & Care</a>
                     </li>
                      </Link>

                   </ul>
                  </Col>
              {/* col-3 */} 
                  <Col className="Suppliers mb-5">
                  <h4>Suppliers</h4>
                    <p>We at DMart believe in joining hands with the 
                      right partners in order to provide high-quality yet
                     affordable products to our customers.</p>
                    <h4>Designed By :</h4>
                    <h4 className="text-primary fw-bold designby animate__animated animate__zoomIn animate__infinite">Er Abdul Hameed</h4>
                  </Col>
            </Row>
            </Container>
         </div>
        </>
    );
    return design;
}
export default Footer;