import { NavLink ,Outlet} from "react-router-dom";

export const ActiveMonthDetails=()=>{
    return(
        <header>
        <div className="container">
         <nav>
           <ul>
             <li>
               <NavLink to="deposits"> Deposit </NavLink>
               </li>
       
             <li>
             <NavLink to="bazarcoasts"> Bazar Coast </NavLink>
               </li>
       
       
             <li >
             <NavLink to="meals"> Meal </NavLink>
               
               </li>
       
               <li >
             <NavLink to="mealcharge"> Meal charge </NavLink>
               
               </li>
             
           </ul>
           </nav>
        </div>
        <Outlet/>
        </header>
    );
}