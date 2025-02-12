import User from "@/lib/Models/userModel"
import { dbConnect } from "@/lib/dbConnect"
import bcryptjs from "bcryptjs"
import { NextResponse, type NextRequest } from "next/server"

export async function POST(req: NextRequest){
    try{
        dbConnect()
        const data = await req.json()
        const existingUser = await User.findOne({email: data.email})
        if(existingUser){
            return NextResponse.json({message: "A user already exists with this email"})
        }
        const hashedPassword = await bcryptjs.hash(data.password, 10)
        const newUser = new User({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hashedPassword
        })
        await newUser.save()
        return NextResponse.json({message: "User registered successfully"}, {status: 201})
    }catch(error){
        console.error(error)
        return NextResponse.json({message: "Server Error"}, {status: 500})
    }
}