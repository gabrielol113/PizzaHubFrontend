import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

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
                try{
                    const baseURL = process.env.BASE_URL;
                    console.log(baseURL);
                    const response = await fetch(`${baseURL}/api/auth/register`,{
                        method: "POST",
                        body: JSON.stringify({email,password})
                    })
                    if(response.ok){
                        //redirect('/dashboard')
                        return await response.json() ?? null;
                    }
                    if(response.status === 403){
                        toast.error("User Already exists!")
                        return;
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
    pages:{
        signIn: ''
    },
    callbacks: {
        // async signIn({account, profile}): Promise<boolean | null | undefined>{
        //     if(account?.provider === "google"){
        //         return profile?.email_verified && profile.email?.endsWith("@gmail.com")
        //     }
        //     return true;
        // },
        async jwt({token, profile, account}){
            if(account){
                token.accessTOken = account.access_token;
                token.id = account.userId;
            }
            return token;
        },
        async session({session, token, user}){
            session.userId = token.sub!;
            return session;
        }
    }
})
