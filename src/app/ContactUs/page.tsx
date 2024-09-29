import React from 'react'

export default function page() {
  return (
    <div className="p-10">
    <h1 className="text-4xl font-bold">ContactUs</h1>
    <p className="mt-4 text-lg">Get in touch with us for more information.</p>
    <section className="p-10 md:p-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p> Main, Daska Rd, Sialkot, Punjab, Pakistan</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+92-523575518-20 (144)</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>info@uskt.edu.pk </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  )
}
