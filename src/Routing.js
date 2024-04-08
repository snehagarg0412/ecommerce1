import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AllProduct from "./AllProduct"
import Contact from "./Contact"
import Header from "./Header"
import Footer from "./Footer"
import "./routing.css"
import MenClothes from "./MenClothes"
import WomenClothes from "./WomenClothes"
import Jwellery from "./Jwellery"
import Electronics from "./Electronics"
// import PostData from "./PostData"



import Login from "./Login"
// import Put from "./Put"

function Routing()
{
    return(
        <div className="routing">
         <BrowserRouter>
         <Header></Header>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/AllProduct" element={<AllProduct></AllProduct>}></Route>
            <Route path="/MenClothes" element={<MenClothes></MenClothes>}></Route>
            <Route path="/WomenClothes" element={<WomenClothes></WomenClothes>}></Route>
            <Route path="/Jwellery" element={<Jwellery></Jwellery>}></Route>
            <Route path="/Electronics" element={<Electronics></Electronics>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>

            </Routes>
            <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}
export default Routing