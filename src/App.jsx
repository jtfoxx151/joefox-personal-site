
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Joe Fox</h1>
      <p className="text-lg">Channel Business Manager | Sales & Marketing Leader</p>
      <img src="/joefox.jpg" alt="Joe Fox" className="mx-auto my-6 rounded-full w-40 h-40 object-cover" />
      <p className="my-4">Visit my LinkedIn or download my resume below.</p>
      <div className="space-x-4">
        <a href="mailto:jtfoxx151@gmail.com" className="text-blue-600 underline">Email</a>
        <a href="https://www.linkedin.com/in/josephtfox" className="text-blue-600 underline" target="_blank">LinkedIn</a>
      </div>
      <div className="mt-6">
        <a href="/JoeFox_Resume.pdf" download className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Download Resume</a>
      </div>
    </div>
  );
}
