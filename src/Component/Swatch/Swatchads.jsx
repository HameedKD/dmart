import "./Swatchads.css";
const Swatchads = () =>{
    const design = (
        <>
         <div className="smart-watch">
          <img src="smartwatch-ads.jpg" width="100%" />
             <div className="watch-box d-flex text-white justify-content-center align-items-center">
             <div>
                 <h3 className="animate__animated animate__backInDown animate__infinite ">D-MART...⌚</h3>
                  <h1 
                  className=" animate__animated animate__backInDown animate__infinite mb-3" 
                  style={{fontSize:"45px"}}> ALL SMARTWATCH ADs</h1>
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
export default Swatchads;