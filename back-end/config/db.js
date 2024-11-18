import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://himanshusah2004:himanshusah2004@cluster0.nlzno.mongodb.net/snackmate').then(()=>console.log("DB Connected"));
}