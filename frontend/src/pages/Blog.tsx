import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to German Student Visa Application',
    excerpt: 'Everything you need to know about applying for a German student visa, including required documents and tips for success.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    author: 'Dr. Sarah Schmidt',
    date: 'March 15, 2024',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Top Scholarships for International Students in Germany',
    excerpt: 'Discover the best scholarship opportunities available for international students planning to study in Germany.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
    author: 'Marcus Weber',
    date: 'March 10, 2024',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'IELTS vs. TestDaF: Which Should You Choose?',
    excerpt: 'A comprehensive comparison of IELTS and TestDaF exams to help you decide which language test is right for you.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
    author: 'Emma Chen',
    date: 'March 5, 2024',
    readTime: '7 min read'
  }
];

const Blog = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-midnight-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Our Blog</h1>
            <p className="mt-4 text-xl text-gray-300">
              Insights and guides for your study abroad journey
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <button className="mt-4 text-sky-blue hover:text-sky-700">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-lg text-gray-500">
              Get the latest updates and insights delivered to your inbox
            </p>
            <form className="mt-8 max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-blue focus:border-sky-blue"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-sky-blue text-white rounded-md hover:bg-sky-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;