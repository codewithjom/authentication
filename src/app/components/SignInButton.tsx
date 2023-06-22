'use client'

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function SignInButton() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className='flex items-center'>
        <p className='mr-8 px-4 py-2 rounded-lg border border-gray-800'>{session.user.name}</p>
        <button onClick={() => signOut()} className='bg-red-800 px-4 py-2 rounded-lg hover:bg-red-700'>
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className='bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-700'>
      Sign In
    </button>
  )
}
