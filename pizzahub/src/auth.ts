import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email" },
                password: { label: "Password", type: "password" }
            },               
            async authorize({ email, password }, req){
                console.log({email, password})
                try{
                    const response = await fetch(`http://localhost:3000/api/auth/register`,{
                        method: "POST",
                        body: JSON.stringify({email,password})
                    })
                    if(!response.ok) return null;
                     return (await response.json()) ?? null;

                }catch(e){
                    console.log({ e })
                }
            }, 
        }),
        GoogleProvider({
            clientSecret: process.env.GOOGLE_SECRET,
            clientId: process.env.GOOGLE_ID,
        }),
    ], 
    secret: process.env.NEXTAUTH_SECRET,   

})