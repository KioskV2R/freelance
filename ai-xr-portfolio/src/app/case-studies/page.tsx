import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudiesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Discover how we've helped businesses transform their operations with AI and XR solutions
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                {/* Add case study image here */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Customer Service</h3>
                <p className="text-gray-600 mb-6">
                  How we helped a leading e-commerce platform reduce response times by 80% using AI-powered chatbots and natural language processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">AI Integration</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Customer Service</span>
                </div>
                <Link href="/case-studies/ai-customer-service" className="text-primary-600 font-semibold hover:text-primary-700">
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                {/* Add case study image here */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">XR Training Platform</h3>
                <p className="text-gray-600 mb-6">
                  Development of an immersive VR training platform for a manufacturing company, reducing training time by 60% and improving safety compliance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">XR Development</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Training</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Manufacturing</span>
                </div>
                <Link href="/case-studies/xr-training" className="text-primary-600 font-semibold hover:text-primary-700">
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                {/* Add case study image here */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Implementation of predictive analytics and machine learning for a financial services company, resulting in 40% better risk assessment.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">AI Enablement</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Analytics</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Finance</span>
                </div>
                <Link href="/case-studies/ai-analytics" className="text-primary-600 font-semibold hover:text-primary-700">
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                {/* Add case study image here */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AR Product Visualization</h3>
                <p className="text-gray-600 mb-6">
                  Creation of an AR platform for a furniture retailer, increasing customer engagement by 200% and reducing returns by 35%.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">XR Development</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Retail</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">AR</span>
                </div>
                <Link href="/case-studies/ar-visualization" className="text-primary-600 font-semibold hover:text-primary-700">
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and XR solutions can help you achieve similar results.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
} 