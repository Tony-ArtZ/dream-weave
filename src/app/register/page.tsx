"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatching, setPasswordMatching] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatching(false);
      throw "Passwords do not match!";
    } else {
      setPasswordMatching(true);
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw error;
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) {
        throw error;
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <main className="grid place-items-center pt-4">
      <div className=" bg-stars fixed h-full w-full bg-repeat -z-20 bg-[20px]" />
      <div className=" bg-twinkling animate-twinkle fixed h-full w-[3000px] bg-repeat -z-10" />
      <form className="w-72 md:w-80 md:bg-light p-5 md:bg-opacity-25 rounded-xl flex justify-center items-center flex-col gap-4">
        <h1 className=" text-left text-5xl mb-4 text-light font-bold">
          New Here?
        </h1>
        {/* Email Field */}
        <div>
          <label className="text-left w-full">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="focus:invalid:border-pink-500 peer/email border-4 border-light mb-2 bg-mid-dark rounded-full w-full h-12 p-2 pl-4"
            type="email"
          />
          <span className="text-left w-full text-pink-500 px-4 peer-invalid/email:inline hidden">
            Invalid Email
          </span>
        </div>
        {/* Password Field */}
        <div>
          <label className="text-left w-full">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="focus:invalid:border-pink-500 peer/password border-4 border-light mb-2 bg-mid-dark rounded-full w-full h-12 p-2 pl-4"
            type="password"
          />
        </div>
        {/* Password Confirmation Field */}
        <div>
          <label className="text-left w-full">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="focus:invalid:border-pink-500 peer/password border-4 border-light mb-2 bg-mid-dark rounded-full w-full h-12 p-2 pl-4"
            type="password"
          />
          {!passwordMatching && (
            <span className="text-left w-full text-pink-500 px-4">
              Passwords do not Match!
            </span>
          )}
        </div>
        {/* Register Button */}
        <button
          onClick={signUp}
          className="font-main rounded-xl w-52 h-20 bg-light font-bold font-Inter text-dark hover:bg-transparent hover:text-light hover:border-2 hover:border-light transition-all ease-in-out duration-300"
        >
          Register
        </button>
        {/* OAuth Buttons */}
        <div>
          <button
            onClick={signInWithGoogle}
            className="bg-light w-12 rounded-xl grid place-items-center text-2xl text-mid-dark font-bold aspect-square hover:bg-transparent hover:text-light hover:border-2 hover:border-light transition-all ease-in-out duration-300"
          >
            <AiOutlineGoogle />
          </button>
        </div>
        <span className="text-light">
          Existing User?{" "}
          <button onClick={SignIn} className="font-bold text-white">
            Sign In
          </button>
        </span>
      </form>
      <Image
        src="bg.svg"
        alt="background"
        width={1500}
        height={1500}
        className="fixed bottom-0 object-cover w-screen h-40 -z-10 xl:h-fit"
      />
    </main>
  );
}
