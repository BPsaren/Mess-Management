import { useState } from "react";
import { toast } from 'react-toastify';
import './meal-request.css'




//which data contain by the mealRequest object
const defaultMealRequest={
    date:"",
    person:"",
    morning: "",
    night: "",
    guestMeal: "",
    
  
  }


export const MealRequest=()=>{
    const [meal, setMeal]=useState(defaultMealRequest);

const handleInput=(e)=>{
 console.log(e);
 let name= e.target.name;
 let value= e.target.value;

 setMeal({
     ...meal,
     [name]: value,

 })
};
const handleSubmit=async(e)=>{
    e.preventDefault();
    //alert(user);
   // console.log(Contact);

    try {
     const response = await fetch("http://localhost:3000/api/meal/mealrequest", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(meal),
     });
   
     if (response.ok) 
     {
        
   
       setMeal(defaultMealRequest);
     
       const data = await response.json();
       console.log(data);
       toast.success("Meal Req Send By Manager"); 
     }
   } catch (error) {
     toast.error("Meal Req not Send", error);
   }




};

  return(
        <>
        <section style={{padding:'0px',margin:'0px'}}>
               <main style={{padding:'0px',margin:'0px'}}>
                <div className="section-registration" style={{padding:'0px',margin:'0px'}}>
                 
                   
                    <div id="body">
                      <div id='container'>
                    <form onSubmit={handleSubmit}>
                    <h1 className="brand-title" style={{color:'black'}}> Send Meal Request</h1>
                    <br/>

                    <div>
                      <label htmlFor="date"> Select Date</label>
                      <input type="date" 
                      name="date"
                      placeholder="Enter the date "
                      id="date"
                      required autoComplete="off"
                      value={meal.date}
                      onChange={handleInput}
                      
                      />
                      </div>

                      <div>
                      <label htmlFor="person"> Enter your Name</label>
                      <input type="text" 
                      name="person"
                      placeholder="EXM:Johnny Sins "
                      id="person"
                      required autoComplete="off"
                      value={meal.person}
                      onChange={handleInput}
                      
                      />
                      </div>


                    <div>
                      <label htmlFor="morning"> Morning Meal </label>
                      <input type="number" 
                      name="morning"
                      placeholder="Enter Meal Number"
                      id="morning"
                      required autoComplete="off"
                      value={meal.morning}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="night"> Night Meal </label>
                      <input type="number" 
                      name="night"
                      placeholder="Enter Meal Number"
                      id="email"
                      required autoComplete="off"
                      value={meal.night}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="guestMeal"> Guest Meal</label>
                      <input type="number" 
                      name="guestMeal"
                      placeholder="if you don't have Enter '0'"
                      id="guestMeal"
                      required autoComplete="off"
                      value={meal.guestMeal}
                      onChange={handleInput}/>
                      </div>

                   <button type="submit">Submit</button>
                      
                   </form>
                   </div>
                   </div>
                </div>
               </main>
              
        </section>
      </>
        
    );
}



