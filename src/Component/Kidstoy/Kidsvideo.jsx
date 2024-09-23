import { Container } from "react-bootstrap";
import "./Kidsvideo.css";
const Kidsvideo = () =>{
    const design = (
        <>
          <div className="toy-video">
          <Container>
             <h1 className="mb-4 mt-4 fw-bold toy-ads">Kids Toy Ads..</h1>
              <video className="rounded" width="100%" autoPlay muted loop>
                   <source src="toy-videp-ads.mp4"></source>
              </video>
          </Container>
           </div>
        </>
    );
    return design;
}
export default Kidsvideo;