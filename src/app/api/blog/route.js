import {posts} from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        connectToDb()

        const post = await posts.find()
        return NextResponse.json(post)

    }
    catch(error) {
        console.log(error)
        throw new Error("Failed to fetch error")

    }
}