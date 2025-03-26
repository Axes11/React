"use client";

import { useState } from 'react';
import MainPageShip from "@/icons/MainPageShip";
import Apple from "@/icons/Apple";
import Google from "@/icons/Google";

const createUser = async (name, email, password) => {
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage('');

    try {
      const result = await createUser(name, email, password);
      setMessage('User created successfully');
      console.log(result);
    } catch (err) {
      // setError("Failed to create user. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <MainPageShip />
      <div className="flex items-start flex-col gap-4">
        <span className="text-3xl font-bold">SIGN UP</span>
        <span className="secondary font-bold">Start fight with other players in sea-battle online!</span>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="input w-100"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input w-100"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input w-100"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span className="text-red-500">{error}</span>}
          {message && <span className="text-green-500">{message}</span>}
          <button className="button" type="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
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
