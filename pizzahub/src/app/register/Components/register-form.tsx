'use client';
import { SyntheticEvent, useState } from "react"
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function RegisterForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleRegister(ev: SyntheticEvent){
        ev.preventDefault();
        const data = {
            email,password
        }
        console.log(data);
        signIn('credentials', { email, password, redirectTo: '/dashboard' })
    }
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-blue-900">
            <h1 className="mb-12 text-7xl">Pizza<span className="text-orange-500">Hub</span></h1>
            <div className="flex flex-col items-center justify-center w-1/2 h-min py-8 rounded-xl border-4 border-orange-500">
                <h1 className="text-3xl mb-8">Register</h1>
                <form className="flex flex-col" onSubmit={ (ev) => handleRegister(ev) }>
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
                    <div className="flex flex-col mb-4 ">
                        <label>Confirm password</label>
                        <input
                            className="p-2 rounded-lg text-black"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(ev) => setConfirmPassword(ev.target.value)}
                        />
                    </div>
                    <p>Don't have an account? Log <Link className="underline" href={'/login'}>here</Link></p>
                    <button
                        type="submit"
                        className="mt-8 p-2 hover:bg-orange-500 transition-colors duration-300 rounded-lg border-2 border-orange-500 "
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}