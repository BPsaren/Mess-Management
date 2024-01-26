import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
  
//sob jaygay use hochhe bole bole ai function ta likhlam

const defaultContactFormData={
  date:"",
  username: "Bishnupada saren",
  email: "",
  phone:"",

}

export const AddNewMember=()=>{

  const [member, setMember]=useState(defaultContactFormData)
  const { authorizationToken } = useAuth();


 // handle the input information
  const handleInput=(e)=>{
 //console.log(e);

 let name = e.target.name;
 let value = e.target.value;
 setMember({
  ...member,
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
          const response = await fetch("http://localhost:3000/api/admin/adminaddmember", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
         body: JSON.stringify(member),
          });
        
          if (response.ok) 
          {
             
            setMember (defaultContactFormData);
          
            const data = await response.json();
            console.log(data);
            toast.success("Member Added successful");
          }
        } catch (error) {
          toast.error("Member Not Added", error);
          
        }




};
    return ( 
      <div>
        <section>
               <main>
                <div className="section-registration">
                 
                    <h1> Add New Member</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                   

                    <div>
                      <label htmlFor="date">Select Date</label>
                      <input type="date" 
                      name="date"
                      placeholder="enter the date "
                      id="date"
                      required autoComplete="off"
                      value={member.date}
                      onChange={handleInput}
                      
                      />
                      </div>




                    <div>
                      <label htmlFor="username"> Username</label>
                      <input type="text" 
                      name="username"
                      placeholder="enter your username "
                      id="username"
                      required autoComplete="off"
                      value={member.username}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="email"> email address </label>
                      <input type="email" 
                      name="email"
                      placeholder="enter your email address"
                      id="email"
                      required autoComplete="off"
                      value={member.email}
                      onChange={handleInput}
                      
                      />
                      </div>

                      <div>
                      <label htmlFor="phone">Phone number </label>
                      <input type="number" 
                      name="phone"
                      placeholder="enter your phone number "
                      id="phone"
                      required autoComplete="off"
                      value={member.phone}
                      onChange={handleInput}/>
                      </div>

                   <button type="submit">Send Message</button>
                      
                   </form>
                </div>
               </main>
              
        </section>
      </div>
    );
}