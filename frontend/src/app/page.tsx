'use client'

import { SignIn, UserButton } from '@stackframe/stack'

export default function Home() {

  return (
    <div>
      {/* If signed out → show SignIn */}
      <SignIn/>

      {/* If signed in → show UserButton (avatar, logout, profile menu) */}
      <UserButton />
    </div>
  );
}
