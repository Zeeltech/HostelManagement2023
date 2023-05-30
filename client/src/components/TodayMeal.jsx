import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserContext } from "../../UserContext";
import axios from "axios";

function TodayMeal() {
  const { user, setUser } = useContext(UserContext);
  const [meal, setMeal] = useState(null);
  if (!user) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    axios.get("/meal/get-meal").then((res) => {
      setMeal(res.data[0]);
    });
  }, [meal]);

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

export default TodayMeal;
