import { auth } from "@/auth";
import RegisterForm from "./Components/register-form";
import { redirect } from "next/navigation";

export default async function Register(){
    const session = await auth();
    if(session?.user) redirect('/dashboard');
    return(
        <RegisterForm />
    )
}