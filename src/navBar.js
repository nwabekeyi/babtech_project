import { Link } from "react-router-dom"
import Button from "./button"

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
                <li>SOLUTIONS</li>
                <li>WHY TUNE</li>
                <li>PRICING</li>
                <Link to= 'contact'><li>CONTACT</li></Link>
                <li>SUPPORT</li>
                <li>ABOUT</li>
                <li>BLOG</li>
              </ul>
            </nav>
            <div className="header-btn">
                <Button />
            </div>
          </div>
          <div className="head-txt">
            <h2>Contact Us</h2>
          </div>
  
        </div>
      </nav>
    )
}

export default Navbar
