import { React, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { UserContext } from "../../../UserContext";

function RectorDashboard() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Rector")) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <SideBar />
      RectorDashboard
    </div>
  );
}

export default RectorDashboard;
