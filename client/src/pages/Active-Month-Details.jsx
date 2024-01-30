import { NavLink ,Outlet} from "react-router-dom";

export const ActiveMonthDetails=()=>{
    return(
        <header>
        <div className="container">
         <nav>
           <ul>
             <li>
               <NavLink to="deposits" className='e1'> Deposit </NavLink>
               </li>
       
             <li>
             <NavLink to="bazarcoasts" className='e1'> Bazar Coast </NavLink>
               </li>
       
       
             <li >
             <NavLink to="meals" className='e1'> Meal </NavLink>
               
               </li>
       
               <li >
             <NavLink to="mealcharge" className='e1'> Meal charge </NavLink>
               
               </li>
             
           </ul>
           </nav>
        </div>
        <Outlet/>
        </header>
    );
}