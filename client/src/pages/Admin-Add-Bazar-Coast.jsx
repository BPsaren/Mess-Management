
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
  
//sob jaygay use hochhe bole bole ai function ta likhlam

const defaultBazarCoast={
  date:"",
  bazarPerson: "",
  bazarAmount:"",
  bazarList:"",

}


export const AdminAddBazarCoast=()=>{



    const [bazar, setBazar]=useState(defaultBazarCoast)
    const { authorizationToken } = useAuth();
  
  
   // handle the input information
    const handleInput=(e)=>{
   //console.log(e);
  
   let name = e.target.name;
   let value = e.target.value;
   setBazar({
    ...bazar,
    //dynamic value name=phone=email=password
    [name]:value,
  
  })
  //for inspect
  //console.log(name,value);
  };
  ///handling for the form submission process
  const handleSubmit=async(e)=>{
           e.preventDefault();
           //alert(user);
           //console.log(member);
  
           try {
            const response = await fetch("http://localhost:3000/api/admin/adminaddbazarcoast", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: authorizationToken,
              },
           body: JSON.stringify(bazar),
            });
          
            if (response.ok) 
            {
               
              setBazar(defaultBazarCoast);
            
              const data = await response.json();
              console.log(data);
              toast.success("Bazar Coast  Added successful");
            }
          } catch (error) {
            toast.error("Bazar Coast Not Added");
            
          }
  
  };


return (


    <div>
        <section>
               <main>
                <div className="section-registration">
                 
                    <h1> Add Bazar Coast </h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                   

                    <div>
                      <label htmlFor="date">Select Date</label>
                      <input type="date" 
                      name="date"
                      placeholder="Enter the Date "
                      id="date"
                      required autoComplete="off"
                      value={bazar.date}
                      onChange={handleInput}
                      
                      />
                      </div>




                    <div>
                      <label htmlFor="bazarPerson"> Select Member Who Will Bazar Today</label>
                      <input type="text" 
                      name="bazarPerson"
                      placeholder="Enter The Name "
                      id="bazarPerson"
                      required autoComplete="off"
                      value={bazar.bazarPerson}
                      onChange={handleInput}
                      
                      />
                      </div>


                     

                      <div>
                      <label htmlFor="bazarAmount"> Total Bazar Amount</label>
                      <input type="number" 
                      name="bazarAmount"
                      placeholder="Just Enter Number"
                      id="bazarAmount"
                      required autoComplete="off"
                      value={bazar.bazarAmount}
                      onChange={handleInput}/>
                      </div>


                      <div>
                      <label htmlFor="bazarList"> Enter Bazar List</label>
                      <input type="text" 
                      name="bazarList"
                      placeholder="exa. Allu, Chicken, Egg "
                      id="bazarList"
                      required autoComplete="off"
                      value={bazar.bazarList}
                      onChange={handleInput}/>
                      </div>

                   <button type="submit">SUBMIT</button>
                      
                   </form>
                </div>
               </main>
              
        </section>
      </div>

);





}