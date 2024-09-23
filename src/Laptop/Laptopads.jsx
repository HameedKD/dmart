import "./Laptopads.css";
const Laptopads = () =>{
    const design = (
        <>
           <div className="laptop-ads-image">
               <img src="laptop-ads.jpg" width="100%" alt="" />
               <div className="box-shadow d-flex text-white justify-content-center align-items-center">
                  <div>
                  <h3 className="mb-2 animate__animated animate__zoomIn animate__infinite lap-top">D-MART...💻</h3>
                  <h1 
                  className="mb-3 animate__animated animate__zoomIn animate__infinite" 
                  style={{fontSize:"45px"}}> ALL LAPTOP ADs</h1>
                  <button 
                  className="animate__animated animate__zoomIn animate__infinite fw-bold px-5 btn btn-primary"
                  >HERE ME </button>
                  </div>
               </div>
           </div>
        </>
    );
    return design;
}
export default Laptopads ;