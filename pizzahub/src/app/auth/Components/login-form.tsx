'use client';
import { useState } from "react"
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-blue-900">
            <h1 className="mb-12 text-7xl">Pizza<span className="text-orange-500">Hub</span></h1>
            <div className="flex flex-col items-center justify-center w-1/2 h-1/2 rounded-xl border-4 border-orange-500">
                <h1 className="text-3xl mb-8">Login</h1>
                <form className="flex flex-col">
                    <div className="flex flex-col mb-4">
                        <label>Email</label>
                        <input
                            className="p-2 rounded-lg text-black"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-4 ">
                        <label>Password</label>
                        <input
                            className="p-2 rounded-lg text-black"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                    <p>Don't have an account? Register <Link className="underline" href={'/register'}>here</Link></p>
                    <button
                        onClick={() => signIn("credentials",)}
                        className="mt-8 p-2 hover:bg-orange-500 transition-colors duration-300 rounded-lg border-2 border-orange-500 "
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}