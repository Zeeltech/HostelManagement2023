const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Blocks = require("../models/blocksModel");

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

module.exports = {
  allocateBlock,
  getAllBlocks,
};
