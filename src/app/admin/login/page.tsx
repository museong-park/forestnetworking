"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/app/actions/admin";

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdmin, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-sm border border-border">
        <h1 className="mb-6 text-center text-2xl font-bold text-brand">Admin Login</h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-border px-3 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-stone-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-md border border-border px-3 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          {state?.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-md bg-brand py-2 font-medium text-white transition-colors hover:bg-brand-hover disabled:opacity-50"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
