'use client'
import React, { useState } from 'react';
import Header from '../../Components/Header/';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const settingsSchema = z.object({
    email: z.string().email("Insert an email").min(1, "Email is necessary"),
    firstName: z.string().min(1, "First name is necessary"),
    lastName:  z.string().min(1, "Last name is necessary"),
    profileImg: z.instanceof(FileList),
})

type FormData = z.infer<typeof settingsSchema>;

export default function Settings(){ 
    const {data, status} = useSession();
    const [img, setImg] = useState();
    const fname = data?.user?.name?.split(' ')[0];
    const lname = data?.user?.name?.split(' ')[1];
    const userEmail = data?.user?.email!;
    console.log({fname,lname, userEmail});
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({resolver: zodResolver(settingsSchema,), defaultValues:{firstName: fname, lastName: lname, email: userEmail}})
    async function handleSave(data: FormData){
        const { email, firstName, lastName } = data;
        const response = await fetch('/api/user/updateUser', {
            method: 'POST',
            body: JSON.stringify({email, firstName, lastName})
        })
        if(response.ok){
            toast.success("User updated with success!");
        }
    }
    // function handleImage(e, data: FormData){
    //     console.log(data);
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setImg(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // }
    return(
        <div className='w-screen h-screen bg-blue-950'>
            <Header />
            <div className='flex flex-col my-8 p-8 justify-center items-center w-full border-2'>
                <h1 className='my-8 text-3xl'>Settings</h1>
                <form className='flex flex-col justify-center items-center' onSubmit={ handleSubmit(handleSave) }>
                    <div className='flex flex-col justify-center cursor-pointer border-dashed items-center border-2 border-orange-500 w-48 h-48 px-8 rounded-full'>
                        <label className='flex flex-col items-center cursor-pointer hover:blur-sm'>
                            <input 
                                className='hidden'
                                type='file'
                                id="dropzone"
                                accept='image/*' 
                                { ...register('profileImg', { required: false })}
                            />
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className='text-sm'>Click to upload or drag and drop</p>
                        </label>
                    </div>
                    <div className="flex flex-col mb-4 space-y-4">
                        <label>Email</label>
                        <input
                            className="p-2 hover:ring-4 rounded-lg text-black"
                            type="text"
                            placeholder='Insert your email'
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label>First Name</label>
                        <input
                            className="p-2 hover:ring-4 rounded-lg text-black"
                            type="text"
                            placeholder='Insert your first name'
                            {...register('firstName', { required: true })}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label>Last Name</label>
                        <input
                            className="p-2 hover:ring-4 rounded-lg text-black"
                            type="text"
                            placeholder='Insert your last name'
                            {...register('lastName', { required: true })}
                        />
                    </div>
                    <div>
                        <button 
                            type='submit'
                            className='bg-green-800 transition-colors hover:bg-green-950 w-24 rounded-lg px-4 py-2'
                        >
                                Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}