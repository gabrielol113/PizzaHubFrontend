'use client';
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Header(){
    function handleLogout(){
        signOut();
    }
    return(
        <header className="flex justify-center items-center w-screen pt-2 h-12 bg-transparent">
            <div className="flex justify-end w-1/2">
                <Link href={'/'}>
                    <h1 className="flex text-center text-5xl">
                        Pizza<span className="text-blue-700 font-bold">Hub</span>
                    </h1>
                </Link>
            </div>
            <div className="flex w-1/2 mr-4 justify-end">
                <button type="button" onClick={ handleLogout }>
                    <svg className="w-[42px] h-[42px] hover:text-gray-500 transition-colors text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}