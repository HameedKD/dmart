import "./Header.css";
import { 
    Navbar,
    Container,
    Nav,
    Image,
    Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import brand from "../../Component/json-api/brand.json";
import menu from "../../Component/json-api/menu.json";
import { useState } from "react";
import { useSelector } from "react-redux";

const Menu = ({item}) =>{
    const design = (
        <Link
        style={{color : item.color}}
        data-bs-dismiss="Navbar"
        to={item.link}
        className="nav-link"
        >{item.lable}</Link>
    );
    return design;
}

const Header = () =>{
    const cartData = useSelector(res=>res.laptopSlice)
const [sticky,setSticky] = useState("fixed-top border-bottom");

  window.onscroll = () =>{
     let tmp = "";
     const top = window.scrollY;
     if(top > 10)
     {
       tmp = "fixed-top border-bottom sticky";
     }
     else
     {
      tmp = "fixed-top border-bottom";
     }
     setSticky(tmp);
  }
    const design = (
        <>
          <Navbar expand="lg" className={sticky}>
            <Container>
            <Image src={brand.logo} href="#home" width="150px" />
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end fw-bold w-100">
                    {
                       menu.map((item,index)=>{
                        item["color"] = "white"
                        return <Menu item={item} key={index} />
                       })
                    }
                    <Link to="/cart">
                    <Button className="cart-box text-danger">
                    <i class="fa fa-cart-plus cart-icon"></i>
                    <span className="numb">
                        {
                            cartData.length
                        }
                    </span>
                    </Button>
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
        </>
    );
    return design;
}
export default Header;