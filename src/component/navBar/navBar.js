import { Link } from "react-router-dom"
import Button from "../tempalates/button"

const Navbar = () =>{
    return(
        <nav>
        <div className="header">
          <div className="head">
          <div className="logo">
            <h1>TUNE</h1>
            </div>
            <nav>
              <ul>
              <Link to= '/'>HOME</Link>
                <Link to= ''>SERVICES</Link>
                <Link to= ''>PRICING</Link>
                <Link to= '/contact'>CONTACT</Link>
                <Link to= ''>SUPPORT</Link>
                <Link to= '/about'>ABOUT</Link>
              </ul>
            </nav>
            <div className="header-btn">
                <Button />
            </div>
          </div>
         
  
        </div>
      </nav>
    )
}

export default Navbar
