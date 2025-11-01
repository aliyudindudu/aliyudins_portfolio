'use client';

import Image from 'next/image';
import DarkVeil from './DarkVeil';
import CardNav from './CardNav';
import BlobCursor from './BlobCursor';

export default function Home() {
  const navItems = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Me", href: "#about" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:contact@example.com" },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/aliyudindudu" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0">
        <DarkVeil 
          hueShift={180}
          noiseIntensity={0.1}
          scanlineIntensity={0.05}
          speed={0.5}
          scanlineFrequency={2}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>

      {/* Navigation */}
      <CardNav
       
     
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Cursor Effect */}
      <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Aliyudin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Front end developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and innovative design. 
              Passionate about creating solutions that make a difference.
            </p>
            <div className="flex gap-6 justify-center">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-transparent backdrop-blur-sm border border-white border-opacity-20 rounded-lg font-semibold transition-all hover:bg-white hover:bg-opacity-10 hover:text-black"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent backdrop-blur-sm border border-white border-opacity-20 rounded-lg font-semibold transition-all hover:bg-white hover:bg-opacity-10 hover:text-black"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  About Me
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  I am a front end developer and UI/UX designer. I love creating interactive experiences and solving complex problems 
                  through code.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  With a background in frontend development and UI/UX design,
                  I bring ideas to life with clean, efficient, and visually compelling solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Three.js'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/profile-photo.png"
                    alt="Aliyudin's Photo"
                    width={400}
                    height={384}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 - Pet Care Website FurEver */}
              <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/project1.png"
                    alt="Pet Care Website FurEver"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pet Care Website FurEver</h3>
                <p className="text-gray-400 mb-4">
                  FurEver is a modern website for pet care products built with React and Vite. This website provides an interactive and responsive experience for pet owners.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">React 18</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">Vite</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">JavaScript ES6+</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">HTML5 Audio API</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://furever-azure.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    View Demo
                  </a>
                  <a 
                    href="https://github.com/aliyudindudu/FurEver" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-600 hover:border-gray-500"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project 2 - Web Portfolio */}
              <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/project2.png"
                    alt="Web Portfolio"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Portfolio</h3>
                <p className="text-gray-400 mb-4">
                  A modern and responsive personal portfolio website showcasing projects, skills, and experience. Built with clean design principles and smooth animations for an engaging user experience.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">Tailwind CSS</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://portfolio-glass-morphism-aliyudin.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    View Demo
                  </a>
                  <a 
                    href="https://github.com/aliyudindudu/Portfolio_Glass_Morphism" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-600 hover:border-gray-500"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project 3 - Web Gym Membership */}
              <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/project3.png"
                    alt="Web Gym Membership"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Gym Membership</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive gym membership management system with member registration, workout tracking, and payment processing. Features a modern dashboard for both members and administrators.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">MongoDB</span>
                  <span className="px-3 py-1 bg-black border border-white rounded-full text-xs">Express.js</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://gym-membership-aliyudin.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    View Demo
                  </a>
                  <a 
                    href="https://github.com/aliyudindudu/Gym_membership" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-600 hover:border-gray-500"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to bring your ideas to life? Let&apos;s create something amazing together.
            </p>
            <div className="flex gap-6 justify-center">
              <a 
                href="mailto:contact@example.com" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Send Email
              </a>
              <a 
                href="https://github.com/aliyudindudu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-purple-600 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
              >
                Github
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-black/50 backdrop-blur-sm border-t border-purple-500/20 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand & Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Aliyudin</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Passionate developer creating innovative digital solutions. 
                  Let&apos;s build something amazing together.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media & Contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/aliyudindudu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                 
                 
                  <a 
                    href="mailto:contact@example.com" 
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-gray-400 text-sm">
                    <span className="block">📧 aliyudinsaptari07@gmail.com</span>
                   
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Aliyudin. All rights reserved. Built with ❤️ using Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

