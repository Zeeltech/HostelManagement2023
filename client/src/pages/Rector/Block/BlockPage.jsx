import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlockPage = () => {
  const { id } = useParams();
  const [block, setBlock] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get("/rector/get-block/" + id).then((res) => {
        if (res.status === 200) {
          setBlock(res.data);
        }
      });
    }
  }, [id]);

  function roomOccupancy(capacity, allocatedStudents) {
    let boxes = [];

    for (let i = 0; i < capacity; i++) {
      if (allocatedStudents.length > i) {
        // If there is an allocated student at this index
        boxes.push(
          <div
            key={i}
            className="w-4 h-4 m-1 rounded-full bg-bg_dark_red"
          ></div>
        );
      } else {
        // Otherwise, the box is empty
        boxes.push(
          <div key={i} className="w-4 h-4 m-1 rounded-full bg-green-500"></div>
        );
      }
    }

    return <div className="flex">{boxes}</div>;
  }

  return (
    <>
      {block && (
        <div className="">
          <div className="flex justify-center mb-6 mr-2 mt-2 text-2xl font-bold labels">
            Block {block.name}
            {console.log(block)}
          </div>
          <div className="grid grid-cols-4 gap-3 ml-2 mr-4 h-[40vh] overflow-y-scroll border-2 border-black p-4 rounded-md">
            {block.rooms.map((room) => (
              <div
                className="bg-gray-200 border border-black rounded-lg p-2 flex flex-col items-center"
                key={room.number}
              >
                <div>{room.number}</div>
                <div className="">
                  {roomOccupancy(room.capacity, room.allocatedStudents)}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            
          </div>
        </div>
      )}
    </>
  );
};

export default BlockPage;
