import React from 'react';
import { Layout } from '../components';

const HomePage: React.FC = () => {
  return (
    <Layout title="Team B - Home">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Team B
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is the home page for Team B's project section.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature 1</h2>
            <p className="text-gray-600">Description of the first feature.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature 2</h2>
            <p className="text-gray-600">Description of the second feature.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature 3</h2>
            <p className="text-gray-600">Description of the third feature.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;