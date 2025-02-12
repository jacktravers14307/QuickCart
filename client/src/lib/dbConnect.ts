import mongoose from "mongoose";

export async function dbConnect(){
    try{
        const response = await mongoose.connect("mongodb://localhost:27017/QuickCart")
        return response
    }catch(error){
        console.log(error)
        process.exit()
    }
}