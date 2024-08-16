import prisma from "../../../../services/database";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    try{
        const { email, password } = await request.json();
            const user = await prisma.user.findFirst({
                where:{
                    email
                },
                select:{
                    id: true,
                    name: true,
                    email: true,
                    password: true,
                }
            })
            if(password === user?.password){
                return NextResponse.json({ ok: true , user})
            }else{
                return NextResponse.json({ ok: false })
            }
    }catch(e){
        console.log({ e })
    }
}