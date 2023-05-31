import React, { useContext } from "react";
import { UserContext } from "../../../../UserContext";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function AddMeal() {
  const { user, setUser } = useContext(UserContext);
  if (!user || (user && user.role !== "Rector")) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <ToastContainer />
      <div className="flex justify-center mb-6 text-2xl font-bold labels max-w-md mx-auto">
        Breakfast
      </div>
        
      <div className="flex justify-center mb-6 text-2xl font-bold labels max-w-md mx-auto">
        Lunch
      </div>
      <div className="flex justify-center mb-6 text-2xl font-bold labels max-w-md mx-auto">
        Dinner
      </div>
    </>
  );
}

export default AddMeal;
