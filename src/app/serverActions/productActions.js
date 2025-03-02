
"use server"

import DBConnection from "../utils/config/db"

export async function productAction(prouctDetails){
    await DBConnection()

    console.log(prouctDetails)
}