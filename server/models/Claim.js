import { Schema,Types,model } from "mongoose";
const claimSchema = new Schema (
    {
        user:{type:Types.ObjectId,ref:"User",required : true},
        awarded : {type :Number, required : true,min : 1, max : 10},
    },
    {timestamps:true}
);
export default model ("Claim",claimSchema);