'use client'
import { useState } from "react";

export default function CreateCategory({showCreateCategory}: {showCreateCategory : Boolean}){
    const [isVisible, setIsVisible] = useState(showCreateCategory || false);

    function handleCreateCategory(){
        console.log('created');
    }
    return(
        <div className="flex justify-center items-center m-2 w-full h-10">
            <form
                className="flex justify-center items-center w-1/2 h-10"
                onSubmit={ ()=> handleCreateCategory }
            >
                <div>
                    <label>Category name:</label>
                    <input
                        type="text"
                        className="rounded-md p-2 text-black mx-4"
                    />                
                </div>
                <div>
                    <button
                        type="submit"
                        className=" bg-orange-500 hover:bg-orange-800 transition-colors p-2 w-16 rounded-lg"
                    >
                        Save
                    </button>
                </div>
            </form>
            
        </div>
    )
}