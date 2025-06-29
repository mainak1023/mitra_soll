import React from 'react';
import { MapPin, Phone, Clock, Wrench } from 'lucide-react';

const Locations = () => {
  const headquarters = [
    {
      name: 'Durgapur Headquarters',
      address: 'Industrial Area, Durgapur, West Bengal 713212',
      phone: '+91-9876543210',
      services: ['Sales', 'Service', 'Parts', 'Workshop'],
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      isHQ: true
    },
    {
      name: 'Siliguri Headquarters',
      address: 'NH-31, Siliguri, West Bengal 734001',
      phone: '+91-9876543211',
      services: ['Sales', 'Service', 'Parts', 'Workshop'],
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      isHQ: true
    }
  ];

  const serviceLocations = [
    {
      name: 'Kolkata Service Center',
      address: 'Salt Lake, Kolkata, West Bengal 700091',
      phone: '+91-9876543212',
      services: ['Sales', 'Service', 'Parts']
    },
    {
      name: 'Asansol Service Center',
      address: 'GT Road, Asansol, West Bengal 713301',
      phone: '+91-9876543213',
      services: ['Service', 'Parts']
    },
    {
      name: 'Malda Service Point',
      address: 'NH-34, Malda, West Bengal 732101',
      phone: '+91-9876543214',
      services: ['Service', 'Parts']
    },
    {
      name: 'Jalpaiguri Service Point',
      address: 'Hill Cart Road, Jalpaiguri, West Bengal 735101',
      phone: '+91-9876543215',
      services: ['Service', 'Parts']
    },
    {
      name: 'Cooch Behar Service Point',
      address: 'Mathabhanga Road, Cooch Behar, West Bengal 736101',
      phone: '+91-9876543216',
      services: ['Service', 'Parts']
    },
    {
      name: 'Gangtok Service Point',
      address: 'Ranipool, Gangtok, Sikkim 737135',
      phone: '+91-9876543217',
      services: ['Service', 'Parts']
    },
    {
      name: 'Burdwan Service Point',
      address: 'GT Road, Burdwan, West Bengal 713101',
      phone: '+91-9876543218',
      services: ['Service', 'Parts']
    },
    {
      name: 'Howrah Service Point',
      address: 'Shibpur, Howrah, West Bengal 711102',
      phone: '+91-9876543219',
      services: ['Service', 'Parts']
    }
  ];

  const regions = [
    {
      name: 'North Bengal',
      locations: ['Siliguri', 'Jalpaiguri', 'Cooch Behar', 'Malda'],
      coverage: 'Complete coverage across North Bengal districts'
    },
    {
      name: 'Central Bengal',
      locations: ['Durgapur', 'Asansol', 'Burdwan'],
      coverage: 'Industrial belt coverage with specialized mining support'
    },
    {
      name: 'South Bengal',
      locations: ['Kolkata', 'Howrah'],
      coverage: 'Metropolitan area with urban construction focus'
    },
    {
      name: 'Sikkim',
      locations: ['Gangtok'],
      coverage: 'Complete state coverage with mountain terrain expertise'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Locations</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Serving West Bengal and Sikkim with 275+ touchpoints across the region. 
            Our strategic locations ensure quick response and reliable service wherever you are.
          </p>
        </div>

        {/* Service Coverage Map */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Service Coverage Map</h2>
          <div className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            {/* West Bengal & Sikkim Map */}
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 500 600" className="w-full h-full max-w-full">
                {/* Title */}
                <text x="50" y="40" fontSize="20" fontWeight="bold" fill="#dc2626" className="font-bold sm:text-2xl">
                  West Bengal
                </text>
                <text x="50" y="70" fontSize="20" fontWeight="bold" fill="#dc2626" className="font-bold sm:text-2xl">
                  & Sikkim
                </text>
                
                {/* Sikkim */}
                <path
                  d="M80 90 L140 90 L150 110 L145 140 L130 155 L110 160 L85 150 L70 130 L75 110 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="110" y="125" fontSize="10" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Sikkim</text>
                
                {/* North Sikkim */}
                <text x="95" y="105" fontSize="8" fill="#000" className="sm:text-xs">North Sikkim</text>
                
                {/* Gangtok marker */}
                <circle cx="115" cy="135" r="3" fill="#000" className="sm:r-4" />
                <text x="125" y="140" fontSize="8" fill="#000" className="sm:text-xs">Gangtok</text>
                
                {/* Darjeeling District */}
                <path
                  d="M150 110 L200 100 L220 120 L210 150 L190 165 L170 160 L150 140 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="185" y="135" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Darjeeling</text>
                
                {/* Jalpaiguri District */}
                <path
                  d="M220 120 L280 110 L300 130 L290 160 L270 175 L240 170 L220 150 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="260" y="145" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Jalpaiguri</text>
                
                {/* Jalpaiguri marker */}
                <circle cx="260" cy="155" r="3" fill="#000" className="sm:r-4" />
                <text x="270" y="160" fontSize="8" fill="#000" className="sm:text-xs">Jalpaiguri</text>
                
                {/* Cooch Behar District */}
                <path
                  d="M300 130 L360 120 L380 140 L375 170 L355 185 L330 180 L310 165 L300 150 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="340" y="155" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Cooch Behar</text>
                
                {/* Cooch Behar marker */}
                <circle cx="340" cy="165" r="3" fill="#000" className="sm:r-4" />
                <text x="350" y="170" fontSize="8" fill="#000" className="sm:text-xs">Cooch Behar</text>
                
                {/* Malda District */}
                <path
                  d="M270 175 L330 180 L350 200 L340 230 L320 245 L290 240 L270 220 Z"
                  fill="#c084fc"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="310" y="215" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Malda</text>
                
                {/* Malda marker */}
                <circle cx="310" cy="225" r="3" fill="#000" className="sm:r-4" />
                <text x="320" y="230" fontSize="8" fill="#000" className="sm:text-xs">Malda</text>
                
                {/* Murshidabad District */}
                <path
                  d="M320 245 L380 240 L400 260 L395 290 L375 305 L350 300 L330 285 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="360" y="275" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Murshidabad</text>
                
                {/* Birbhum District */}
                <path
                  d="M270 220 L320 245 L330 285 L310 310 L280 315 L260 295 L250 270 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="290" y="275" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Birbhum</text>
                
                {/* Birbhum marker */}
                <circle cx="290" cy="285" r="3" fill="#000" className="sm:r-4" />
                <text x="300" y="290" fontSize="8" fill="#000" className="sm:text-xs">Birbhum</text>
                
                {/* Barddhaman District */}
                <path
                  d="M280 315 L350 300 L370 320 L360 350 L340 365 L310 360 L290 345 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="325" y="335" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Barddhaman</text>
                
                {/* Asansol marker */}
                <circle cx="300" cy="325" r="3" fill="#000" className="sm:r-4" />
                <text x="310" y="330" fontSize="8" fill="#000" className="sm:text-xs">Asansol</text>
                
                {/* Durgapur marker */}
                <circle cx="330" cy="345" r="3" fill="#000" className="sm:r-4" />
                <text x="340" y="350" fontSize="8" fill="#000" className="sm:text-xs">Durgapur</text>
                
                {/* Purulia District */}
                <path
                  d="M200 300 L280 315 L290 345 L270 370 L240 375 L210 360 L190 340 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="240" y="340" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Purulia</text>
                
                {/* Purulia marker */}
                <circle cx="240" cy="350" r="3" fill="#000" className="sm:r-4" />
                <text x="250" y="355" fontSize="8" fill="#000" className="sm:text-xs">Purulia</text>
                
                {/* Bankura District */}
                <path
                  d="M270 370 L340 365 L360 385 L350 415 L320 420 L290 405 L275 390 Z"
                  fill="#ff6b35"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="315" y="395" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Bankura</text>
                
                {/* Bankura marker */}
                <circle cx="315" cy="405" r="3" fill="#000" className="sm:r-4" />
                <text x="325" y="410" fontSize="8" fill="#000" className="sm:text-xs">Bankura</text>
                
                {/* Paschim Medinipur District */}
                <path
                  d="M240 375 L290 405 L320 420 L310 450 L280 465 L250 460 L220 445 L210 415 Z"
                  fill="#86efac"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="265" y="425" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Paschim</text>
                <text x="265" y="440" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Medinipur</text>
                
                {/* Hooghly District */}
                <path
                  d="M350 415 L400 410 L420 430 L415 460 L395 475 L370 470 L355 455 Z"
                  fill="#a78bfa"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="385" y="445" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Hooghly</text>
                
                {/* Howrah District */}
                <path
                  d="M395 475 L430 470 L445 490 L440 510 L420 520 L400 515 L385 500 Z"
                  fill="#a78bfa"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="415" y="495" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Howrah</text>
                
                {/* Howrah marker */}
                <circle cx="415" cy="505" r="3" fill="#000" className="sm:r-4" />
                <text x="425" y="510" fontSize="8" fill="#000" className="sm:text-xs">Howrah</text>
                
                {/* Kolkata District */}
                <path
                  d="M440 510 L470 505 L480 520 L475 535 L460 540 L445 535 L440 525 Z"
                  fill="#a78bfa"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="460" y="525" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Kolkata</text>
                
                {/* Kolkata marker */}
                <circle cx="460" cy="530" r="3" fill="#000" className="sm:r-4" />
                <text x="470" y="535" fontSize="8" fill="#000" className="sm:text-xs">Kolkata</text>
                
                {/* North 24 Parganas */}
                <path
                  d="M415 460 L460 455 L480 475 L475 500 L455 510 L430 505 L420 485 Z"
                  fill="#a78bfa"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="450" y="480" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">North 24</text>
                <text x="450" y="495" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Parganas</text>
                
                {/* South 24 Parganas */}
                <path
                  d="M310 450 L370 470 L400 515 L420 520 L415 550 L390 565 L360 560 L330 545 L300 530 L285 505 Z"
                  fill="#a78bfa"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="355" y="520" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">South 24</text>
                <text x="355" y="535" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Parganas</text>
                
                {/* Purba Medinipur */}
                <path
                  d="M280 465 L330 545 L360 560 L370 580 L350 595 L320 590 L290 575 L270 555 L260 530 L270 505 Z"
                  fill="#a78bfa"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="315" y="555" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Purba</text>
                <text x="315" y="570" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Medinipur</text>
                
                {/* Nadia District */}
                <path
                  d="M360 350 L415 345 L430 365 L425 395 L405 410 L380 405 L365 390 Z"
                  fill="#fbbf24"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text x="395" y="380" fontSize="9" fontWeight="bold" fill="#000" textAnchor="middle" className="sm:text-xs">Nadia</text>
                
                {/* Nadia marker */}
                <circle cx="395" cy="390" r="3" fill="#000" className="sm:r-4" />
                <text x="405" y="395" fontSize="8" fill="#000" className="sm:text-xs">Nadia</text>
                
                {/* Nabadwip marker */}
                <circle cx="410" cy="375" r="3" fill="#000" className="sm:r-4" />
                <text x="420" y="380" fontSize="8" fill="#000" className="sm:text-xs">Nabadwip</text>
                
                {/* Headquarters markers (larger) */}
                <g>
                  {/* Siliguri HQ */}
                  <circle cx="200" cy="130" r="5" fill="#dc2626" stroke="#fff" strokeWidth="2" className="sm:r-6" />
                  <text x="210" y="135" fontSize="10" fontWeight="bold" fill="#dc2626" className="sm:text-xs">Siliguri HQ</text>
                  
                  {/* Durgapur HQ */}
                  <circle cx="330" cy="345" r="5" fill="#dc2626" stroke="#fff" strokeWidth="2" className="sm:r-6" />
                  <text x="340" y="350" fontSize="10" fontWeight="bold" fill="#dc2626" className="sm:text-xs">Durgapur HQ</text>
                </g>
              </svg>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-12">
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full mr-3 border-2 border-white shadow-md"></div>
                <span className="text-sm font-semibold text-gray-700">Headquarters</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full mr-3 border border-white shadow-md"></div>
                <span className="text-sm font-semibold text-gray-700">Service Centers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Regions */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Service Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{region.name}</h3>
                <div className="space-y-2 mb-4">
                  {region.locations.map((location, locationIndex) => (
                    <div key={locationIndex} className="flex items-center text-gray-600">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{location}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">{region.coverage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Headquarters */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Headquarters</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {headquarters.map((hq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{hq.name}</h3>
                    <span className="text-sm text-orange-600 font-medium">Main Office</span>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">{hq.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">{hq.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">{hq.hours}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hq.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Service Locations */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Service Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {serviceLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{location.name}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">{location.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {location.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-orange-500 text-white rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Can't Find Your Area?</h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
            We're expanding our network constantly. Contact us to find the nearest service point or 
            to discuss mobile service options for your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
              Request Mobile Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;