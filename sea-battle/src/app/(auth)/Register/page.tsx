"use client";

import { useState } from 'react';
import MainPageShip from "@/icons/MainPageShip";
import Apple from "@/icons/Apple";
import Google from "@/icons/Google";
import Success from "@/icons/Success";
import Error from '@/icons/Error';
import { error } from 'console';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const createUser = async (name: string, email: string, password: string) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await response.json();
  return data;
};

export default function Register() {
  const notify = () => toast("Registered successfully!");

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: "onChange"
  });
  
  const onSubmit = async (data: any) => {
    try {
      const result = await createUser(data.name, data.email, data.password);
      notify()
      console.log(result)
    } catch (error) {
      return 1;
    }
  };

  const nameValue = watch('name');
  const emailValue = watch('email');
  const passwordValue = watch('password');

  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />
      <MainPageShip />
      <div className="flex items-start flex-col gap-4">
        <span className="text-3xl font-bold">SIGN UP</span>
        <span className="secondary font-bold">Start fight with other players in sea-battle online!</span>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className='relative'>
            <input
              className="input w-100"
              placeholder="Name"
              type="text"
              {...register("name", {required: true, minLength: 3, maxLength: 12})}
              aria-invalid={errors.name ? "true" : "false"} 
            />
            <div className='IconInputWrapper'>
              {errors.name && <Error/>}
              {nameValue && !errors.name && <Success/>}
            </div>
          </div>
          <div className='relative'>
            <input
              className="input w-100"
              placeholder="E-mail"
              type="email"
              {...register("email", {required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
              aria-invalid={errors.email ? "true" : "false"} 
            />
            <div className='IconInputWrapper'>
              {errors.email && <Error/>}
              {emailValue && !errors.email && <Success/>}
            </div>
          </div>
          <div className='relative'>
            <input
              className="input w-100"
              placeholder="Password"
              type="password"
              {...register("password", {required: true, pattern: /^[A-Za-z0-9]+$/i, minLength: 8, maxLength: 20})}
              aria-invalid={errors.password ? "true" : "false"} 
            />
            <div className='IconInputWrapper'>
              {errors.password && <Error/>}
              {passwordValue && !errors.password && <Success/>}
            </div>
          </div>
          <button className="button" type="submit">Register</button>
        </form>

        <div className="w-100 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Google />
            <Apple />
          </div>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <span className="text-gray-500 hover:text-sky-400 cursor-pointer">Already have an account?</span>
            <span className="text-gray-500 hover:text-sky-400 cursor-pointer">Forgot password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
