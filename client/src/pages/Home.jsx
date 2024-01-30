import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to exit?";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Run only once on component mount

  return (
    <React.Fragment >
      <h1 style={{position:'static',color:'white'}}>This is my Home page</h1>
      <p style={{color:'white'}}>This is my Mern stack web page.</p>
      </React.Fragment>
  );
};

//export default ExitPopup;
