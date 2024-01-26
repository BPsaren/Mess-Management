import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { GiMeal } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

 const NavBar =()=>{
     const {isLoggedIn}= useAuth();
 return (
    <header>
   <div className="container">
    <div>
    <NavLink to="navbar"> Portfolio webpage </NavLink> 
    </div>
    <nav>
         <ul>


            <li>
            <NavLink to="/"> <FaHome /> Home  </NavLink>
            </li>


           
            <li>
            <NavLink to="/Service"> Services </NavLink>
            </li>

            <li>
            <NavLink to="/mealrequest"> <GiMeal />Meal Request  </NavLink>
            </li>


            <li>
            <NavLink to="/bazarcoastantry"> <FaShoppingBag />Bazar Coast Entry  </NavLink>
            </li>
            

            <li>
            <NavLink to="/activemonthdetails"> Active Month Details </NavLink>
            </li>

            <li>
            <NavLink to="/activeallmember"> All Active Member </NavLink>
            </li>

           {isLoggedIn ? (
            <li>
                <NavLink to="/Logout">Logout</NavLink>

            </li>
             ) : (<>
              <li>
            <NavLink to ="/Register"> <FaRegistered />Register </NavLink>
            </li>


            <li>
            <NavLink to="/Login"><FaUser /> Login  </NavLink>
            </li>



              </>
              )}
            

            

        </ul>

    </nav>
   </div>
   </header>

 );

}
export default NavBar;