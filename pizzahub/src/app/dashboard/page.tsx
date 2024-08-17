import { auth } from "@/auth"
import { redirect } from "next/navigation";
import Orders from "./Components/Orders/Orders";
import Header from "@/Components/Header";

export default async function Dashboard(){
    const session = await auth();
    console.log(session?.user);
    if(!session) redirect('/auth')
    return(
        <>
            <Header />
            <div className="w-dvh h-dvh pl-16 bg-blue-950">

                <h1>Dashboard</h1>
                <p>Hello, {session?.user?.name}!</p>
                <Orders />
            </div>
        </>
    )
}