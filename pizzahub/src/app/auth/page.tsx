
import { auth } from "@/auth";
import LoginForm from "./Components/login-form";
import { redirect } from "next/navigation";

export default async function Auth(){
    const session = await auth();
    if(session?.user){
        redirect('/dashboard')
    }
    return <LoginForm />
}