import prisma from "../../../../services/database";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    try{
        const { email, firstName, lastName } = await request.json();
        //if user exists return a error with user already exists
            const fullname = firstName + ' ' + lastName;
            const user = await prisma.user.update({
                where:{
                    email
                },
                data:{
                    email,
                    name: fullname,
                }
            })
            return NextResponse.json({ ok: true , user})
    }catch(e){
        console.log({ e })
    }
}