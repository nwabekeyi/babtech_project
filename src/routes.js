import HomePage from "./component/homePage/homePage";
import ContactPage from "./component/contact/contactPage";
import About from "./component/about/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SupportPage from "./component/supportNav/supportNav";

const MyRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path= "/" Component={HomePage} />
                <Route path= "/contact" Component={ContactPage} />
                <Route path= "/about" Component={About} />
                <Route path="/support" Component={SupportPage} />
            </Routes>
        </Router>
    )
}

export default MyRoute;