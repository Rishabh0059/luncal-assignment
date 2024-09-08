import FirstWidget from "./FirstWidget"
import HrTag from "./HrTag"
import SecondWidget from "./SecondWidget"


const RightPart = () => {
  return (
    <div  className="flex-col w-[700px] h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]">
      <FirstWidget></FirstWidget>
      <HrTag></HrTag>
      <SecondWidget></SecondWidget>
      <HrTag></HrTag>
    </div>
  )
}

export default RightPart
