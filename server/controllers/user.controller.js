import User from "../models/User.js";

export const seedUsers = async(req,res)=>{
    const names=["Rahul", "Kamal", "Sanak", "Isha", "Aditi", "Manav", "Sara", "Omar", "Luna", "Vinay"];
    const existing =await User.countDocuments();
    if(existing) return res.status(409).json({msg:"User already seeded"});
    const docs = await User.insertMany(names.map(name=>({name})));
    res.json(docs);
};

export const listUsers = async(_, res)=>{
    const users = await User.find();
    res.json(users);
};
export const addUser = async(req,res)=>{
    console.log("Request body:", req.body);
    const {name}=req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const doc=await User.create({name});
    res.status(201).json(doc);

};