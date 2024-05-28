import Page from "./page";
import ContactPage from "./contactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MyRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path= "/" Component={Page} />
                <Route path= "contact" Component={ContactPage} />
            </Routes>
        </Router>
    )
}

export default MyRoute;