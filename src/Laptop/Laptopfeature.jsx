import "./Laptopfeature.css";
import { 
    Container,
    Row,
    Col
  } from "react-bootstrap";
const Laptopfeature = () =>{
    const design = (
        <>
          <Container>
            <div className="macbook-header">
                <h1 className="mt-3">Laptop Future</h1>
                <Row className="revers mb-4 mt-3">
                    <Col md>
                        <p className="para"> It is powered by a Core i5 processor and it comes with 12GB of RAM. 
                            The Apple MacBook Pro packs 512GB of SSD storage. 
                            Connectivity options include Wi-Fi 802.11 ac, Bluetooth and it comes with 2 USB ports (2 x USB 3.0), Mic In ports. 
                            As of 2nd September 2024, Apple MacBook Pro price in India starts at Rs. 159,900.
                            <br />
                            MacBook Pro packs a powerful array of ports for connecting high-speed peripherals, 
                            driving high-resolution displays or directly offloading SDXC cards. 
                            And it supports both Wi-Fi 6E and Bluetooth 5.3. <br />
                            Drive external.
                            <br /> 
                            macOS is the most advanced desktop operating system in the world. 
                            And with macOS Sonoma, work and play on your Mac are even more powerful
                            with new ways to elevate your video presentations, 
                            boost your gaming performance and personalise your device.</p>
                    </Col>
                    <Col md>
                       <img src="laptop-f-1.jpg" width="100%" alt="" />
                    </Col>
                </Row>
            </div>
          </Container>
        </>
    );
    return design;
}

export default Laptopfeature;