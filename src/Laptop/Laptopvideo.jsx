import "./Laptopvideo.css";
import { 
    Container
 } from "react-bootstrap";
const Laptopvideo = () =>{
    const design = (
        <>
          <div className="laptop-video">
          <Container>
             <h1 className="mb-4 mt-5 fw-bold laptp">Laptop Ads..</h1>
              <video className="rounded" width="100%" autoPlay muted loop>
                   <source src="video-ads.mp4"></source>
              </video>
          </Container>
           </div>
        </>
    );
    return design;
}
export default Laptopvideo;