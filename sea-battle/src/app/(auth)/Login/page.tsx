"use client";

import MainPageShip from "@/icons/MainPageShip";
import Apple from "@/icons/Apple";
import Google from "@/icons/Google";
import Success from "@/icons/Success";
import Error from '@/icons/Error';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from "next/navigation";

const redirectToGame = (to: string) => {
      const currentPath = window.location.pathname;
      if (currentPath !== `/${to}`) {     
            redirect(`/${to}`);
      }
};

const loginUser = async (name: string, password: string) => {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password }),
  }); 

  if (!response.ok) {
    const errorData = await response.json();
    throw { status: response.status, message: errorData.error || 'Unknown error' };
  }

  return await response.json();
};

export default function Register() {
  const notify = (message: string, style: string, progressColor: string) => toast(message, {
    autoClose: 3000,
    className: style,
    progressClassName: progressColor,
  }); 

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = async (data: any) => {
    try {
      const res = await loginUser(data.name, data.password);
      notify("Loginned successfully!", "black-background", "progress-success");
  
      reset();

      console.log(res)

      // setTimeout(redirectToGame("Game"), 3100);
    } catch (error: any) {
      if (error.status === 400) {
        notify("Login or password are wrong!", "black-background", "progress-error");
      }else {
        notify("An unexpected error occurred! Try again later...", "black-background", "progress-error");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ToastContainer />
      <MainPageShip />
      <div className="flex items-start flex-col gap-4">
        <span className="text-3xl font-bold">Login</span>
        <span className="secondary font-bold">Start fight with other players in sea-battle online!</span>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className='relative'>
            <input
              className="input w-100"
              placeholder="Name or email"
              type="text"
              {...register("name")}
            />
          </div>
          <div className='relative'>
            <input
              className="input w-100"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
          </div>
          <button className="button" type="submit">Login</button>
        </form>

        <div className="w-100 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Google />
            <Apple />
          </div>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <span className="text-gray-500 hover:text-sky-400 cursor-pointer" onClick={() => redirectToGame("Register")}>Dont have an account?</span>
            <span className="text-gray-500 hover:text-sky-400 cursor-pointer">Forgot password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
