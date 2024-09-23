import "./Laptopcategory.css";
import { 
    Container,
    Col,
    Row,
    Card,
    Button
 } from "react-bootstrap";
 /* import swal from 'sweetalert'; */
import lcategory from "../Component/json-api/latptopcategory.json"
import { useDispatch,useSelector } from "react-redux";
import { setData } from "../Component/Redux/slices/laptop.slice";

const Laptop = ({data}) =>{
    const dispatch = useDispatch();
    const laptop = useSelector(res=>res.laptopSlice);
    const addToCart = (data) =>{
      dispatch(setData(data));
    }
    
    const design = (
        <>
           {
           laptop.loading &&
             <div></div>
           }
          
           <Col md className="mb-3">
            <Card className="laptop-shadow border-primary" style={{width : "250px"}}>
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
        
        </>
    );
    return design;
}
const Laptopcategory = () =>{
    const design = (
        <>
           <Container className="lattop">
              <h1 className="mt-5 mb-4 fw-bold ">Laptop Category</h1>
                <Row>
                    {
                      lcategory.map((data,index)=>{
                         return<Laptop data={data} key={index} />
                      })
                    }
                </Row>
           </Container>
        </>
    );
    return design;
}

export default Laptopcategory;