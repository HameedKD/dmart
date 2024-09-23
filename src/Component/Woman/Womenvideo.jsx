import "./Womenvideo.css";
import { Container } from "react-bootstrap";

const Womenvideo = () =>{
    const design = (
        <>
          <div className="clothes-video">
             <Container>
                 <h1 className="mb-4 mt-4 fw-bold women-clothe">Women Clothes Ads ..</h1>
                   <video className="rounded" width="100%" autoPlay muted loop>
                      <source src="clothes-ads.mp4"></source>
                   </video>
             </Container>
          </div>
        </>
    );
    return design;
}
export default Womenvideo;