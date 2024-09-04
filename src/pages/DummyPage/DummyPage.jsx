// ExamplePage.tsx or ExamplePage.jsx

"use client";

import React from "react";
import { Reveal } from "../../lib/Reveal"; // Adjust import path based on your project structure

export default function ExamplePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-10">
      <Reveal>
        <div className="max-w-2xl">
          <h3 className="text-gray-500 text-sm mb-4 uppercase">Our Programs</h3>
          <h2 className="text-3xl font-bold mb-4">
            What <span className="text-orange-500">FUSION</span> has to offer
          </h2>
          <p className="text-gray-700">
            At FUSION, we offer many unique programs designed to help our members socialize and form lasting connections. Whether you’re honing your athletic skills with FUSION Fit at the ARC, connecting through our Mentorship Program, or supporting our Fundraising Program with a tasty bacon-wrapped hotdog, our internal programs provide a space for everyone to find their place in the FUSION community.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
