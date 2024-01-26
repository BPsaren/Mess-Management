import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
  
//sob jaygay use hochhe bole bole ai function ta likhlam

const defaultMemberMoney={
  date:"",
  username: "",
  money:"",

}

export const AdminAddMemberMoney=()=>{

  const [honey, setMoney]=useState(defaultMemberMoney)
  const { authorizationToken } = useAuth();


 // handle the input information
  const handleInput=(e)=>{
 //console.log(e);

 let name = e.target.name;
 let value = e.target.value;
 setMoney({
  ...honey,
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
          const response = await fetch("http://localhost:3000/api/admin/adminaddmembermoney", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
         body: JSON.stringify(honey),
          });
        
          if (response.ok) 
          {
             
            setMoney (defaultMemberMoney);
          
            const data = await response.json();
            console.log(data);
            toast.success("Member Money Added successful");
          }
        } catch (error) {
          toast.error("Member Money Not Added", error);
          
        }




};
    return ( 
      <div>
        <section>
               <main>
                <div className="section-registration">
                 
                    <h1> Add Member Money</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                   

                    <div>
                      <label htmlFor="date">Select Date</label>
                      <input type="date" 
                      name="date"
                      placeholder="Enter the Date "
                      id="date"
                      required autoComplete="off"
                      value={honey.date}
                      onChange={handleInput}
                      
                      />
                      </div>




                    <div>
                      <label htmlFor="username"> Select Member Who Will Deposit</label>
                      <input type="text" 
                      name="username"
                      placeholder="Enter Member Name "
                      id="username"
                      required autoComplete="off"
                      value={honey.username}
                      onChange={handleInput}
                      
                      />
                      </div>


                     

                      <div>
                      <label htmlFor="money"> Deposit Amount </label>
                      <input type="number" 
                      name="money"
                      placeholder="enter your specific Rokra "
                      id="money"
                      required autoComplete="off"
                      value={honey.money}
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