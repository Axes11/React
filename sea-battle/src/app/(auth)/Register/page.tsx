"use client";

import MainPageShip from "@/icons/MainPageShip";
import Apple from "@/icons/Apple";
import Google from "@/icons/Google";
import Success from "@/icons/Success";
import Error from '@/icons/Error';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const createUser = async (name: string, email: string, password: string) => {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
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

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    mode: "onChange"
  });

  const forbiddenNames = ["admin", "god", "pidor", "gandon", "suka", "hitler", "1488", "crimea", "donbass", "huesos"];
  
  const onSubmit = async (data: any) => {
    try {
      if(forbiddenNames.some(name => data.name.includes(name))){
        notify("Nice try! But developer already took this names", "black-background", "progress-error");
      }else{
        await createUser(data.name, data.email, data.password);
        notify("Registered successfully!", "black-background", "progress-success");
  
        reset();
      }
    } catch (error: any) {
      if (error.status === 400) {
        notify("This user already exists!", "black-background", "progress-error");
      } else if (error.status === 500) {
        notify("Something went wrong! Try again later...", "black-background", "progress-error");
      } else {
        notify("An unexpected error occurred", "black-background", "progress-error");
      }
    }
  };
  
  let nameValue = watch('name');
  let emailValue = watch('email');
  let passwordValue = watch('password');

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
          </div>
        </div>
      </div>
    </div>
  );
}
