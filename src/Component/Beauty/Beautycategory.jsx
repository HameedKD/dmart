import "./Beautycategory.css";
import { Container,Row,Col,Button,Card } from "react-bootstrap";
import bcategory from "../json-api/beautycategory.json"
import { useDispatch,useSelector } from "react-redux";
import { setData } from "../Redux/slices/laptop.slice";

const Beautycare = ({item}) =>{
    const dispatch = useDispatch();
    const laptop = useSelector(res=>res.laptopSlice);
    const addToCart = (item) =>{
      dispatch(setData(item));
    }
    const design = (
        <>
        {
           laptop.loading &&
           <div></div>
        }
        
             <Col md className="mb-3">
             <Card className="beauty-shadow border-primary" style={{width : "250px"}}>
                 <Card.Img className="img-hover" src={item.image} />
                 <Card.Body>
                     <Card.Title style={{color : "#555756"}}>{item.title}</Card.Title>
                     <Card.Text>
                        {
                         item.price
                        }
                     </Card.Text>
                     <Button onClick={()=>addToCart(item)} variant="outline-primary">Add To Cart</Button>
                 </Card.Body>
            </Card>
             </Col>
       
        </>
    );
    return design;
}
const Beautycategory = () =>{
    const design = (
        <>
            <Container className="care-beauty">
              <h1 className="mt-4 mb-4 fw-bold ">Beauty & Care Category</h1>
                <Row>
                    {
                      bcategory.map((item,index)=>{
                         return<Beautycare item={item} key={index} />
                      })
                    }
                </Row>
           </Container>
        </>
    );
    return design;
}
export default Beautycategory;