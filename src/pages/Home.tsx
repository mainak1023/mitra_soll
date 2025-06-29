import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Calculator } from 'lucide-react';
import EMICalculator from '../components/EMICalculator';

const Home = () => {
  const products = [
    {
      name: 'Mini Excavators',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Compact and versatile excavators for small to medium projects'
    },
    {
      name: 'Construction Excavators',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Heavy-duty excavators for construction and infrastructure projects'
    },
    {
      name: 'Mining Excavators',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Robust excavators designed for mining and quarrying operations'
    },
    {
      name: 'Wheel Loaders',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Efficient wheel loaders for material handling and loading'
    }
  ];

  const solutions = [
    {
      title: 'Genuine Spares',
      description: 'Original Tata Hitachi spare parts for optimal performance',
      icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
    },
    {
      title: 'Expert Services',
      description: 'Professional maintenance and repair services',
      icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
    },
    {
      title: 'Mobile Workshops',
      description: 'On-site service and repair at your location',
      icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
    }
  ];

  const locations = [
    'Durgapur HQ - Main Office & Service Center',
    'Siliguri HQ - Regional Office & Service Center',
    'Kolkata - Sales & Service Point',
    'Asansol - Service Center',
    'Malda - Service Point',
    'Jalpaiguri - Service Point',
    'Cooch Behar - Service Point',
    'Gangtok - Service Point (Sikkim)'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            Mitra Commercial
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200">
            Your Trusted Tata Hitachi Heavy Equipment Partner
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-300 max-w-2xl mx-auto">
            Serving West Bengal and Sikkim with premium construction and mining equipment, 
            backed by 275+ touchpoints and expert after-sales service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Explore Products <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of Tata Hitachi heavy equipment designed for every application
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.description}</p>
                  <Link 
                    to="/products" 
                    className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center text-sm sm:text-base"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Complete support ecosystem for your heavy equipment needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Serving across West Bengal and Sikkim with 275+ touchpoints
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-800 rounded-lg">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">{location}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/locations" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              View All Locations <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your equipment loan EMI and plan your investment
            </p>
          </div>

          <EMICalculator />
        </div>
      </section>
    </div>
  );
};

export default Home;