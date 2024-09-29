import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
     <div className="p-10">
    <h1 className="text-4xl font-bold">Departments</h1>
    <p className="mt-4 text-lg">Discover the different departments at our university.</p><br></br>
    <div className="flex justify-right items-center">
  <Link href="/Department/Science">
    <div className="bg-blue-950 text-white text-right font-bold pr-4 p-4">
      Science
    </div>
  </Link>
</div>
  </div>

  )
}
