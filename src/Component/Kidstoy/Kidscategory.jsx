import "./Kidscategory.css";
import { Container,Row,Col,Button,Card } from "react-bootstrap";
import toycategory from "../json-api/kidscategory.json"
import { useDispatch,useSelector } from "react-redux";
import { setData } from "../Redux/slices/laptop.slice";

const Toykids = ({item}) =>{
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
             <Card className="toy-shadow border-primary" style={{width : "250px"}}>
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
const Kidscategory = () =>{
    const design = (
        <>
          <Container className="toy-kids">
              <h1 className="mt-4 mb-4 fw-bold ">Toy Category</h1>
                <Row>
                    {
                      toycategory.map((item,index)=>{
                         return<Toykids item={item} key={index} />
                      })
                    }
                </Row>
           </Container>
        </>
    );
    return design;
}
export default Kidscategory;