import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-8 text-center">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4">📚 Welcome to ReadItLater!</h1>
        <p className="text-lg mb-6">Your personal reading space to save and revisit articles anytime, anywhere.</p>
        <Link
          to="/add"
          className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Add Your First Article
        </Link>
      </div>

      {/* Section with stats and features */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Why Use ReadItLater?</h2>
        <div className="flex justify-center space-x-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Save Articles</h3>
            <p>Save articles from any source for easy reading later.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Organize Content</h3>
            <p>Keep your saved articles organized by topics and preferences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Read Anytime</h3>
            <p>Access your saved articles anytime, even offline.</p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
        <p className="text-lg mb-4">
          Here’s a featured article you might enjoy reading!
        </p>
        {/* Check if there are saved articles to display a preview */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">A Guide to Modern Web Development</h3>
          <p className="text-sm text-gray-600">Saved on: April 20, 2025</p>
          <Link
            to="/news"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Read Full Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
