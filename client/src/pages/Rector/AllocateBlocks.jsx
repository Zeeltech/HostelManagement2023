import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
import Loader from "../../components/Loader";
import axios from "axios";
import { Navigate } from "react-router-dom";
import AddBlockPopUp from "./AddBlockPopUp";

function AllocateBlocks() {
  const [blocks, setBlocks] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    axios.get("/rector/get-blocks").then((res) => {
      if (res.status === 200) {
        setBlocks(res.data);
        setLoading(false);
        setFetch(false);
      }
    });
  }, [fetch]);

  if (!user || (user && user.role !== "Rector")) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex justify-center mb-6 text-2xl font-bold labels">
        All Blocks
      </div>
      <div className="relative rounded-2xl grid gap-x-6 gap-y-8 grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {blocks.length > 0 &&
          blocks.map((block) => (
            <div key={block._id}>
              <div className="w-full mx-auto rounded-2xl object-cover bg-bg_dark_section text-bg_white_font aspect-square mb-2 border-2 border-bg_dark_section">
                <div className="flex justify-center items-center h-full">
                  <h2 className="text-2xl font-bold mb-1 truncate">
                    {block.name}
                  </h2>
                </div>
              </div>
              <h2 className="text-sm font-medium truncate p-2">
                <div>{"Total Rooms: " + block.rooms.length}</div>
                <div>
                  {"Range: " +
                    block.rooms[0].number +
                    "-" +
                    block.rooms[block.rooms.length - 1].number}
                </div>
              </h2>
            </div>
          ))}
        <AddBlockPopUp fetch={fetch} setFetch={setFetch} />
      </div>
    </>
  );
}

export default AllocateBlocks;
