'use client'

import { SignIn } from '@stackframe/stack'
import { Button } from "@/components/ui/button"

export default function Home() {

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className='flex flex-1 items-center justify-center border'>
        <h1 className='text-4xl text-pink-400 font-bold'>Welcome to Albums!</h1>
        <Button className='bg-pink-400'>CLICK ME</Button>
      </div>
      <div className='flex flex-col items-center justify-center border'>
        {/* If signed out → show SignIn */}
        <SignIn />
      </div>
    </div>
  );
}
