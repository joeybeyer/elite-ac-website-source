import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Phone, Mail, MapPin, Clock, Star, Shield, Wrench, Snowflake, Zap, CheckCircle } from 'lucide-react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Elite AC Services" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[var(--elite-blue)] transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-[var(--elite-blue)] transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-[var(--elite-blue)] transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[var(--elite-blue)] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:(813) 803-1628" className="hidden lg:flex items-center space-x-2 text-[var(--elite-blue)]">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(813) 803-1628</span>
            </a>
            <Button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--elite-blue)] mb-6">
                Your Trusted AC Repair & Installation Experts
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Professional heating and air conditioning services in Tampa. 
                Expert technicians, transparent pricing, and reliable solutions for your comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="btn-primary text-lg px-8 py-3" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  Get a Free Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-[var(--elite-blue)] text-[var(--elite-blue)] hover:bg-[var(--elite-blue)] hover:text-white" onClick={() => window.open('tel:(813) 803-1628', '_self')}>
                  Call Now: (813) 803-1628
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <Snowflake className="h-32 w-32 text-[var(--elite-cyan)]" />
                </div>
                <div className="absolute -top-4 -right-4 bg-[var(--elite-blue)] text-white px-4 py-2 rounded-full font-semibold">
                  24/7 Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--elite-blue)] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AC solutions for your home and business in Tampa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="service-card bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--elite-light-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Snowflake className="h-8 w-8 text-[var(--elite-blue)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--elite-blue)] mb-4">AC Installation</h3>
                <p className="text-gray-600">Professional installation of energy-efficient air conditioning systems</p>
              </CardContent>
            </Card>

            <Card className="service-card bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--elite-light-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-[var(--elite-blue)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--elite-blue)] mb-4">AC Repair</h3>
                <p className="text-gray-600">Fast and reliable repair services to get your AC running smoothly</p>
              </CardContent>
            </Card>

            <Card className="service-card bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--elite-light-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-[var(--elite-blue)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--elite-blue)] mb-4">Maintenance</h3>
                <p className="text-gray-600">Regular maintenance plans to keep your system running efficiently</p>
              </CardContent>
            </Card>

            <Card className="service-card bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--elite-light-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-[var(--elite-blue)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--elite-blue)] mb-4">Emergency Service</h3>
                <p className="text-gray-600">24/7 emergency repairs when you need us most</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--elite-blue)] mb-8">Why Choose Elite AC Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[var(--elite-cyan)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Certified professionals with years of experience in HVAC systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[var(--elite-cyan)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Upfront, honest pricing with no hidden fees or surprises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[var(--elite-cyan)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Response</h3>
                    <p className="text-gray-600">Fast response times to get your comfort restored quickly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[var(--elite-cyan)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Energy Efficient Solutions</h3>
                    <p className="text-gray-600">Modern, eco-friendly systems that save you money on energy bills</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 elite-bg-light-blue rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-24 w-24 text-[var(--elite-blue)] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--elite-blue)] mb-2">5-Star Service</h3>
                    <p className="text-[var(--elite-blue)]">Trusted by Tampa residents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding elite-bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--elite-blue)] mb-8">About Elite AC Services</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over 10 years of experience serving the Tampa Bay area, Elite AC Services has built a reputation 
              for reliable, professional, and honest HVAC services. Our team of certified technicians is committed 
              to providing exceptional comfort solutions for your home or business.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--elite-blue)] mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--elite-blue)] mb-2">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--elite-blue)] mb-2">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--elite-blue)] mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to experience elite comfort? Get in touch today!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--elite-blue)] mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 elite-bg-cyan rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600"><a href="tel:(813) 803-1628">(813) 803-1628</a></p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 elite-bg-cyan rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@eliteacservices.net</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 elite-bg-cyan rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Area</h4>
                    <p className="text-gray-600">Tampa, FL and surrounding areas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 elite-bg-cyan rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 8AM-6PM | Emergency: 24/7</p>
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="mt-8" style={{ width: '100%', height: '450px' }}>
                <h4 className="text-xl font-semibold text-[var(--elite-blue)] mb-4">Our Service Area</h4>
                <div style={{ width: '100%', height: '450px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.1316856639905!2d-82.5805329!3d28.081525799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2eb4fec670803%3A0xd035b0e12363e74f!2sElite%20AC%20services!5e0!3m2!1sen!2sus!4v1752862274000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elite AC Services Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[var(--elite-blue)] mb-6">Request a Quote</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--elite-cyan)] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--elite-cyan)] focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--elite-cyan)] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--elite-cyan)] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--elite-cyan)] focus:border-transparent">
                      <option>AC Installation</option>
                      <option>AC Repair</option>
                      <option>Maintenance</option>
                      <option>Emergency Service</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--elite-cyan)] focus:border-transparent"></textarea>
                  </div>
                  <Button className="w-full btn-primary text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="elite-bg-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Elite AC Services" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-blue-100 mb-4">
                Your trusted partner for all air conditioning needs in Tampa, FL.
              </p>
              <p className="text-blue-100">
                <strong>Your Comfort, Our Priority</strong>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li>AC Installation</li>
                <li>AC Repair</li>
                <li>Maintenance Plans</li>
                <li>Emergency Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <p><a href="tel:(813) 803-1628">(813) 803-1628</a></p>
                <p>info@eliteacservices.net</p>
                <p>Tampa, FL</p>
                <p>24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2025 Elite AC Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


