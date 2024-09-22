import Navbar from "./component/navbar";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import background from "../../public/images/th.jpeg"


export default function Home() {
 return(
 
  <div>
     
     <main id="main" className="flex flex-col items-center justify-between">
      <div className="relative w-full ">
        <div className=" w-full">
  <div className="text">
    
      <h3 id="heading">WE ARE HERE TO MAKE</h3>
      <h1 id="heading">COOKING FUN AGAIN</h1>
      <span id="search-bar">
          <input type="text" text-align="left" placeholder="Aj kya pakana hy" />
          <span id="bs-search">
          <BsSearch  size={30}/>
          </span>
          </span>
     
  </div>
  <div>
          <Image 
          src={background} 
          alt="background-image"
           className="w-full" 
           width={500} 
          />
      </div>
   

  </div>
      </div>
     </main>
     </div>
 )
}
