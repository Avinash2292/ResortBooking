
"use server"

import DBConnection from "../utils/config/db"
import UserModel from "../utils/models/User"


export async function registerAction(registerDetails){
    await DBConnection()

    console.log(registerDetails)

    try {
        await UserModel.create({
            username : registerDetails.username,
            email : registerDetails.email,
            password : registerDetails.password
        })

        return {success:true}
    } catch (error) {
        console.log("Failed to register details",error)   
    }
}
