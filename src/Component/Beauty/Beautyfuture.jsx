import "./Beautyfuture.css";
import { 
    Container,
    Row,
    Col
  } from "react-bootstrap";
const Beautyfuture = () =>{
    const design = (
        <>
           <Container>
            <div className="beauty-header">
                <h1 className="mt-3">Beauty & Care</h1>
                <Row className="revers mb-4 mt-3">
                    <Col md>
                        <p className="beautycare"> Skin care: As people age, their skin texture changes 
                            and they may experience a number of skincare concerns. 
                            Here are some tips.
                            <br /> 
                            Sun protection: Wear sunscreen every day, seek shade between 10 AM and 2 PM,
                             and wear a wide-brimmed hat, long sleeves, and pants. 
                            <br /> 
                            Online shopping for girls beauty & cream in India at the best prices. Buy the latest 
                            trendy girls wear online with cream. ✓Cash on Delivery, ✓Latest Designs, 
                            ✓Pan India shipping..
                            <br />
                            Microneedling: Also called dermarolling, this treatment can increase collagen 
                            and elastin production, improve scars and fine wrinkles, and reduce 
                            hyperpigmentation.
                             <br />
                            Hair care: There are many options to enhance hair, including highlighting, trying
                            a new style, or fixing thinning hair.Sun protection: Wear sunscreen every day, 
                            seek shade between 10 AM and 2 PM,and wear a wide-brimmed hat,
                            long sleeves, and pants. 
                             <br />
                             Stopping smoking: Tobacco smoke contains toxins that can lead to 
                             smoker's face.
                            </p>
                       </Col>
                    <Col md>
                       <img src="beauty-c.jpg" className="rounded" width="100%" alt="" />
                    </Col>
                </Row>
            </div>
          </Container>
        </>
    );
    return design;
}
export default Beautyfuture;