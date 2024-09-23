import "./Kidscollection.css";
import { Container,Row,Col } from "react-bootstrap";
const Kidscollection = () =>{
    const design = (
        <>
            <Container>
            <div className="kids-collection">
                <h1 className="mt-3">Toy Collection</h1>
                <Row className="revers mb-5 mt-3">
                <Col md>
                       <img src="t-collection.jpg" className="rounded" width="100%" alt="" />
                    </Col>
                    <Col md>
                        <p className="toy-para"> A toy collection is a collection of toys that someone collects 
                            as a hobby or passion. Toy collectors mayto find rare toys, which can bevaluable. 
                            Some factor value of a toy collection include.
                                <br />
                                The global toy market is expected reach $200 billion by 2032, with collectibles 
                                and vintage toys contributing $35 billion <br /> of that growth.
                                <br /> 
                                Writing an essay about your favorite toy can be a fun activity for kids that helps
                                 them improve their language skills, sentence formation, vocabulary, essay 
                                 structure, and creative writing confidence.
                                 <br />
                                 The Toy Collector is a novel by James Gunn about a hospital orderly who steals 
                                 drugs to fund his toy collection habit.market is expected reach $200 billion 
                                 by 2032 .
                                </p>
                    </Col>
                   
                </Row>
            </div>
          </Container>
        </>
    );
    return design;
}
export default Kidscollection;