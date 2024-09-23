import Kidstoyads from "./kidstoyads";
import Kidsvideo from "./Kidsvideo";
import Kidscategory from "./Kidscategory";
import Kidscollection from "./Kidscollection";

const Kids = () =>{
    const design = (
        <>
         <Kidstoyads />
         <Kidsvideo />
         <Kidscategory />
         <Kidscollection />
        </>
    );
    return design;
}
export default Kids;