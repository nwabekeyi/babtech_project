import HomePage from "./component/homePage/homePage";
import ContactPage from "./component/contact/contactPage";
import About from "./component/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MyRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path= "/" Component={HomePage} />
                <Route path= "/contact" Component={ContactPage} />
                <Route path= "/about" Component={About} />
            </Routes>
        </Router>
    )
}

export default MyRoute;