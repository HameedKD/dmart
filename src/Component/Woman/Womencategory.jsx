import "./Womencategory.css";
import { Container,Row,Card,Col,Button} from "react-bootstrap";
import wcategory from "../json-api/womencategory.json"
import { useDispatch,useSelector } from "react-redux";
import { setData } from "../Redux/slices/laptop.slice";

const Womenclothes = ({data}) =>{
    const dispatch = useDispatch();
    const womenclot = useSelector(res=>res.laptopSlice);
    const addToCart = (data) =>{
        dispatch(setData(data));
      }
    const design = (
        <>
            { 
                womenclot.loading &&
                <div></div>    
            }
             {
                 <Col md className="mb-3">
                 <Card className="women-shadow border-primary" style={{width : "250px"}}>
                 <Card.Img className="img-hover" src={data.image} />
                 <Card.Body>
                     <Card.Title style={{color : "#555756"}}>{data.title}</Card.Title>
                     <Card.Text>
                        {
                         data.price
                        }
                     </Card.Text>
                     <Button onClick={()=>addToCart(data)} variant="outline-primary">Add To Cart</Button>
                 </Card.Body>
                 </Card>
             </Col>
             }
        </>
    );
    return design;
}
const Womencategory = () =>{
    const design = (
        <>
          <Container className="women-categ">
              <h1 className="mt-4 mb-4 fw-bold ">Women Clothes Category</h1>
               <Row>
                 {
                     wcategory.map((data,index)=>{
                        return <Womenclothes data={data} key={index} />
                     })
                 }
               </Row>
           </Container>
        </>
    );
    return design;
}
export default Womencategory;