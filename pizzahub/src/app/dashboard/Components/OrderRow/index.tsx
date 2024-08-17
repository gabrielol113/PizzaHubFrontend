'use client';

type OrderProps = {
    name: string
    table: number
    id: string
}

export default function OrderRow({name, table, id}: OrderProps){
    function isConcluded(){
        //the order was delivered for the table
        console.log("Concluded")
    }
    function deleteOrder(){
        // delete the order
        console.log("Deleted")
    }
    return(
        <li className="flex justify-center items-center w-full p-4 border-y-2 ">
            <div className="flex w-1/2 justify-between">
                <p>{name}</p>
                <p>{table}</p>
            </div>
            <div className="flex w-1/2 justify-end">
                <button
                    onClick={ isConcluded }
                    className="flex mr-4 hover:bg-green-950 transition-colors bg-green-700 rounded-md"
                >
                    <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                </button>
                <button
                    onClick={ deleteOrder }
                    className="mr-4 hover:bg-red-950 transition-colors bg-red-700 rounded-md"
                >
                    <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </button>
            </div>
        </li>
    )
}