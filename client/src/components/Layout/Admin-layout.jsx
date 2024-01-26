import { NavLink ,Outlet} from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const AdminLayout =()=>{

   return (

 <header>
 <div className="container">
  <nav>
    <ul>
      <li>
        <NavLink to="users"> <FaUser />Users</NavLink>
        </li>

        <li >
      <NavLink to="adminaddmember"> <FaHome />Add New Member</NavLink>
        
        </li>
        <li >
      <NavLink to="adminaddmembermoney"> <FaHome />Add Member Money</NavLink>
        
        </li>

      <li>
      <NavLink to="viewmealrequests"> <MdContactMail /> View Meal Request</NavLink>
        </li>


      <li >
      <NavLink to="addmealmembers"><RiServiceLine /> Add Member Meal </NavLink>
        
        </li>

        <li >
      <NavLink to="adminaddbazarcoast"><RiServiceLine /> Add Bazar Coast </NavLink>
        
        </li>

       
      
    </ul>
    </nav>
 </div>
 <Outlet/>
 </header>
   
   );



}