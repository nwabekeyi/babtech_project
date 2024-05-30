import HomePage from "./component/homePage/homePage";
import ContactPage from "./component/contact/contactPage";
import About from "./component/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./component/pricing/pricing";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/about" Component={About} />
        <Route path="/pricing" Component={Pricing} />
      </Routes>
    </Router>
  );
};

export default MyRoute;
