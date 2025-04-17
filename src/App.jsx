
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-100">
        <img
          src="/joefox.png"
          alt="Joe Fox"
          className="w-40 h-40 rounded-full object-contain bg-white"
        />
        <h1 className="text-4xl font-bold">Joe Fox</h1>
        <p className="text-xl text-gray-600 mt-2">
          Channel Business Manager | Sales & Marketing Leader
        </p>
        <div className="flex gap-4 mt-4">
          <a href="mailto:jtfoxx151@gmail.com" className="text-blue-600 underline">Email</a>
          <a href="https://www.linkedin.com/in/josephtfox" className="text-blue-600 underline" target="_blank">LinkedIn</a>
        </div>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p>
          I'm a seasoned sales and marketing leader with over 15 years of experience in global
          channel development, business strategy, and digital marketing. I specialize in the
          electronic components industry, having worked across distribution, manufacturing, and channel sales.
          My career has focused on building scalable programs that drive revenue growth, enhance partner relationships,
          and deliver impactful marketing results.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Standex Electronics</h3>
            <p className="italic">Distribution Channel Manager | April 2024 – Present</p>
            <ul className="list-disc list-inside mt-2 text-left text-sm text-gray-700">
              <li>Managed NA distribution generating $7M in revenue</li>
              <li>Created design registration and inventory care programs</li>
              <li>Launched eCommerce strategy and new pricing process</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Ohmite MFG LLC</h3>
            <p className="italic">Channel Business Manager - Global | Jan 2020 – April 2024</p>
            <ul className="list-disc list-inside mt-2 text-left text-sm text-gray-700">
              <li>Grew global distributor revenue from $43M to $70M</li>
              <li>Implemented marketplace program with $450K sales</li>
              <li>Created tools to streamline quoting and pricing</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Mouser Electronics</h3>
            <p className="italic">Various Roles | Jun 2007 – Dec 2019</p>
            <ul className="list-disc list-inside mt-2 text-left text-sm text-gray-700">
              <li>Led marketing, supplier management, and web strategy</li>
              <li>Drove 42% growth with Vishay and won multiple awards</li>
              <li>Increased traffic, partnerships, and category revenue</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>MBA – Project Management, University of Dallas (2011)</li>
          <li>BBA – Madonna University (2005)</li>
        </ul>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <a
          href="/JoeFox_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Download Resume
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} Joe Fox
      </footer>
    </div>
  );
}
