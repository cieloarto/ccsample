export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to our company. We are dedicated to providing excellent services 
          and solutions to our customers.
        </p>
        <p className="mb-4">
          Our team consists of experienced professionals who are passionate about 
          delivering high-quality results and exceeding expectations.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          To create innovative solutions that make a positive impact on our clients 
          and the community we serve.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Excellence in everything we do</li>
          <li>Customer-first approach</li>
          <li>Innovation and continuous improvement</li>
          <li>Integrity and transparency</li>
        </ul>
      </div>
    </main>
  )
}