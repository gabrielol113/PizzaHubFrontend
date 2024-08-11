import { auth } from "@/auth"

export default async function Dashboard(){
    const session = await auth();
    console.log(session);
    return(
        <div>
            <h1>Dashboard</h1>
            <p>Hello, {session?.user?.name}!</p>
        </div>
    )
}