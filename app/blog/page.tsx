import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";


export default function BlogPage() {
  return (
    <Container>
      <div className="animate-fade-in">
        <SectionTitle
          preTitle="Our Blog"
          title="Insights, Tutorials & Industry Trends"
        >
          Stay ahead of the curve with expert analysis, technical tutorials, and thought leadership
          on AI, blockchain, full-stack development, and emerging technologies.
        </SectionTitle>

        {/* Featured Article */}
        <div className="mt-16 overflow-hidden shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 text-white lg:p-12">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-white rounded-full bg-opacity-20">
                Featured Article
              </div>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                The Future of AI in Enterprise: Trends for 2026
              </h2>
              <p className="mb-6 text-lg text-white text-opacity-90">
                Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making
                to predictive analytics. Learn about the latest AI trends and how businesses can prepare for the AI-driven future.
              </p>
              <div className="flex items-center mb-6 space-x-4 text-sm">
                <span>By Sarah Chen</span>
                <span>•</span>
                <span>Dec 15, 2025</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <Link
                href="#"
                className="inline-block px-6 py-3 font-semibold text-blue-600 transition-all duration-300 transform bg-white rounded-lg hover:scale-105"
              >
                Read Article
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-white bg-opacity-10"></div>
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <div className="mb-4 text-8xl">🤖</div>
                  <div className="text-2xl font-bold">AI & Machine Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid gap-4 mt-16 md:grid-cols-3 lg:grid-cols-6">
          {["All", "AI/ML", "Web3", "Full-Stack", "Mobile", "Cloud", "Security"].map((category) => (
            <button
              key={category}
              className="px-4 py-2 font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Articles Grid */}
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            title="Building Production-Ready ML Models"
            excerpt="A comprehensive guide to deploying machine learning models in production environments with proper monitoring and scaling."
            author="Michael Rodriguez"
            date="Dec 10, 2025"
            readTime="12 min"
            category="AI/ML"
            categoryColor="from-blue-600 to-purple-600"
          />

          <BlogCard
            title="Smart Contract Security Best Practices"
            excerpt="Learn essential security patterns and common vulnerabilities to avoid when developing smart contracts for Ethereum and other blockchains."
            author="Emma Thompson"
            date="Dec 8, 2025"
            readTime="10 min"
            category="Web3"
            categoryColor="from-purple-600 to-pink-600"
          />

          <BlogCard
            title="Next.js 15: What's New and Worth Upgrading"
            excerpt="Explore the latest features in Next.js 15 including improved performance, new caching strategies, and enhanced developer experience."
            author="David Kim"
            date="Dec 5, 2025"
            readTime="8 min"
            category="Full-Stack"
            categoryColor="from-green-600 to-teal-600"
          />

          <BlogCard
            title="DeFi Protocol Design Patterns"
            excerpt="Deep dive into architectural patterns for building decentralized finance protocols, including AMMs, lending platforms, and yield farming."
            author="Alex Johnson"
            date="Dec 3, 2025"
            readTime="15 min"
            category="Web3"
            categoryColor="from-purple-600 to-pink-600"
          />

          <BlogCard
            title="Optimizing React Native Performance"
            excerpt="Practical tips and techniques to improve your React Native app's performance, reduce bundle size, and enhance user experience."
            author="Lisa Park"
            date="Nov 30, 2025"
            readTime="10 min"
            category="Mobile"
            categoryColor="from-orange-600 to-red-600"
          />

          <BlogCard
            title="Kubernetes Cost Optimization Strategies"
            excerpt="Learn how to reduce your Kubernetes infrastructure costs while maintaining performance and reliability in production environments."
            author="James Wilson"
            date="Nov 28, 2025"
            readTime="12 min"
            category="Cloud"
            categoryColor="from-blue-500 to-cyan-500"
          />

          <BlogCard
            title="Computer Vision with TensorFlow"
            excerpt="Build image classification and object detection models using TensorFlow. Includes practical examples and deployment strategies."
            author="Rachel Green"
            date="Nov 25, 2025"
            readTime="18 min"
            category="AI/ML"
            categoryColor="from-blue-600 to-purple-600"
          />

          <BlogCard
            title="Web3 Authentication Patterns"
            excerpt="Implement secure wallet-based authentication for your dApps using popular libraries and best practices."
            author="Tom Anderson"
            date="Nov 22, 2025"
            readTime="9 min"
            category="Web3"
            categoryColor="from-purple-600 to-pink-600"
          />

          <BlogCard
            title="GraphQL vs REST: Choosing the Right API"
            excerpt="A detailed comparison of GraphQL and REST APIs, including performance considerations, developer experience, and use cases."
            author="Sophie Martinez"
            date="Nov 20, 2025"
            readTime="11 min"
            category="Full-Stack"
            categoryColor="from-green-600 to-teal-600"
          />
        </div>

        {/* Newsletter Signup */}
        <div className="p-8 mt-16 text-white shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-lg">
              Get weekly insights on AI, blockchain, and software development delivered directly to your inbox.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 font-bold text-blue-600 transition-all duration-300 bg-white rounded-lg hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-white text-opacity-80">
              Join 10,000+ developers and tech leaders. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
            Previous
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">1</button>
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
            2
          </button>
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
            3
          </button>
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
            Next
          </button>
        </div>
      </div>
    </Container>
  );
}

function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  categoryColor
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
}) {
  return (
    <article className="flex flex-col transition-all duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
      <div className={`h-2 bg-gradient-to-r ${categoryColor} rounded-t-xl`}></div>
      <div className="flex flex-col flex-1 p-6">
        <div className="inline-block self-start px-3 py-1 mb-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {category}
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
          <Link href="#" className="hover:text-blue-600">
            {title}
          </Link>
        </h3>
        <p className="flex-1 mb-4 text-gray-600 dark:text-gray-300">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <span>{author}</span>
          <div className="flex items-center space-x-2">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
