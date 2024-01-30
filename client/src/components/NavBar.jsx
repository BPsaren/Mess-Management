import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { GiMeal } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="container">
        <div>
          <NavLink to="navbar" className='a1'> Portfolio webpage </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className='a1'> <FaHome /> Home  </NavLink>
            </li>
            <li>
              <NavLink to="/Service" className='a1'> Services </NavLink>
            </li>
            <li>
              <NavLink to="/mealrequest" className='a1'> <GiMeal />Meal Request  </NavLink>
            </li>
            <li>
              <NavLink to="/bazarcoastantry" className='a1'> <FaShoppingBag />Bazar Coast Entry  </NavLink>
            </li>
            <li>
              <NavLink to="/activemonthdetails" className='a1'> Active Month Details </NavLink>
            </li>
            <li>
              <NavLink to="/activeallmember" className='a1'> All Active Member </NavLink>
            </li>

            {isLoggedIn ? (
              <li>
                <NavLink to="/Logout" className='a1'>Logout</NavLink>

              </li>
            ) : (<>
              <li>
                <NavLink to="/Register" className='a1'> <FaRegistered />Register </NavLink>
              </li>
              <li>
                <NavLink to="/Login" className='a1'><FaUser /> Login  </NavLink>
              </li>
            </>
            )}
          </ul>
        </nav>
      </div>
    </>

  );

}
export default NavBar;