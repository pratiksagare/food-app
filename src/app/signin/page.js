"use client"
import { signIn } from '@/app/api/auth';

// import { useSession, signIn, signOut } from "next-auth/react";
import React from 'react'

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
