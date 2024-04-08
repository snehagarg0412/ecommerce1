import { Link } from "react-router-dom"
import logo from "./logo.png"
function Footer()
{
    return(
        <div>
           <footer className="bg-dark text-light py-4">
<div className="container">
    <div className="row">
        <div className="col-md-3">
            <img src={logo} alt="CoolGadgets Logo" className="mb-2" width="100"></img>
            <p>Discover the Future <br></br> With CoolGadgets!</p>
        </div>
        <div className="col-md-3">
            <h3>Navigation</h3>
            <ul className="list-unstyled">
                <li><Link to={"/"} className="text-decoration-none text-light">Home</Link></li>
                <li><Link to={"/AllProduct"} className="text-decoration-none text-light">AllProduct</Link></li>
                <li><Link to={"/MenClothes"} className="text-decoration-none text-light">MenClothes</Link></li>
                <li><Link to={"/WomenClothes"} className="text-decoration-none text-light">WomenClothes</Link></li>
                <li><Link to={"/Jwellery"} className="text-decoration-none text-light">Jwellery</Link></li>
                <li><Link to={"/Electronics"} className="text-decoration-none text-light">Electronics</Link></li>

                <li><Link to={"/Contact"} className="text-decoration-none text-light">Contact</Link></li>
                <li><Link to={"/Login"} className="text-decoration-none text-light">Login</Link></li>



            </ul>
        </div>
        <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
                <li><a to="#" className="text-decoration-none text-light">Facebook</a></li>
                <li><a to="#" className="text-decoration-none text-light">Twitter</a></li>
                <li><a to="#" className="text-decoration-none text-light">Instagram</a></li>
                <li><a to="#" className="text-decoration-none text-light">YouTube</a></li>
            </ul>
        </div>
    </div>
    <hr className="my-4"/>
    <div className="text-center">&copy; Copyright 2023 - CoolGadgets Store</div>
</div>
</footer>
        </div>
    )
}
export default Footer