import React from 'react'

export default function About() {
  return (
    <div>
        <section className=" py-12 max-w-6xl mx-auto  text-gray-800 px-3 md:px-1">
  <h1 className="text-4xl font-bold mb-6  text-indigo-400">About CrowdFund Connect</h1>

  <p className="mb-4">
    <strong>CrowdFund Connect</strong> is a decentralized, frontend-only crowdfunding platform designed to make supporting meaningful causes simple and interactive.
    Built entirely with <strong>React</strong> and <strong>Tailwind CSS</strong>, our goal is to offer users a seamless experience in discovering and contributing to impactful projects — all without relying on a backend or external APIs.
  </p>

  <p className="mb-4">
    We believe that technology should empower people to create change. With our virtual coin system and user-friendly design, CrowdFund Connect allows users to:
  </p>

  <ul className="list-disc list-inside mb-4 space-y-1">
    <li>💰 Add virtual coins to their profile</li>
    <li>🔍 Browse various campaigns ranging from social causes to tech innovations</li>
    <li>🎯 Donate using coins and track progress of the campaigns they support</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-2 mt-8 text-indigo-500">What Makes Us Different?</h2>
  <p className="mb-4">
    Unlike traditional platforms, CrowdFund Connect handles everything <strong>locally</strong> using React's <strong>Context API</strong> and a <strong>local JSON data file</strong>.
    It’s fast, simple, and ideal for demonstrating how frontend technologies alone can drive functional web experiences.
  </p>

  <h2 className="text-2xl font-semibold mb-2 mt-8 text-indigo-500">Our Mission</h2>
  <p>
    To create a minimal yet complete crowdfunding experience for educational, prototype, and demo purposes.
    Whether you're a developer learning React or someone interested in UI/UX flows in donation-based systems — CrowdFund Connect is here to inspire and educate.
  </p>
</section>

    </div>
  )
}
