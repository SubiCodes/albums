'use client'

import { SignIn } from '@stackframe/stack'
import Image from 'next/image';

export default function Home() {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 min-h-screen'>
      <div className='flex flex-1 flex-col items-center justify-center gap-12'>
        <h1 className='text-4xl text-pink-400 font-bold italic'>Welcome to Albums!</h1>
        <Image
        src={'/login/login_image.png'}
        alt='Login Image'
        width={800}
        height={800}
        />
      </div>
      <div className='flex flex-col items-center justify-center '>
         <div className="w-full max-w-lg flex items-center justify-center"> 
          <SignIn />
        </div>
      </div>
    </div>
  );
}
