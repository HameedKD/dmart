import Product from "./Product-image/Product";
import Laptopfeature from "../../Laptop/Laptopfeature";
import Swatchfuture from "../Swatch/Swatchfuture";
import Womenclothesdesign from "../Woman/Womenclothesdesign";
import Kidscollection from "../Kidstoy/Kidscollection";
import Beautyfuture from "../Beauty/Beautyfuture";
const Homepage = () =>{
    const design = (
        <>
           <Product />
           <Laptopfeature />
           <Swatchfuture />
           <Womenclothesdesign />
           <Kidscollection />
           <Beautyfuture />
        </>
    );
    return design;
}
export default Homepage;