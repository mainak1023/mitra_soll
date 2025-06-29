import React from 'react';
import { Users, Target, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">About Mitra Commercial</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in heavy equipment solutions across West Bengal and Sikkim, 
            backed by the strength of Tata Hitachi's world-class engineering.
          </p>
        </div>

        {/* Ownership Structure */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Partnership Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl sm:text-4xl font-bold">60%</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Hitachi Construction Machinery</h3>
              <p className="text-gray-600 text-sm sm:text-base">Japanese engineering excellence and innovation</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl sm:text-4xl font-bold">40%</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Tata Motors</h3>
              <p className="text-gray-600 text-sm sm:text-base">Indian automotive leadership and reliability</p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4 sm:mb-6">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To provide world-class heavy equipment solutions that empower infrastructure development 
              across West Bengal and Sikkim, while delivering exceptional customer service and 
              maintaining the highest standards of quality and reliability.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4 sm:mb-6">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To be the leading heavy equipment dealer in Eastern India, recognized for our 
              commitment to customer success, innovative solutions, and contributing to the 
              region's infrastructure growth through reliable partnerships.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-orange-500 text-white rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Key Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">275+</div>
              <div className="text-orange-100 text-sm sm:text-base">Service Touchpoints</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">2</div>
              <div className="text-orange-100 text-sm sm:text-base">Main Headquarters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">10+</div>
              <div className="text-orange-100 text-sm sm:text-base">Service Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-100 text-sm sm:text-base">Support Available</div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Sales & Consultation</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Expert guidance in selecting the right equipment for your specific needs and applications.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">After-Sales Service</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Comprehensive maintenance, repair, and support services to keep your equipment running.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Parts & Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Genuine Tata Hitachi parts and accessories with quick delivery across our network.
              </p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Mitra Commercial was established with a vision to bring world-class heavy equipment 
              solutions to the eastern region of India. As an authorized dealer of Tata Hitachi, 
              we combine the reliability of Tata Motors with the advanced technology of Hitachi 
              Construction Machinery.
            </p>
            <p>
              Our journey began with a commitment to understanding the unique challenges faced by 
              construction, mining, and infrastructure development companies in West Bengal and Sikkim. 
              Through years of dedicated service, we have built a reputation for excellence in 
              equipment sales, service, and customer support.
            </p>
            <p>
              Today, we proudly serve our customers through an extensive network of 275+ touchpoints, 
              ensuring that quality service and genuine parts are always within reach. Our team of 
              experienced professionals is dedicated to helping you achieve your project goals with 
              the right equipment and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;