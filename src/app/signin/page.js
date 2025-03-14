"use client"
// import { signIn } from '@/app/api/auth';

import { signIn } from "next-auth/react";

const page = () => {
  return (
    <form
      action={async () => {
        await signIn("github")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}

export default page
