'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-4 border-black shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="neobrutalism bg-primary text-white font-black text-xl px-4 py-2">
              RH
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-bold text-lg capitalize transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-black hover:text-primary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button className="neobrutalism bg-accent text-black font-bold px-4 py-2 md:hidden">
              MENU
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="neobrutalism bg-white p-8 transform -rotate-2">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  Hi, I&apos;m <span className="text-gradient">Rusdia Hamid</span>
                </h1>
              </div>
              <div className="neobrutalism bg-secondary text-white p-8 transform rotate-2">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Full Stack Developer & Creative Technologist
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Passionate about building innovative digital experiences that blend
                cutting-edge technology with creative design.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="button-primary"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="button-secondary"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="neobrutalism bg-accent w-80 h-80 mx-auto flex items-center justify-center transform rotate-3">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="text-black font-bold text-xl">Ready to Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  I&apos;m a passionate full-stack developer with expertise in modern web technologies.
                  I love creating intuitive user interfaces and robust backend systems that solve
                  real-world problems. My approach combines technical excellence with creative
                  problem-solving.
                </p>
              </div>
              <div className="card bg-light-gray">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Core Values</h3>
                <ul className="space-y-3">
                  {['Innovation', 'Quality', 'Collaboration', 'Continuous Learning'].map((value) => (
                    <li key={value} className="flex items-center space-x-3">
                      <div className="neobrutalism bg-accent w-8 h-8 flex items-center justify-center">
                        <span>✓</span>
                      </div>
                      <span className="font-bold text-lg">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card bg-secondary text-white">
              <h3 className="text-2xl font-bold mb-6">Technical Philosophy</h3>
              <p className="text-lg leading-relaxed mb-6">
                I believe in writing clean, maintainable code that stands the test of time.
                Every project is an opportunity to push boundaries and learn something new.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="neobrutalism bg-white text-black p-4 text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="font-bold">Years Experience</div>
                </div>
                <div className="neobrutalism bg-accent text-black p-4 text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="font-bold">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Full Stack Developer',
                company: 'Tech Company',
                period: '2022 - Present',
                description: 'Leading development of enterprise applications and mentoring junior developers.',
                technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
              },
              {
                title: 'Full Stack Developer',
                company: 'Digital Agency',
                period: '2020 - 2022',
                description: 'Built client websites and web applications using modern JavaScript frameworks.',
                technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker']
              },
              {
                title: 'Junior Developer',
                company: 'Startup Inc',
                period: '2019 - 2020',
                description: 'Developed and maintained web applications for various clients.',
                technologies: ['JavaScript', 'PHP', 'MySQL', 'Git']
              }
            ].map((job, index) => (
              <div key={index} className={`card ${index % 2 === 0 ? 'transform -rotate-1' : 'transform rotate-1'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
                    <p className="text-xl text-secondary font-semibold">{job.company}</p>
                  </div>
                  <div className="neobrutalism bg-accent text-black px-4 py-2 mt-2 md:mt-0">
                    <span className="font-bold">{job.period}</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="neobrutalism bg-light-gray text-black px-3 py-1 text-sm font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-secondary text-white">
              <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Science</h3>
              <p className="text-xl mb-4">University Name</p>
              <p className="text-lg mb-4">2015 - 2019</p>
              <p className="text-lg">
                Specialized in Software Engineering and Web Development.
                Graduated with honors.
              </p>
            </div>
            <div className="card bg-primary text-white">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="neobrutalism bg-white text-primary w-8 h-8 flex items-center justify-center">
                    <span>📜</span>
                  </div>
                  <span>AWS Certified Developer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="neobrutalism bg-white text-primary w-8 h-8 flex items-center justify-center">
                    <span>📜</span>
                  </div>
                  <span>Google Cloud Professional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="neobrutalism bg-white text-primary w-8 h-8 flex items-center justify-center">
                    <span>📜</span>
                  </div>
                  <span>React Advanced Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary">Frontend</h3>
              <div className="space-y-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="font-bold">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="neobrutalism bg-accent w-4 h-4"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-secondary">Backend</h3>
              <div className="space-y-2">
                {['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="font-bold">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="neobrutalism bg-primary w-4 h-4"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-black">Tools & Others</h3>
              <div className="space-y-2">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Agile'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="font-bold">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="neobrutalism bg-secondary w-4 h-4"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center">Let&apos;s Connect</h2>
          <div className="card bg-secondary text-white">
            <p className="text-xl text-center mb-8">
              I&apos;m always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="neobrutalism bg-white text-secondary w-10 h-10 flex items-center justify-center">
                      <span>📧</span>
                    </div>
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="neobrutalism bg-white text-secondary w-10 h-10 flex items-center justify-center">
                      <span>💼</span>
                    </div>
                    <span>linkedin.com/in/rusdia-hamid</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="neobrutalism bg-white text-secondary w-10 h-10 flex items-center justify-center">
                      <span>🐙</span>
                    </div>
                    <span>github.com/rusdiahamid</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <button className="button-accent w-full">
                  Open Email Client
                </button>
                <button className="neobrutalism bg-white text-secondary font-bold py-4 px-8 text-lg w-full">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="neobrutalism bg-primary text-black font-bold text-xl px-6 py-3 inline-block mb-4">
            © 2024 Rusdia Hamid
          </div>
          <p className="text-lg">
            Built with ❤️ using Next.js, React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
