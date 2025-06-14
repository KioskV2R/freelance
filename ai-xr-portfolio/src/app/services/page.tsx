import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Comprehensive AI and XR solutions to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* AI Integrations */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Integrations</h2>
              <p className="text-gray-600 mb-6">
                Seamlessly integrate artificial intelligence into your existing systems and workflows. Our expert team specializes in:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom AI model development and deployment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integration with existing tools and platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data strategy and processing pipelines</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Workflow automation and optimization</span>
                </li>
              </ul>
              <Link href="/services/ai-integrations" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              {/* Add AI integration illustration or image here */}
            </div>
          </div>
        </div>
      </section>

      {/* XR Development */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              {/* Add XR development illustration or image here */}
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">XR Development</h2>
              <p className="text-gray-600 mb-6">
                Create immersive experiences that transform how your users interact with your brand. Our XR solutions include:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AR/VR application development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Virtual training and simulation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive 3D experiences</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mixed reality solutions</span>
                </li>
              </ul>
              <Link href="/services/xr-development" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Enablement */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Enablement</h2>
              <p className="text-gray-600 mb-6">
                Transform your organization with strategic AI implementation and support. Our enablement services include:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI readiness assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategy development and planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Implementation support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team training and knowledge transfer</span>
                </li>
              </ul>
              <Link href="/services/ai-enablement" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              {/* Add AI enablement illustration or image here */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and XR solutions can transform your business.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
} 