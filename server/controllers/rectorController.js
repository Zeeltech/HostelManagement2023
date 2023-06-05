const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Blocks = require("../models/blocksModel");
const User = require("../models/userModel");

const allocateBlock = async (req, res) => {
  try {
    const { name, start, end, capacity } = req.body;
    const isAllocated = await Blocks.findOne({ name: name });
    if (isAllocated) {
      await isAllocated.save();
      return res.status(409).json(isAllocated);
    } else {
      const blockDoc = await Blocks.create({ name: name });
      blockDoc.rooms = [];
      for (let i = start; i <= end; i++) {
        const room = {
          number: i,
          capacity: capacity,
        };
        blockDoc.rooms.push(room);
      }
      await blockDoc.save();
      return res.status(200).json(blockDoc);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

const getAllBlocks = async (req, res) => {
  try {
    const isAllocated = await Blocks.find({});
    return res.status(200).json(isAllocated);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

const allocateStudent = async (req, res) => {
  try {
    const { id } = req.params; // BLOCK ID
    const { roomNumber, studentId } = req.body;

    const blockDoc = await Blocks.findById(id);
    if (!blockDoc) {
      return res.status(404).json({ message: "Block not found" });
    }

    let currentRoom = blockDoc.rooms.find(
      (room) => String(room.number) === String(roomNumber)
    );

    if (!currentRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    if (currentRoom.allocatedStudents.length >= currentRoom.capacity) {
      return res.status(400).json({
        message: "The number of allocated users exceeds the room capacity",
      });
    }

    const isDuplicate = currentRoom.allocatedStudents.some(
      (user) => user._id.toString() === studentId
    );

    if (isDuplicate) {
      return res.status(400).json({
        message: "This student has already been allocated to this room.",
      });
    }

    currentRoom.allocatedStudents.push({ _id: studentId });
    const studentDoc = await User.findById({ _id: studentId });
    if (!studentDoc) {
      return res.status(404).json({ message: "Student not found" });
    }
    if (studentDoc.roomNumber != null) {
      return res
        .status(400)
        .json({
          message: `Student already exists in  room ${studentDoc.roomNumber}`,
        });
    }

    studentDoc.set({
      roomNumber,
    });
    await studentDoc.save();
    await blockDoc.save();

    return res.status(200).json(currentRoom);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};



module.exports = {
  allocateBlock,
  getAllBlocks,
  allocateStudent,
};
