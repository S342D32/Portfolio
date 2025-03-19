import React from 'react';

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 p-4">
      <div className="max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-700 mb-4">If you can see this styled card with a violet gradient background, Tailwind CSS is working correctly!</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Violet</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Gradient</span>
          <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium">Background</span>
        </div>
        <button className="mt-6 w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default Test; 