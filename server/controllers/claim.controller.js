import Claim from "../models/Claim.js";
import User from "../models/User.js";

export const claimPoints =async (req,res)=>{
    const {userId}=req.body;
    const awarded =Math.floor(Math.random()*10) + 1;
    const claim =await Claim.create({user: userId,awarded});
    await User.findByIdAndUpdate(userId,{$inc:{totalPoints:awarded}});
    res.json(claim);
};

export const leaderboard =async(_,res)=>{
    const ranked =await User.find().sort({totalPoints:-1}).select("name totalPoints").lean();
    res.json(
        ranked.map((u,idx)=>({...u,rank:idx+1}))
    );
};