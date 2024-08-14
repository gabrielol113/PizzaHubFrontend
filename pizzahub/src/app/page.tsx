import { redirect } from "next/navigation";

type UserProps = {
    user: object
}

interface SessionProps {
  session: UserProps
}
export default function Home({session}: SessionProps) {
  if(session?.user == null) redirect('/auth');
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-blue-900 ">

    </main>
  );
}
