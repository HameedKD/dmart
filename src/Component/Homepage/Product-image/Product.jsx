import "./Product.css";
const Product = () =>{
    const design = (
        <>
          <div className="pro-image">
             <img src="pro.jpg" width="100%" alt="" />
             <div className="black-box d-flex text-white justify-content-center align-items-center">
                <div>
                 <h3 className="animate__animated animate__backInDown animate__infinite d-mart">D-MART...</h3>
                  <h1 
                  className=" animate__animated animate__backInDown animate__infinite mb-3" 
                  style={{fontSize:"45px"}}> ALL PRODUCT ADs</h1>
                  <button 
                  className=" animate__animated animate__backInDown animate__infinite fw-bold px-5 btn btn-primary"
                  >HERE ME </button>
                </div>
             </div>
          </div>
        </>
    );
    return design;
}
export default Product;