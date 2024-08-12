import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await auth();
    console.log(session);
    if(!session) redirect('/auth')
    return(
        <div>
            <h1>Dashboard</h1>
            <p>Hello, {session?.user?.name}!</p>
        </div>
    )
}