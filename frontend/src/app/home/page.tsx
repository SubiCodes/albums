import React from 'react'
import { AuthGuard } from '@/util/checkUserExists'

function page() {
  return (
    <AuthGuard>
      <div className='flex flex-1 items-center justify-center border'>
        <h1 className='text-xl font-bold text-pink-400'>HOME</h1>
      </div>
    </AuthGuard>
  )
}

export default page
