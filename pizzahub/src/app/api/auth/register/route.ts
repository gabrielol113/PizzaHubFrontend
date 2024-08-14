import prisma from "@/services/database";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    try{
        const { email, password } = await request.json();
        console.log({ email, password })
        //Verify if user already exists
        const user = await prisma.user.findFirst({
            where:{
                email: email
            },
            select:{
                id: true,
            }
        })
        //if user exists return a error with user already exists
        if(user){
            return NextResponse.json({Error: "User Already exists!", ok: false}, { status: 403 })
        }else{
            const user = await prisma.user.create({
                data:{
                    email,
                    password,
                    emailVerified: false,
                }
            })
            return NextResponse.json({ ok: true , user})
        }
    }catch(e){
        console.log({ e })
    }
}