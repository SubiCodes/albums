'use client'

import { SignIn, UserButton } from '@stackframe/stack'

export default function Home() {

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className='flex flex-1 items-center justify-center border'>
        <h1 className='text-4xl text-pink-400 font-bold'>Welcome to Albums!</h1>
      </div>
      <div className='flex flex-col items-center justify-center border'>
        {/* If signed out → show SignIn */}
        <SignIn />

        {/* If signed in → show UserButton (avatar, logout, profile menu) */}
        <UserButton />
      </div>
    </div>
  );
}
