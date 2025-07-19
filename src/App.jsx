import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Linkedin, Github, Mail, Phone, MapPin, Menu, X } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-gray-900">HM</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('work')} className="text-gray-700 hover:text-blue-600 transition-colors">Work</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <Button className="hidden md:block bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
            Message Me
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('work')} className="block text-gray-700 hover:text-blue-600 transition-colors">Work</button>
              <button onClick={() => scrollToSection('skills')} className="block text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-full">
                Message Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main id="home" className="pt-24 flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-20 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 lg:pr-12 mb-8 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm Hamza Mousrij
          </h1>
          <h2 className="text-2xl lg:text-3xl mb-6">
            A <span className="text-blue-600 font-semibold">Software Developer</span>.
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Passionate and relentless Software Developer, dedicated to delivering high-quality solutions and always going the extra mile to exceed client expectations. 
            I thrive on tackling challenging projects and am committed to bringing your ideas to life with energy and precision.
          </p>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg mb-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Talk
          </Button>

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>hmousrij0@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Settat-Casablanca, Morocco</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/Mousrij" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </a>
            <a 
              href="https://github.com/khamzatMurj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative animate-float">
            {/* Main Profile Image */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <img src="/src/assets/profile.jpg" alt="Hamza Mousrij" className="w-full h-full object-cover" />
            </div>
            
            {/* Mobile Mockup */}
            <div className="absolute -bottom-4 -right-4 w-24 h-44 bg-gray-900 rounded-2xl p-1 hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
                <div className="text-xs text-gray-600 text-center">Portfolio</div>
                <div className="text-xs text-gray-400 text-center">Mobile View</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Programming Languages</h4>
              <p className="text-sm text-gray-600">Java, C, Python, JavaScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Cloud & DevOps CI/CD</h4>
              <p className="text-sm text-gray-600">Docker, Kubernetes, AWS, Gitlab CI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Web/Mobile Development</h4>
              <p className="text-sm text-gray-600">HTML, CSS, Spring Boot, Angular, React, React Native, Spring Cloud, XML, UML</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Security</h4>
              <p className="text-sm text-gray-600">Spring Security, Keycloak, JWT, OAuth2, OpenID</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">APIs</h4>
              <p className="text-sm text-gray-600">REST, SOAP</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Big Data</h4>
              <p className="text-sm text-gray-600">Kafka, RabbitMQ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Databases</h4>
              <p className="text-sm text-gray-600">MySQL, MongoDB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">AI/ML</h4>
              <p className="text-sm text-gray-600">Spring AI, n8n, LangChain4J, Scikit-learn</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold mb-2">Data Mining</h4>
              <p className="text-sm text-gray-600">AFC, ACP, Scikit-learn, Power Bi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <h4 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors">Advanced Microservices Architecture for Product Management</h4>
              <p className="text-gray-600 text-sm mb-4">
                Deployed a robust microservices application containerized with Docker and orchestrated with Kubernetes. Integrated Angular frontend with comprehensive security using Keycloak, OAuth2, and JWT. Implemented monitoring with Grafana, messaging with Kafka, and database migration with Flyway.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 transition-colors">Docker</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200 transition-colors">Kubernetes</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded hover:bg-purple-200 transition-colors">Angular</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <h4 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors">AI Chatbot for Mobile Customer Service Application: Coffee Shop</h4>
              <p className="text-gray-600 text-sm mb-4">
                Developed an AI-powered chatbot using Python and integrated it with React Native mobile application. Implemented RAG (Retrieval-Augmented Generation) with Pinecone vector database and Llama model.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 transition-colors">Python</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200 transition-colors">React Native</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded hover:bg-purple-200 transition-colors">Pinecone</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <h4 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors">Multimodal AI Integration in Java Applications</h4>
              <p className="text-gray-600 text-sm mb-4">
                Integrated multimodal AI capabilities into Java applications using Spring framework. Utilized LangChain4J for AI orchestration and PostgreSQL with PgVector for vector operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 transition-colors">Spring</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200 transition-colors">LangChain4J</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded hover:bg-purple-200 transition-colors">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <h4 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors">Mobile Application for Home Appliances</h4>
              <p className="text-gray-600 text-sm mb-4">
                Designed mobile application with React Native and implemented microservices backend architecture. Created separate services for web scraping and business logic using Spring Boot.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 transition-colors">React Native</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200 transition-colors">Spring Boot</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded hover:bg-purple-200 transition-colors">Microservices</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <h4 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors">Email Classification with Machine Learning</h4>
              <p className="text-gray-600 text-sm mb-4">
                Developed machine learning model for email classification using Python and scikit-learn. Deployed serverless solution on AWS using Lambda, S3, and API Gateway.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 transition-colors">Python</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200 transition-colors">Scikit-learn</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded hover:bg-purple-200 transition-colors">AWS Lambda</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <h4 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors">AI-Generated Short Video Content Creation</h4>
              <p className="text-gray-600 text-sm mb-4">
                Automated short video content generation using AI workflows and APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 transition-colors">n8n</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded hover:bg-green-200 transition-colors">AI APIs</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded hover:bg-purple-200 transition-colors">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">About Me</h3>
              <p className="text-gray-600 mb-4">
                I am a dedicated Software developer with a passion for freelancing in Cloud Computing, AI, Automation & DevOps. I strive to deliver high-quality solutions for clients, applying best practices and collaborating to bring innovative projects to life.
              </p>
              <p className="text-gray-600 mb-6">
                My expertise includes a wide range of programming languages, cloud and DevOps tools, web and mobile development frameworks, and AI/ML technologies. I am passionate about leveraging technology to solve real-world problems and continuously expanding my skill set.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">AWS Cloud Practitioner Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Full Stack Development Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cloud & DevOps Specialist</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-gray-600 text-lg mb-8">
            I'm actively seeking new opportunities to collaborate and help bring your ideas to life. Let's do it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Hamza Mousrij. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

