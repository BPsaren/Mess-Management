import React, { useState, useEffect } from 'react';
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

export const ViewMealRequest = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [ViewMeal, SetViewMeal] = useState([]);
  const { authorizationToken } = useAuth();

  const handleInput = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ViewAllRequests();
  };

  const ViewAllRequests = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/viewmealrequest?date=${selectedDate}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if(response.ok){
        const data = await response.json();
      SetViewMeal(data);
      alert("success");
    }else{
      toast.error("no data found");
    }
    } catch (error) {
    console.log(error);
    }
  };

  useEffect(() => {
    //ViewAllRequests();
    // Optionally, you can call ViewAllRequests() here to fetch data when the component mounts.
  }, [selectedDate]);

  return (
    <div className="container">
      <section className="next-container">
        <h1>View Meal Request</h1>
        <div className="form-control">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="date">Select date</label>
              <input
                type="date"
                name="date"
                placeholder="Select the date"
                id="date"
                required
                autoComplete="off"
                value={selectedDate}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="table-create">
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Morning Meal</th>
                <th>Night Meal</th>
                <th>Guest Meal</th>
              </tr>
            </thead>
            <tbody>
              {ViewMeal.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.person}</td>
                  <td>{curUser.morning}</td>
                  <td>{curUser.night}</td>
                  <td>{curUser.guestMeal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
