import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Transform Your Business with AI & XR
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cutting-edge AI integrations and immersive XR experiences to drive innovation and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Integrations Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Integrations</h3>
              <p className="text-gray-600 mb-6">
                Custom AI solutions, model development, and seamless integration with your existing systems.
              </p>
              <Link href="/services/ai-integrations" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* XR Development Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">XR Development</h3>
              <p className="text-gray-600 mb-6">
                Immersive AR/VR experiences, virtual training solutions, and interactive 3D applications.
              </p>
              <Link href="/services/xr-development" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* AI Enablement Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Enablement</h3>
              <p className="text-gray-600 mb-6">
                Strategic consulting, implementation support, and comprehensive AI transformation services.
              </p>
              <Link href="/services/ai-enablement" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">10+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Years Experience</h3>
              <p className="text-gray-600">Proven track record in AI and XR development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">200+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Projects Completed</h3>
              <p className="text-gray-600">Successful implementations across industries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">98%</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Consistently exceeding client expectations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">24/7</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">Round-the-clock technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and XR solutions can drive innovation and growth for your organization.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
} 