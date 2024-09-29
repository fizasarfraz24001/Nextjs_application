import React from 'react';





export default function sciencefunction() {
      return (
        <div className="min-h-screen bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Science Sub-Departments</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              
              {/* Physics Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">Physics</h2>
                  <p className="mt-4 text-gray-600">
                    The study of matter, energy, and the fundamental forces of nature.
                  </p>
                </div>
              </div>
    
              {/* Chemistry Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">Chemistry</h2>
                  <p className="mt-4 text-gray-600">
                    The science of substances, their properties, reactions, and uses.
                  </p>
                </div>
              </div>
    
              {/* Biology Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">Biology</h2>
                  <p className="mt-4 text-gray-600">
                    The study of living organisms, their structure, function, and evolution.
                  </p>
                </div>
              </div>
    
              {/* Astronomy Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">Astronomy</h2>
                  <p className="mt-4 text-gray-600">
                    The study of celestial objects and the universe as a whole.
                  </p>
                </div>
              </div>
    
              {/* Earth Science Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">Earth Science</h2>
                  <p className="mt-4 text-gray-600">
                    The study of the Earth, including geology, meteorology, and oceanography.
                  </p>
                </div>
              </div>
    
              {/* Environmental Science Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">Environmental Science</h2>
                  <p className="mt-4 text-gray-600">
                    The study of the environment and solutions to environmental problems.
                  </p>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      );
    };
    
  

