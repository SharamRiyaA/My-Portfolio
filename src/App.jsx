import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Briefcase, 
  Send, 
  Menu, 
  X,
  ChevronRight,
  Database,
  LineChart,
  FileText,
  Award,
  Download,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2
} from 'lucide-react';

// Initialize EmailJS (Replace with your public key from https://dashboard.emailjs.com)
emailjs.init('ZXdZ7yHv0zZnOLl1Q');

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_wuvm0yb',  // EmailJS service ID
        'template_hqpdim8', // EmailJS template ID
        {
          to_email: 'riyasharam2004@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setSending(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const projects = [
    {
      title: "ResumeIQ - Smart Parsing Tool",
      description: "A web-based system to parse resumes and generate evaluation scores, with automated email workflows using n8n. Built a responsive frontend and secure backend using Flask and MySQL.",
      tags: ["Flask", "MySQL", "n8n", "JavaScript"]
    },
    {
      title: "Stock Price Analysis",
      description: "Real-time stock market data analysis using financial APIs to identify price trends and patterns with visual charts. Performed exploratory data analysis with Pandas and Matplotlib.",
      tags: ["Python", "Pandas", "Matplotlib", "YFinance"]
    },
    {
      title: "Task Manager Application",
      description: "Web-based application for managing daily tasks with full CRUD operations. Implemented Node.js backend and MySQL for persistent data storage.",
      tags: ["Node.js", "MySQL", "HTML/CSS"]
    },
    {
      title: "Trade Data Analysis",
      description: "Designed and managed a structured trade database. Performed complex SQL queries to calculate total investment and average prices.",
      tags: ["MySQL", "SQL Optimization", "Data Analysis"]
    }
  ];

  const skills = [
    { name: "Python (Data Analysis)", level: 90, category: "Languages" },
    { name: "Java", level: 80, category: "Languages" },
    { name: "SQL (MySQL)", level: 88, category: "Database" },
    { name: "Web (HTML/CSS/JS)", level: 92, category: "Frontend" },
    { name: "Flask & Node.js", level: 70, category: "Backend" },
    { name: "Financial Markets", level: 75, category: "Finance" }
  ];

  const certifications = [
    { name: "Python Programming", issuer: "BITS Information (2022)" },
    { name: "Java Programming", issuer: "Udemy" },
    { name: "Microsoft Office", issuer: "BITS Information (2022)" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black tracking-tight text-blue-600 uppercase">
            SHARAM RIYA.
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-semibold transition-colors hover:text-blue-600 ${activeSection === link.id ? 'text-blue-600' : 'text-slate-500'}`}>
                {link.name}
              </a>
            ))}
            <a 
              href="SharamRiya - Resume.pdf" 
              download="SharamRiya - Resume.pdf"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> CV
            </a>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-6 px-6 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-slate-600 hover:text-blue-600">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-blue-50/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform origin-top translate-x-1/2 -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span>Student & Aspiring Developer</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight text-slate-900">
              I am <span className="text-blue-600">Sharam Riya A</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium">
              Computer Science student at UCE Nagercoil. Specialized in Full Stack Development and Data Analysis with a strong interest in Financial Technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center transition-all shadow-lg shadow-blue-200">
                View My Projects
              </a>
              <a href="#contact" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-center transition-all border border-slate-200 shadow-sm">
                Get In Touch
              </a>
            </div>
            
            <div className="mt-16 flex items-center space-x-6">
              <a href="https://github.com/sharamriyaa" className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/sharamriya3174/" className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:riyasharam2004@gmail.com" className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 text-slate-900">About Me</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  I am a Computer Science student with a CGPA of 8.5, dedicated to building efficient, user-friendly applications and solving real-world problems.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  My technical expertise lies in Python and SQL, which I apply to data-driven problem solving. I am passionate about how technology can optimize financial markets and trading systems.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-black mb-6 text-slate-900">Education</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-4 border-blue-600">
                  <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600"></div>
                  <p className="text-blue-600 font-bold text-sm mb-1">2022 - 2026</p>
                  <h4 className="text-xl font-bold text-slate-900">BE in Computer Science & Engineering</h4>
                  <p className="text-slate-600 font-medium">University College of Engineering Nagercoil</p>
                  <p className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">CGPA: 8.5</p>
                </div>
                <div className="relative pl-8 border-l-4 border-slate-200">
                  <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-200"></div>
                  <p className="text-slate-400 font-bold text-sm mb-1">2022</p>
                  <h4 className="text-xl font-bold text-slate-900">XII Higher Secondary</h4>
                  <p className="text-slate-600 font-medium">Little Flower Girl's Higher secondary school Ramanputhoor</p>
                  <p className="text-slate-400 text-sm mt-1 font-semibold">Percentage: 8.65%</p>
                </div>
                <div className="relative pl-8 border-l-4 border-slate-200">
                  <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-200"></div>
                  <p className="text-slate-400 font-bold text-sm mb-1">2020</p>
                  <h4 className="text-xl font-bold text-slate-900">X Secondary Education</h4>
                  <p className="text-slate-600 font-medium">Little Flower Girl's Higher secondary school Ramanputhoor</p>
                  <p className="text-slate-400 text-sm mt-1 font-semibold">Percentage: 89%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12 text-slate-900">Professional Experience</h2>
          <div className="max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Full Stack Developer Intern</h3>
                  <p className="text-blue-600 font-bold text-lg">Geosensing and Imaging Consultancy</p>
                </div>
                <div className="px-4 py-2 bg-blue-600/10 text-blue-700 rounded-xl font-bold text-sm">
                  Jan 2026 — March 2026
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Developed responsive web pages using HTML, CSS, and JavaScript for real-time projects, ensuring cross-device compatibility.",
                  "Worked closely with team members to design, test, and improve website features through iterative feedback loops.",
                  "Debugged and optimized web applications to enhance performance and user experience, reducing load times and resolving critical UI issues."
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-100 text-sm text-slate-400 font-bold uppercase tracking-widest">
                Location: Melethambanoor, Kerala
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-4xl font-black text-center text-slate-900">Technical Skills</h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-900 font-black text-lg">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-4 text-xs text-slate-400 font-black uppercase tracking-widest">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Core Projects</h2>
            <p className="text-slate-500 font-medium">A focus on solving complex logic and data problems.</p>
          </div>
          <div className="hidden md:block">
            <span className="w-20 h-1 bg-blue-600 block rounded-full"></span>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] uppercase font-black tracking-widest bg-slate-50 text-blue-600 rounded-lg border border-blue-50">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center">Professional Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col justify-between">
                <div>
                  <Award className="w-8 h-8 mb-4 text-blue-200" />
                  <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                  <p className="text-blue-100 text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl shadow-blue-100 overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="p-12 md:w-2/5 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-black mb-6">Let's work together.</h2>
                <p className="text-slate-400 font-medium mb-12">I'm currently looking for internships and entry-level developer roles. Reach out and let's chat!</p>
                
                <div className="space-y-10">
                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Email</p>
                      <p className="font-bold text-base md:text-lg break-all">riyasharam2004@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">LinkedIn</p>
                      <p className="font-bold text-base md:text-lg">sharamriya3174</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-sm text-slate-500 font-bold tracking-tight">
                Nagercoil, Tamil Nadu, India
              </div>
            </div>
            
            <form className="p-12 md:w-3/5 space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                    placeholder="Sharam Riya A" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                    placeholder="sharam@email.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              {submitStatus === 'success' && <p className="text-green-600 font-bold">✓ Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-600 font-bold">✗ Error sending message. Please try again.</p>}
              <button 
                disabled={sending}
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-100"
              >
                {sending ? 'Sending...' : 'Send Message'} <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-2xl font-black text-blue-600 uppercase">
              SHARAM RIYA A
            </div>
            <div className="flex space-x-12 text-sm font-bold text-slate-400">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Sharam Riya A
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;