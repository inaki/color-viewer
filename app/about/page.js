import React from 'react';
import { ArrowRight, PaintBucket, LayoutDashboard, FileCode, Palette, Layers, Zap, CheckCircle } from 'lucide-react';
import Navbar from '../components/NavBar';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">

        <Navbar className="my-10"/>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">CSS Color Analyzer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A powerful tool for visualizing, analyzing, and refactoring color usage across your applications
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <PaintBucket className="mr-2" size={24} />
          What is CSS Color Analyzer?
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            CSS Color Analyzer is a specialized tool designed to help developers and designers identify, visualize, and refactor color usage across their applications. By extracting and categorizing all color values from your CSS and JavaScript files, it provides comprehensive insights into your application&apos;s color palette.
          </p>
          <p>
            Whether you&apos;re planning a design system overhaul, implementing a dark mode, or simply trying to standardize your color usage, our analyzer gives you the data you need to make informed decisions.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <LayoutDashboard className="mr-2" size={24} />
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Palette className="mr-2" size={20} />
              Comprehensive Color Analysis
            </h3>
            <p>
              Extract and categorize all colors from your codebase, identifying duplicates, variations, and usage patterns across files.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Layers className="mr-2" size={20} />
              Multiple Visualization Methods
            </h3>
            <p>
              View your color data through various lenses: category-based horizontal bars, heat maps, distribution charts, and more.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FileCode className="mr-2" size={20} />
              Refactoring Suggestions
            </h3>
            <p>
              Receive intelligent recommendations for consolidating similar colors, standardizing formats, and implementing CSS variables.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Zap className="mr-2" size={20} />
              Optimization Potential
            </h3>
            <p>
              Identify opportunities to reduce CSS bloat, improve maintenance, and enhance visual consistency across your application.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <CheckCircle className="mr-2" size={24} />
          Why Analyze Your CSS Colors?
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <ul className="space-y-4">
            <li className="flex">
              <ArrowRight className="mr-2 flex-shrink-0 mt-1" size={18} />
              <span><strong>Design System Implementation:</strong> Establish a consistent color palette as the foundation of your design system.</span>
            </li>
            <li className="flex">
              <ArrowRight className="mr-2 flex-shrink-0 mt-1" size={18} />
              <span><strong>Technical Debt Reduction:</strong> Identify and eliminate color inconsistencies that have accumulated over time.</span>
            </li>
            <li className="flex">
              <ArrowRight className="mr-2 flex-shrink-0 mt-1" size={18} />
              <span><strong>Performance Optimization:</strong> Reduce CSS file size by consolidating duplicate or similar color definitions.</span>
            </li>
            <li className="flex">
              <ArrowRight className="mr-2 flex-shrink-0 mt-1" size={18} />
              <span><strong>Accessibility Improvements:</strong> Ensure color contrast ratios meet accessibility standards across your application.</span>
            </li>
            <li className="flex">
              <ArrowRight className="mr-2 flex-shrink-0 mt-1" size={18} />
              <span><strong>Theme Implementation:</strong> Prepare your codebase for implementing dark mode or multiple theme options.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Refactoring Process</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
          
          <div className="relative pl-12 pb-8">
            <div className="absolute left-2 top-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
            <h3 className="text-xl font-semibold mb-2">Analysis</h3>
            <p className="text-gray-700">
              Upload your CSS and JS files to generate a comprehensive analysis of your color usage patterns. Identify total colors, duplicates, and variations.
            </p>
          </div>
          
          <div className="relative pl-12 pb-8">
            <div className="absolute left-2 top-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
            <h3 className="text-xl font-semibold mb-2">Visualization</h3>
            <p className="text-gray-700">
              View your color data through various visualizations to better understand distribution and relationships between colors across your application.
            </p>
          </div>
          
          <div className="relative pl-12 pb-8">
            <div className="absolute left-2 top-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
            <h3 className="text-xl font-semibold mb-2">Planning</h3>
            <p className="text-gray-700">
              Use our recommendations to plan your refactoring strategy, establishing a standardized color palette and implementation approach.
            </p>
          </div>
          
          <div className="relative pl-12">
            <div className="absolute left-2 top-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">4</div>
            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
            <p className="text-gray-700">
              Execute your refactoring plan with our helper tools, implementing CSS variables, consolidating similar colors, and standardizing formats.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            Ready to simplify your CSS color management and improve your application&apos;s design consistency?
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Analyze Your Colors
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;