import Rectangle from "./components/Rectangle"
import RightPart from "./components/RightPart"

function App() {
  

  return (
   <div  className="min-h-screen lg:p-8 pb-3 bg-gradient-to-b from-[#272B30]  to-[#191C20] flex lg:flex-row flex-col 
     lg:justify-center items-center">
      <Rectangle></Rectangle>
      <RightPart></RightPart>
   </div>
  )
}

export default App
