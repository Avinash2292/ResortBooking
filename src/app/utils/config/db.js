const { default: mongoose } = require("mongoose")


const DBConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Connected Successfullyy...")
    } catch (error) {
        console.log("Error while connecting to Database",error)
    }
}

export default DBConnection