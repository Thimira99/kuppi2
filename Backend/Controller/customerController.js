import { ObjectId } from "mongodb";
import mongoclient from "../db/db.js";

const customerCollection = mongoclient.db('customer').collection('customer');

//post
const post = async ({ Fname, age, gender }) => {
    try {
        const data = { Fname, age, gender };
        await customerCollection.insertOne(data);
        return data;
    } catch (error) {
        console.log(error);
    }


}

//get
const getAll = async () => {
    const allData = []
    var data = await customerCollection.find();
    await data.forEach(data => {
        allData.push(data)
    })
    return allData;

}


//get by id
const getById = async (id) => {
    const data = await customerCollection.findOne({ _id: ObjectId(id) });
    return data;
}

//delete
const deleteById = async (id) => {
    const data = await customerCollection.findOneAndDelete({ _id: ObjectId(id) })
}

//updtae
const updateData = async (id, data) => {
    const { Fname, age, gender } = data;

    await customerCollection.findOneAndUpdate({ _id: ObjectId(id) }, { $set: { Fname: Fname, age: age, gender: gender } });
    const details = customerCollection.findOne({ _id: ObjectId(id) });
    return details;

}


const getName = async (name) => {
    const data = await customerCollection.findOne({ Fname: name });
    return data;
}
export { post, getAll, getById, deleteById, getName, updateData };