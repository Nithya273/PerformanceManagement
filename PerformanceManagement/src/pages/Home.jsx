
import Navbar from "../components/Navbar"
import Barchart from "../components/Barchart"

function Home() {
  
  return (
    <>
    <div className="flex flex-row w-[100vw] h-[100vh] ">
     <Navbar/> 
     <Barchart/>
     </div>
    </>
  )
}

export default Home
