import { auth } from "@/auth"
import { redirect } from "next/navigation";
import Orders from "./Components/Orders/Orders";
import Header from "@/Components/Header";

export default async function Dashboard(){
    const session = await auth();
    console.log(session);
    if(!session) redirect('/auth')
    return(
        <div className="w-screen h-screen bg-blue-950">

            <Header />
            <h1>Dashboard</h1>
            <p>Hello, {session?.user?.name}!</p>
            <Orders />
        </div>
    )
}