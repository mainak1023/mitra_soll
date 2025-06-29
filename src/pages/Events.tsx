import React from 'react';
import { Calendar, Award, Play } from 'lucide-react';

const Events = () => {
  const events = [
    {
      year: '2024',
      events: [
        {
          title: 'EX210 LC Prime Launch',
          date: 'March 15, 2024',
          location: 'Kolkata',
          description: 'Grand launch of the new EX210 LC Prime excavator with advanced features and improved fuel efficiency.',
          image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
          type: 'launch'
        },
        {
          title: 'Construction Equipment Expo',
          date: 'February 20-22, 2024',
          location: 'Durgapur',
          description: 'Participated in the regional construction equipment expo showcasing our latest range of excavators and loaders.',
          image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
          type: 'exhibition'
        },
        {
          title: 'Customer Appreciation Day',
          date: 'January 10, 2024',
          location: 'Siliguri',
          description: 'Special event to appreciate our loyal customers and showcase new service initiatives.',
          image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
          type: 'customer'
        }
      ]
    },
    {
      year: '2023',
      events: [
        {
          title: 'Excellence in Service Award',
          date: 'December 5, 2023',
          location: 'Mumbai',
          description: 'Received the Excellence in Service Award from Tata Hitachi for outstanding customer service.',
          image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
          type: 'award'
        },
        {
          title: 'Mining Technology Summit',
          date: 'October 18-19, 2023',
          location: 'Kolkata',
          description: 'Participated in the mining technology summit discussing innovations in mining equipment.',
          image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
          type: 'summit'
        },
        {
          title: 'Service Training Program',
          date: 'August 12, 2023',
          location: 'Durgapur',
          description: 'Conducted comprehensive training program for service technicians on new equipment models.',
          image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
          type: 'training'
        }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'launch': return 'bg-orange-100 text-orange-800';
      case 'exhibition': return 'bg-blue-100 text-blue-800';
      case 'award': return 'bg-green-100 text-green-800';
      case 'customer': return 'bg-purple-100 text-purple-800';
      case 'summit': return 'bg-gray-100 text-gray-800';
      case 'training': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'launch': return <Play className="h-4 w-4 sm:h-5 sm:w-5" />;
      case 'award': return <Award className="h-4 w-4 sm:h-5 sm:w-5" />;
      default: return <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Events & Exhibitions</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events, product launches, exhibitions, and achievements. 
            Join us at industry events and celebrations across the region.
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-12 sm:space-y-16">
          {events.map((yearData, yearIndex) => (
            <div key={yearIndex}>
              <div className="flex items-center mb-8 sm:mb-12">
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">{yearData.year}</span>
                </div>
                <div className="flex-grow h-0.5 bg-gray-300 ml-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {yearData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getEventTypeColor(event.type)}`}>
                          {getEventIcon(event.type)}
                          <span className="ml-1 capitalize">{event.type}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        <span className="text-xs sm:text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        <span className="text-xs sm:text-sm">{event.location}</span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Upcoming Events</h2>
          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Stay Tuned!</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              We're planning exciting events for the coming months. Follow us on social media or 
              subscribe to our newsletter to get notified about upcoming exhibitions, product launches, 
              and customer events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
                Subscribe to Newsletter
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors">
                Follow Us
              </button>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-orange-500 text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Excellence in Service</h3>
              <p className="text-orange-100 text-sm sm:text-base">Tata Hitachi Recognition 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Best Dealer Award</h3>
              <p className="text-orange-100 text-sm sm:text-base">Regional Excellence 2022</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-orange-100 text-sm sm:text-base">Industry Recognition 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;