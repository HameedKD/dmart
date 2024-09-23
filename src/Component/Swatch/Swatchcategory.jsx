import "./Swatchcategory.css";
import { Container,Row,Col,Card,Button } from "react-bootstrap";
import watchcategory from "../json-api/swatchcategory.json"
import { useDispatch,useSelector } from "react-redux";
import { setData } from "../Redux/slices/laptop.slice";

const Smartwatch = ({item}) =>{
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
            {
                <Col md className="mb-3">
                <Card className="watch-shadow border-primary" style={{width : "250px"}}>
                <Card.Img className="img-hover" src={item.image} />
                <Card.Body>
                    <Card.Title style={{color : "#555756"}}>{item.title}</Card.Title>
                    <Card.Text>
                       {
                        item.price
                       }
                    </Card.Text>
                    <Button onClick={()=>addToCart(item)}variant="outline-primary">Add To Cart</Button>
                </Card.Body>
                </Card>
                </Col>
            }
        </>
    );
    return design;
}
const Swatchcategory = () =>{
    const design = (
        <>
          <Container className="watch-cate">
              <h1 className="mt-5 mb-4 fw-bold">Watch Category</h1>
                <Row>
                    {
                        watchcategory.map((item,index)=>{
                            return <Smartwatch item={item} key={index} />
                        })
                    }
                </Row>
           </Container>
        </>
    );
    return design;
}
export default Swatchcategory;