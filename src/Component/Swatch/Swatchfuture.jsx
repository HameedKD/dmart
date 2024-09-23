import "./Swatchfuture.css";
import { Container,Row,Col } from "react-bootstrap";
const Swatchfuture = () =>{
    const design = (
        <>
          <Container>
            <div className="watch-future">
                <h1 className="mt-3">Watch Future</h1>
                <Row className="revers mb-4 mt-3">
                <Col md>
                       <img src="rolex.webp" className="rounded" width="100%" alt="" />
                    </Col>
                    <Col md>
                        <p className="watch-para"> If you got into watches anytime after 2017,
                                the Rolex Daytona probably had something to do with it. 
                                That was the year a Daytona once owned by Paul Newman sold
                                for nearly $18 million—setting the vintage watch market on fire 
                                in the process. Designed in the 1960s to time laps at the Daytona <br />
                                gold with a vintage-inspired dial.
                                <br />
                                As sports go, yachting is up there with polo and fencing when it comes inaccessibility
                                doesn’t get as much attention as some of its siblings. You don’t, 
                                a spinnaker to appreciate its charms. It's the only “Professional” Rolex model
                                case sizes (37mm, 40mm, and 42mm),
                                <br /> 
                                In 2007, 15 years after introducing the Yacht-Master, Rolex took
                                its sailing watch to the next level by adding.
                                <br />
                                Designed in the 1960s to time laps at the Daytona
                                gold with a vintage-inspired dial.
                                </p>
                    </Col>
                   
                </Row>
            </div>
          </Container>
        </>
    );
    return design;
}

export default Swatchfuture;