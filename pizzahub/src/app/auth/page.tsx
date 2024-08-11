import { auth } from "@/auth"
import LoginForm from "./Components/login-form";
import RegisterForm from "./Components/register-form";

export default async function Auth(){
    const session = await auth();
    if(session?.user) 
        return <LoginForm />
    if(!session?.user)
        return <RegisterForm />
}