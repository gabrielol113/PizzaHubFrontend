'use client';
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default  function Header(){   
    function handleLogout(){
        
        signOut({redirect: true});
    }
    return(
        <header className="flex bg-blue-950 justify-center items-center w-dvh pt-2 h-12">
            <div className="flex justify-end w-1/2">
                <Link href={'/'}>
                    <h1 className="flex text-center text-5xl">
                        Pizza<span className="text-blue-700 font-bold">Hub</span>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center w-1/2 mr-4 justify-end">
                <Link className="mr-4" href={'/dashboard'}>
                    <svg className="w-[46px] h-[46px] text-gray-800 hover:text-gray-500 transition-colors dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                <Link className="mr-4" href={'/settings'}>
                    <svg className="w-[48px] h-[48px] hover:text-gray-500 transition-colors text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                <button type="button" onClick={ handleLogout }>
                    <svg className="w-[42px] h-[42px] hover:text-gray-500 transition-colors text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}