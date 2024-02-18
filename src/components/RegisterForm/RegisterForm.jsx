"use client";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Register</h2>
        <form action={formAction} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordRepeat"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-pink-800"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-red-700 focus:outline-none focus:bg-pink-800"
          >
            Register
          </button>
          {state?.error && <p className="text-red-500">{state.error}</p>}
          <div className="text-center">
            <Link href="/login">
              <p className="text-pink-600 hover:underline">Have an Account? <b>Login</b></p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
