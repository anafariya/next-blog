"use client";

import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction}>
     <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-4 py-2 rounded border border-gray-300 mb-4 focus:outline-none focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 rounded border border-gray-300 mb-4 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-red-700 focus:outline-none focus:bg-pink-800"
          >
            Login with Credentials
          </button>
          {state?.error}
          <Link href="./register">
            {"Don't have an account?"}
            <b>Register</b>
          </Link>
    </form>
  )
};

export default LoginForm;
