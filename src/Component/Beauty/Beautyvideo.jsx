import "./Beautyvideo.css";
import { Container } from "react-bootstrap";
const Beautyvideo = () =>{
    const design = (
        <>
           <div className="beauty-video">
             <Container>
                 <h1 className="mb-4 mt-5 fw-bold beauty-care">Beauty & Care Ads...</h1>
                  <video className="rounded" width="100%" autoPlay muted loop>
                      <source src="b-video.mp4"></source>
                  </video>
             </Container>
          </div>
        </>
    );
    return design;
}

export default Beautyvideo;