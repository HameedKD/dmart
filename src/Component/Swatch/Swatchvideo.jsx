import "./Swatchvideo.css";
import { Container } from "react-bootstrap";
const Swatchvideo = () =>{
    const design = (
        <>
          <div className="watch-video">
             <Container>
                 <h1 className="mb-4 mt-5 fw-bold s-watch">Smart Watch Ads...</h1>
                  <video className="rounded" width="100%" autoPlay muted loop>
                      <source src="watch-video-ads.mp4"></source>
                  </video>
             </Container>
          </div>
        </>
    );
    return design;
}
export default Swatchvideo;