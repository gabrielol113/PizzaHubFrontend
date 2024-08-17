'use client';
import Header from "@/Components/Header";
import CreateCategory from "./Components/CreateCategory";

export default function categories(){
    return(
        <>
            <Header />
            <div className="flex flex-col w-dvh h-dvh  bg-blue-950">
                <div className="flex flex-col p-8 items-center h-1/2">
                    <h1>Categories</h1>
                    <CreateCategory />
                    <div className="flex flex-col mt-4 rounded-t-md border-2 w-1/2 h-1/2">
                        <button
                            onClick={ ()=> { console.log('clicked!') } }
                            className="flex w-full h-10 justify-center items-center border-2"
                        >
                            Create category
                        </button>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}