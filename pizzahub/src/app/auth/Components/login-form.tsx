'use client';
import { SyntheticEvent, useState } from "react"
import { signIn } from "next-auth/react";
import Link from "next/link";
import GoogleButton from "react-google-button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email("Insert an email").min(1, "Email is necessary"),
    password: z.string().min(1, "Password is necessary"),
})
type FormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const { register, handleSubmit, formState:{ errors }} = useForm<FormData>({resolver: zodResolver(loginSchema)})

    async function handleLogin(data: FormData){
        const { email, password } = data;
        console.log('------------------------------')
        console.log({email, password})
        console.log('------------------------------')
        await signIn('credentials', { email, password, redirect: true},)
    }
    return (
        <div className="flex flex-col w-screen h-dvh justify-center items-center bg-blue-900">
            <h1 className="mb-12 text-7xl">Pizza<span className="text-orange-500">Hub</span></h1>
            <div className="flex flex-col items-center justify-center w-1/2 h-max rounded-xl border-4 border-orange-500">
                <h1 className="text-3xl mb-8">Login</h1>
                <form 
                    className="flex flex-col h-max"
                    onSubmit={ handleSubmit(handleLogin) }
                >
                    <div className="flex flex-col mb-4">
                        <label>Email</label>
                        <input
                            className="p-2 rounded-lg text-black"
                            type="text"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="flex flex-col mb-4 ">
                        <label>Password</label>
                        <input
                            className="p-2 rounded-lg text-black"
                            type="password"
                            {...register('password', { required: true })}
                        />
                    </div>
                    <p>Don't have an account? Register <Link className="underline" href={'/register'}>here</Link></p>
                    <button
                        type="submit"
                        className="mt-8 p-2 hover:bg-orange-500 transition-colors duration-300 rounded-lg border-2 border-orange-500 "
                    >
                        Send
                    </button>
                </form>
                <hr className=" mt-4 bg-slate-50 w-1/2"/>
                <span className="mt-4">Or</span>
                <div className="my-4">
                    <GoogleButton onClick={ ()=> signIn('google')} className=" mt-8 rounded-lg"></GoogleButton>
                </div>
            </div>
        </div>
    )
}