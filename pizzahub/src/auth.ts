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
                email: { label: "email", type: 'text' },
                password: { label: "password", type: "password" }
            },               
            async authorize({ email, password }, req){
                try{
                    const baseURL = process.env.BASE_URL;
                    //verify if user exist
                    const response = await fetch(`${baseURL}/api/user/verifyUser`,{
                        method: "POST",
                        body: JSON.stringify({ email, password }),
                        headers: { "Content-Type": "application/json"}
                    }) 
                    const user = await response.json();
                    if(user && response.ok){
                        return user.user;
                    }else{
                        return null;
                    }
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
    session:{
        strategy: "jwt"
    },
    secret: process.env.AUTH_SECRET,  
    callbacks: {
        async session({session, token}){
            session.user.id = token.sub!;
            console.log(session);
            return session;
        },
    },
        events: {
          signOut() {
            console.log('cookies deleted');
          },
        },
    
})
