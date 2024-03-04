import "./Stylesheet.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Furniture from "./page/Furniture";
import Footer from "./component/Footer";
import Bed from "./page/Bed";
import Chair from "./page/Chair";
import Sofa from "./page/Sofa";
import Login from "./page/LoginPage";
import Signup from "./page/SignupPage";
import AdminPage from "./page/Admin";
import AddProduct from "./page/Addproduct";
import UpdateProduct from "./page/Updateproduct";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/bed" element={<Bed />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
