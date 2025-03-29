"use client";

import { redirect } from "next/navigation";

export default function Home() {
  const redirectToAuth = (to: string) => {
    const currentPath = window.location.pathname;
    if (currentPath !== `/${to}`) {
      redirect(`/${to}`);
    }
  };

  return (
    <div>
      <button className="button" onClick={() => redirectToAuth("Login")}>
        Login
      </button>
      <button className="button" onClick={() => redirectToAuth("Register")}>
        Register
      </button>
    </div>
  );
}
