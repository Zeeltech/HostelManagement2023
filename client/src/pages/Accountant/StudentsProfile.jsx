import { React, useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { UserContext } from "../../../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as myConstants from "../../../myConstants";
import axios from "axios";
import AddStudentPopUp from "./AddStudentPopUp";

function StudentsProfile() {
  const { user, setUser } = useContext(UserContext);
  const [fetch, setFetch] = useState(false);
  const [students, setStudents] = useState([]);
  const [rollNo, setRollNo] = useState("");

  useEffect(() => {
    axios.post("/accountant/all-students", { rollNo }).then((res) => {
      setStudents(res.data);
      setFetch(false);
    });
  }, [fetch, rollNo]);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex justify-center mb-6 text-2xl font-bold labels mt-4 mx-4">
        All Students
      </div>
      <AddStudentPopUp fetch={fetch} setFetch={setFetch} />
      <div className="mx-6">
        <div className="font-semibold">Search student</div>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={rollNo}
          onChange={(ev) => {
            setRollNo(ev.target.value);
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-4 mx-8 relative rounded-2xl grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {students &&
          students.length > 0 &&
          students.map((student) => (
            <div className="" key={student._id}>
              <div className="flex flex-col border-2 p-1 rounded-2xl border-bg_dark_section shadow-sm shadow-bg_dark_section h-full">
                <div className="rounded-xl object-cover aspect-square mb-2 bg-gray-600">
                  {student.profilePhoto ? (
                    <img
                      className="rounded-xl aspect-square object-cover border-2 border-bg_dark_section"
                      src={
                        myConstants.BACKEND_URL + 
                        "/uploads/" +
                        student.profilePhoto
                      } 
                    ></img>
                  ) : (
                    <img
                      className="rounded-xl aspect-square object-cover border-2 border-bg_dark_section"
                      src={myConstants.BACKEND_URL + "/uploads/default.png"}
                    ></img>
                  )}
                </div>
                <h2 className="text-sm font-bold mb-1 truncate mx-auto bg-bg_red text-bg_white_font rounded-md px-1">
                  {student.rollNo}
                </h2>
                <h2 className="text-sm font-bold mb-1 text-center mx-auto  text-bg_dark_section rounded-md px-1">
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
