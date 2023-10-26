import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import * as myConst from "../../myConstants";
import axios from "axios";

function ProfilePhoto() {
  const { user } = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [profilePhotoPath, setProfilePhotoPath] = useState("");

  useEffect(() => {
    setProfilePhotoPath(myConst.BACKEND_URL + "/uploads/" + user.profilePhoto);
  }, [count]);

  async function photoHandler(ev) {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("profilePhoto", ev.target.files[0]);
    axios
      .put("/profile-photo-update", formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => {
        alert("Photo uploaded successfully");
        setCount((prev) => prev + 1);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div>
        <label>
          <input
            type="file"
            className="hidden cursor-pointer"
            onChange={photoHandler}
            name="img"
          />
          {user.profilePhoto ? (
            <>
              <img
                src={profilePhotoPath}
                // src={myConst.BACKEND_URL + "/uploads/" + user.profilePhoto}
                alt=""
                className="rounded-full object-cover aspect-square h-[13rem] hover:bg-black hover:opacity-70 cursor-pointer"
              />
            </>
          ) : (
            <>
              <img
                src={myConst.BACKEND_URL + "/uploads/default.png"}
                alt=""
                className="rounded-full object-cover aspect-square h-[13rem] hover:bg-black hover:opacity-70 cursor-pointer"
              />
            </>
          )}
        </label>
      </div>
    </>
  );
}

export default ProfilePhoto;
