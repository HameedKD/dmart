import "./Cart.css";
import {
    Container,
    Col,
    Button,
    Card,
    Row
} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {removeCart,removeAllCart} from "../Redux/slices/laptop.slice"

const Cart = () =>{
    const cartData = useSelector(res=>res.laptopSlice) 
    const dispatch = useDispatch();
    const design = (
        <>
          <div className="cart-header"></div>
          <Container className="lattop">
              {
                cartData.length > 0 ?
                <Button
                variant="outline-danger"
                className=" mt-4 mb-2 p-2 border-danger
                "
                onClick={()=>dispatch(removeAllCart())}
                >Remove All Cart</Button> 
                :
                <h1 className=" animate__animated animate__zoomIn text-center mt-5 mb-5 fw-bold">Your Cart Is Empty ! 😃</h1>
               }
             
                <Row>
                {
                    cartData.map((item,index)=>{
                         return (
                            <Col md className="mb-3">
                           <Card className="mb-3 animate__animated animate__zoomIn laptop-shadow border-danger" style={{width : "250px"}}>
                               <Card.Img className="img-hover" src={item.image} />
                               <Card.Body className="fw-bold">
                                   <Card.Title>{item.title}</Card.Title>
                                   <Card.Text>
                                      {
                                       item.price
                                      }
                                   </Card.Text>
                                   <Button onClick={()=>dispatch(removeCart(index))} variant="outline-danger">Remove Cart</Button>
                               </Card.Body>
                          </Card>
                           </Col>
                       )
                    
                     })
                }
                </Row>
           </Container>
        </>
    );
    return design;
}
export default Cart;