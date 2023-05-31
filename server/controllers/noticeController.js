const Notice = require("../models/noticeModel");

/* ADD NOTICE */
const addNotice = async (req, res) => {
  try {
    const { title, description } = req.body;

    const titleExists = await Notice.findOne({ title });

    if (titleExists) {
      return res.status(409).json({ message: "Notice already exists" });
    }

    const noticeDoc = await Notice.create({
      title,
      description,
    });
    return res.status(200).json(noticeDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* EDIT NOTICE */
const editNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const noticeDoc = await Notice.findById(id);

    if (!noticeDoc) {
      return res.status(404).json({ message: "Notice does not exists" });
    }

    noticeDoc.set({
      title,
      description,
    });
    await noticeDoc.save();
    res.status(200).json(noticeDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* GET ALL NOTICES */
const getAllNotices = async (req, res) => {
  try {
    const allNotices = await Notice.find({});
    if (allNotices) {
      return res.status(200).json(allNotices);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* DELETE NOTICE */
const deleteNotice = async (req, res) => {
  try {
    const {id} = req.params;
    const noticeDoc = await Notice.findById(id);
    
    if(!noticeDoc){
        return res.status(404).json({message:"Notice dose not exists"})
    }

    await Notice.deleteOne({_id:id})
    return res.status(200).json({message:"Notice deleted"})

  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* GET A NOTICE */
const getNotice = async (req,res)=>{
    try {
        const {id} = req.params;
        const noticeDoc = await Notice.findById(id)
        if(!noticeDoc){
            return res.status(404).json({message:"Notice dose not exists"})
        }
        
        return res.status(200).json(noticeDoc)
    } catch (error) {
        console.log(error);
        return res.json({ message: `Error occured ${error}` });
    
    }
}

module.exports = {
  addNotice,
  editNotice,
  getAllNotices,
  deleteNotice,
  getNotice,
};
