'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image'

export default function Home() {
  const supabase = createClientComponentClient();
  

  return (
    <main>
      <h1>Hello !</h1>
    </main>
  )
}
