import React from 'react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    {/* Hero Section */}
    <div 
      className="relative h-[80vh] bg-cover bg-center bg-fixed flex items-center justify-center" 
      
    >
      <div className="text-center text-white p-10 bg-opacity-60 bg-black rounded-md">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our University</h1>
        <p className="mt-4 text-lg md:text-2xl">Explore our programs, departments, and more.</p>
      </div>
    </div>

  

    {/* Call to Action Section */}
    <section className="p-10 md:p-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join Us</h2>
        <p className="text-lg md:text-xl mb-8">Take the first step towards a brighter future. Apply now and become part of our vibrant community.</p>
        <a href="/apply" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Apply Now</a>
      </div>
    </section>
  </div>

  )
}
