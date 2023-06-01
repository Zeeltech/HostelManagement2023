import { React, useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { UserContext } from "../../../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AddStudentPopUp from "./AddStudentPopUp";

function StudentsProfile() {
  const { user, setUser } = useContext(UserContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/accountant/all-students").then((res) => {
      setStudents(res.data);
    });
  }, []);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center mb-6 text-2xl font-bold labels">
        All Students
      </div>
      <AddStudentPopUp />
      <div>
        <div className="font-semibold">Search student</div>
        <input type="text" />
      </div>
      <div className="mt-2 relative rounded-2xl  grid gap-x-6 gap-y-8 grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {students &&
          students.length > 0 &&
          students.map((student) => (
            <div className="relative" key={student._id}>
              <div>
                <div className="rounded-2xl object-cover aspect-square mb-2 bg-gray-600">
                  {student.photo && (
                    <img
                      className="rounded-2xl aspect-square object-cover"
                      src={
                        myConstants.BACKEND_URL + "/uploads/" + student.photo
                      }
                    ></img>
                  )}
                </div>
                <h2 className="text-sm font-bold mb-1 truncate">
                  {student.name}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default StudentsProfile;
