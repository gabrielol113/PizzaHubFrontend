'use client';
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { toast, ToastContainer } from "react-toastify";


const registerSchema = z.object({
    email: z.string().email("Insert an email").min(1, "Email is necessary"),
    password: z.string().min(1, "Password is necessary"),
    confirmPassword: z.string().min(1, "Confirm password is necessary")
})

type FormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
    const baseURL= process.env.BASE_URL;
    const form = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(registerSchema)
    })
    async function handleRegister(data: FormData){
        console.log(baseURL);
        if(data.password === data.confirmPassword){
            try{
                    const { email, password} = data;
                    signIn('credentials', { email, password, redirectTo: '/dashboard' })
            }catch( error ){
                console.log(error);
            }
        }else{
            console.log("toast")
            toast.error("The password doens't match!")
        }
        
    }
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-blue-900">
            <ToastContainer />
            <h1 className="mb-12 text-7xl">Pizza<span className="text-orange-500">Hub</span></h1>
            <div className="flex flex-col items-center justify-center w-1/2 h-min py-8 rounded-xl border-4 border-orange-500">
                <h1 className="text-3xl mb-8">Register</h1>
                <form className="flex flex-col" onSubmit={ handleSubmit(handleRegister) }>
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
                    <div className="flex flex-col mb-4 ">
                        <label>Confirm password</label>
                        <input
                            className="p-2 rounded-lg text-black"
                            type="password"
                            { ...register('confirmPassword', { required: true }) }
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