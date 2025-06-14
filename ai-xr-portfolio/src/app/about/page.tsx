import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Pioneering the future of AI and XR technology to transform businesses and create immersive experiences
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We're on a mission to democratize AI and XR technology, making it accessible and valuable for businesses of all sizes. Our team combines deep technical expertise with a passion for innovation to deliver solutions that drive real business impact.
              </p>
              <p className="text-gray-600">
                By bridging the gap between cutting-edge technology and practical business applications, we help organizations harness the power of AI and XR to transform their operations, enhance customer experiences, and drive growth.
              </p>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              {/* Add mission illustration or image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We push the boundaries of what's possible with AI and XR technology, constantly exploring new ways to solve complex problems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnership, working closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality solutions, maintaining rigorous standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden">
                {/* Add team member image here */}
              </div>
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-primary-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                Visionary leader with 15+ years of experience in AI and technology innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden">
                {/* Add team member image here */}
              </div>
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-primary-600 mb-4">CTO</p>
              <p className="text-gray-600">
                Technical expert specializing in AI architecture and XR development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden">
                {/* Add team member image here */}
              </div>
              <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
              <p className="text-primary-600 mb-4">Head of Innovation</p>
              <p className="text-gray-600">
                Leading our research and development efforts in emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to transform your business with cutting-edge AI and XR solutions.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
} 