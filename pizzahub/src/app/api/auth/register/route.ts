import prisma from "@/services/database";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    try{
        const { email, password } = await request.json();

        const user = await prisma.user.findFirst({
            where:{
                email: email
            },
            select:{
                id: true,
                password: true,
            }
        })
        if(user){
            return NextResponse.json({Error: "Wrong Password!"})
        }else{
            const user = await prisma.user.create({
                data:{
                    email,
                    password,
                    emailVerified: false,
                }
            })
        }
    }catch(e){
        console.log({ e })
    }
}