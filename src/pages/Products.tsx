import React from 'react';
import { ArrowRight, Wrench, Gauge, Shield } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      name: 'Mini Excavators',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Compact excavators perfect for urban construction, landscaping, and confined space operations.',
      features: ['Compact design', 'High maneuverability', 'Fuel efficient', 'Easy transport'],
      models: ['EX30', 'EX35', 'EX50', 'EX70']
    },
    {
      name: 'Construction Excavators',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Medium to heavy-duty excavators designed for construction and infrastructure projects.',
      features: ['Powerful performance', 'Advanced hydraulics', 'Operator comfort', 'Durability'],
      models: ['EX200', 'EX210', 'EX220', 'EX270']
    },
    {
      name: 'Mining Excavators',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Heavy-duty excavators built for mining operations and quarrying applications.',
      features: ['Extreme durability', 'High productivity', 'Reinforced structure', 'Low maintenance'],
      models: ['EX1200', 'EX1900', 'EX2500', 'EX3600']
    },
    {
      name: 'Wheel Loaders',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Versatile wheel loaders for material handling, loading, and transportation tasks.',
      features: ['High lifting capacity', 'Excellent mobility', 'Operator safety', 'Versatile attachments'],
      models: ['LX70', 'LX100', 'LX130', 'LX170']
    },
    {
      name: 'Dump Trucks',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Robust dump trucks for material transportation in construction and mining sites.',
      features: ['Large payload capacity', 'Reliable performance', 'Efficient operation', 'Safety features'],
      models: ['DT30', 'DT50', 'DT70', 'DT100']
    },
    {
      name: 'Compactors',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Soil and asphalt compactors for road construction and ground preparation.',
      features: ['Superior compaction', 'Smooth operation', 'Ergonomic design', 'Fuel efficiency'],
      models: ['CP15', 'CP20', 'CP25', 'CP30']
    }
  ];

  const keyFeatures = [
    {
      icon: <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: 'Advanced Technology',
      description: 'Latest hydraulic systems and engine technology for optimal performance'
    },
    {
      icon: <Gauge className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: 'Fuel Efficiency',
      description: 'Engineered for maximum productivity with minimal fuel consumption'
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: 'Reliability',
      description: 'Built to withstand harsh operating conditions with minimal downtime'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Products</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of Tata Hitachi heavy equipment, designed to meet 
            the diverse needs of construction, mining, and infrastructure development projects.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="space-y-12 sm:space-y-16">
          {productCategories.map((category, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{category.description}</p>
                
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Available Models:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.models.map((model, modelIndex) => (
                      <span key={modelIndex} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors inline-flex items-center text-sm sm:text-base">
                  Get Quote <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-lg p-6 sm:p-8 mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Help Choosing the Right Equipment?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Our experts are here to help you select the perfect equipment for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
              Contact Our Experts
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;