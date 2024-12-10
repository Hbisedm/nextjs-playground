'use client'

import { redirect } from 'next/navigation'

export default function Logo() {

  return (
            <h1 onClick={() => redirect('/')} className="text-2xl font-bold hover:underline hover:cursor-pointer" >Next Playground</h1>
          )
}