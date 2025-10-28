const mongodb = require('../db/connect')
const ObjectId = require("mongodb").ObjectId

const getAll = async (req,res) => {
    const db=mongodb.getDb();
    const result = await db.collection('user').find()
    const lists = await result.toArray()
    res.status(200).json(lists[0])
        res.setHeader("Content-Type", "application/json")
};
module.exports = { getAll };