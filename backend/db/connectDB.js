import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
     console.log("Mongo Uri : ",process.env.MONGO_URI);
     const conn= await mongoose.connect(process.env.MONGO_URI);
     console.log(`MongoDB Connected : ${conn.connection.host}`);

    }
    catch(error){
        console.log("Error connection to MongoDB");
        console.log("Error : ", error);
        process.exit(1);

    }
}