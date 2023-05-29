import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../../UserContext";

function AddFood() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const { user, setUser } = useContext(UserContext);

  async function addFood(ev) {
    ev.preventDefault();
    if (name == "" || photo == null) {
      toast.error("Please fill all fields");
    } else {
      try {
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("name", name);

        await axios
          .post("/food/add-food", formData, {
            headers: { "Content-type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Added Successfully");
              setRedirect(true);
            }
          });
      } catch (err) {
        if (err.response.status === 409) toast.error("Food already exists");
        console.log(err);
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="give-height flex justify-center items-center mt-24 text-bg_white_font font-semibold text-sm">
        <form
          className="bg-bg_white text-bg_dark_font rounded-md shadow-lg shadow-bg_light_section border-2 border-bg_dark_section p-7 flex flex-col justify-center items-center gap-2"
          onSubmit={addFood}
        >
          <div className="text-xl mb-4">Add Food item</div>

          <div className="w-full">
            Item name
            <input
              type="text"
              value={name}
              className="mt-1 mb-2"
              onChange={(ev) => {
                setName(ev.target.value);
              }}
              name="name"
              placeholder="Enter food item name"
            />
          </div>

          <label className="flex flex-col w-full">
            <div className="">
              <div className="flex items-center  gap-4">
                <div>Upload&nbsp;item&nbsp;photo</div>
                <div className="grow">
                  <input
                    type="file"
                    onChange={(ev) => {
                      setPhoto(ev.target.files[0]);
                    }}
                    name="photo"
                    className="hidden mt-1 mb-2"
                  />
                  <div className="mt-1 bg-bg_red hover:bg-bg_dark_section w-full p-1 rounded-md py-2 px-4 text-bg_white flex justify-center items-center cursor-pointer hover:scale-95 hover:transition-all duration-75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="truncate w-40 mx-auto mt-2">
                {photo && photo.name}
              </div>
            </div>
          </label>
          <button className="btn">Add</button>
        </form>
      </div>
    </>
  );
}

export default AddFood;
