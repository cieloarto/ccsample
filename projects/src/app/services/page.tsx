export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Performance", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "Consulting Services",
      description: "Expert guidance on technology strategy and digital transformation.",
      features: ["Technology Assessment", "Architecture Design", "Performance Audits", "Team Training"]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance for your digital products.",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"]
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        We offer comprehensive digital solutions to help your business grow and succeed 
        in today&apos;s competitive market.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {service.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {service.description}
            </p>
            <h3 className="font-semibold mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today to discuss your project requirements and get a custom quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get in Touch
        </a>
      </div>
    </main>
  )
}