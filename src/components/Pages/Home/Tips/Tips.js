
import "../CSS/style.css";
import TipIntro from "./TipIntro/TipIntro";
import TipsContent from './TipsContent/TipsContent';
const Tips = () => {
 
  return (
    <div id='insights' className="relative flex flex-col justify-center items-center w-full mt-[150px]">
    {/* <div className="second_background"></div> */}

    <TipIntro/>
    <TipsContent/>
 

  </div>
  )
}

export default Tips