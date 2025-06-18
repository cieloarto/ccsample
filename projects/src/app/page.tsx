export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Welcome to Our Company
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We create innovative digital solutions that help businesses grow and succeed. 
          From web development to consulting services, we&apos;ve got you covered.
        </p>
        <div className="space-x-4">
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="inline-block bg-transparent text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Fast & Reliable</h3>
          <p className="text-gray-600">
            Our solutions are built with performance and reliability in mind, 
            ensuring your business runs smoothly.
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💡</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
          <p className="text-gray-600">
            We stay up-to-date with the latest technologies to provide 
            cutting-edge solutions for your business needs.
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤝</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
          <p className="text-gray-600">
            Our experienced team provides ongoing support and guidance 
            throughout your project and beyond.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Proven Experience</h3>
            <p className="text-gray-600 mb-4">
              With years of experience in the industry, we have successfully 
              delivered projects for clients across various sectors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
            <p className="text-gray-600 mb-4">
              We follow rigorous testing and quality assurance processes to 
              ensure your project meets the highest standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
            <p className="text-gray-600 mb-4">
              We understand the importance of deadlines and strive to deliver 
              your project on time, every time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
            <p className="text-gray-600 mb-4">
              Our pricing is transparent and competitive, offering excellent 
              value for the quality of service we provide.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}