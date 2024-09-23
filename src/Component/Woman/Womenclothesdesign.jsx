import "./Womenclothesdesign.css";
import { 
    Container,
    Row,
    Col
  } from "react-bootstrap";
const Womenclothesdesign = () =>{
    const design = (
        <>
          <Container>
            <div className="clothes-header">
                <h1 className="mt-3">Clothes Collection</h1>
                <Row className="revers mb-4 mt-3">
                    <Col md>
                        <p className="women-clothes"> Collection of Woman Wardrobe. Set of Female Clothes and Accessories Icons. 
                            Various Girl Clothing. Jacket, Shoes, Shirt, Pants, Watches, Eyeglasses, Hat.
                             Cartoon Flat Vector Illustration Pro Vector
                            <br />
                            Shop for the finest styles of gowns for girls in massive varieties including 
                            ruffles, printed, and embroidered gowns that are sure to make your kid the 
                            show-stopper. 
                            <br /> 
                            Online shopping for girls clothes in India at the best prices. Buy the latest 
                            trendy girls wear online with hopscotch. ✓Cash on Delivery, ✓Latest Designs, 
                            ✓Pan India shipping..
                            <br />
                            Shop for the finest styles of gowns for girls in massive varieties including ruffles,
                             printed, and embroidered gowns that are sure to make your kid the show-stopper.
                             <br />
                             Collection of Woman Wardrobe. Set of Female Clothes and Accessories Icons. 
                             Various Girl Clothing. Jacket, Shoes, Shirt, Pants, Watches, Eyeglasses, Hat.
                             Cartoon Flat Vector Illustration Pro Vector
                            </p>
                       </Col>
                    <Col md>
                       <img src="clothes-collection.jpg" className="rounded" width="100%" alt="" />
                    </Col>
                </Row>
            </div>
          </Container>
        </>
    );
    return design;
}

export default Womenclothesdesign;