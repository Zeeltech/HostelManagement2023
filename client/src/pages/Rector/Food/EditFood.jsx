import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../../UserContext";
import * as myConstants from "../../../../myConstants";

function EditFood() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [fromDB, setFromDB] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/food/get-food/" + id).then((res) => {
      const { data } = res;
      setName(data.name);
      setPhoto(data.photo);
      setFromDB(true);
    });
  }, [id]);

  async function updateFood(ev) {
    ev.preventDefault();
    if (name == "" || photo == null) {
      toast.error("Please fill all fields");
    } else {
      try {
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("name", name);

        await axios
          .put("/food/edit-food/" + id, formData, {
            headers: { "Content-type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Added Successfully");
              setRedirect(true);
            }
          });
      } catch (err) {
        if (err.response.status === 409) toast.error("User already exists");
        console.log(err);
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="give-height flex justify-center items-center mt-16 text-bg_white_font font-semibold text-sm">
        <form
          className="bg-bg_white text-bg_dark_font rounded-md shadow-lg shadow-bg_light_section border-2 border-bg_dark_section p-7 flex flex-col justify-center items-center gap-2"
          onSubmit={updateFood}
        >
          <div className="text-xl mb-4">Edit Food item</div>

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
            <div className="flex items-center gap-4">
              <div>
                Upload&nbsp;item&nbsp;photo
                <input
                  type="file"
                  onChange={(ev) => {
                    setPhoto(ev.target.files[0]);
                    setFromDB(false);
                  }}
                  name="photo"
                  className="hidden mt-1 mb-2"
                />
              </div>
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
          </label>
          {photo && fromDB && (
            <div className="grid">
              <img
                className="aspect-square object-cover h-60 w-60"
                src={myConstants.BACKEND_URL + "/uploadsFood/" + photo}
              ></img>
            </div>
          )}
          {photo && !fromDB && (
            <div className="truncate w-40 mx-auto mt-2">{photo.name}</div>
          )}
          <button className="btn">Update</button>
        </form>
      </div>
    </>
  );
}

export default EditFood;
