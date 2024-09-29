import React from 'react'

export default function page() {
  return (
    <div className="p-10">
    <h1 className="text-4xl font-bold">About uskt</h1>
    <p className="mt-4 text-lg">Learn more about the history and mission of our university.</p>
    {/* Programs Section */}
    <section className="p-10 md:p-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Undergraduate Studies</h3>
              <p className="text-lg">Offering a range of undergraduate programs designed to develop critical thinking, problem-solving, and leadership skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Graduate Studies</h3>
              <p className="text-lg">Our graduate programs are tailored for those looking to deepen their expertise and make significant contributions to their field.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Research Opportunities</h3>
              <p className="text-lg">Engage in groundbreaking research and collaborate with top scholars to advance knowledge across disciplines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="p-10 md:p-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Department of Computer Science</h3>
              <p className="text-md">Leading the way in computer science education and research.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Department of Business Administration</h3>
              <p className="text-md">Preparing students for the dynamic world of business and management.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Department of Engineering</h3>
              <p className="text-md">Offering cutting-edge programs in various engineering disciplines.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Department of Social Sciences</h3>
              <p className="text-md">Exploring the complexities of society through rigorous academic inquiry.</p>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
