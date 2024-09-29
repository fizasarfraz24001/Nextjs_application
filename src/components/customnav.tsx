// components/SideNav.js
"use client "
import React from 'react';


export default function Customnav() {
 



    return (
      <aside className="w-64 bg-gray-800 text-white h-full">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6">Navigation</h2>
          <ul>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">About Us</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 mt-6 font-semibold">Admission Program</a>
              <ul className="mt-2 pl-4">
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Apply Now</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Program Details</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Scholarships</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    );
  }


