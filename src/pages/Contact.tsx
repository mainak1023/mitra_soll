import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, User, MessageCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    alert('Message sent successfully! We will get back to you soon.');
    reset();
  };

  const offices = [
    {
      name: 'Durgapur Headquarters',
      address: 'Industrial Area, Durgapur, West Bengal 713212',
      phone: {
        sales: '+91-9876543210',
        service: '+91-9876543220',
        parts: '+91-9876543230',
        workshop: '+91-9876543240'
      },
      email: 'durgapur@mitracommercial.com',
      hours: 'Monday - Saturday: 8:00 AM - 6:00 PM'
    },
    {
      name: 'Siliguri Regional Office',
      address: 'NH-31, Siliguri, West Bengal 734001',
      phone: {
        sales: '+91-9876543211',
        service: '+91-9876543221',
        parts: '+91-9876543231',
        workshop: '+91-9876543241'
      },
      email: 'siliguri@mitracommercial.com',
      hours: 'Monday - Saturday: 8:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for equipment sales, service support, or any other inquiries. 
            We're here to help you with all your heavy equipment needs.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{office.name}</h2>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Address</p>
                    <p className="text-gray-600 text-sm sm:text-base">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Phone Numbers</p>
                    <div className="space-y-1 text-gray-600 text-sm sm:text-base">
                      <p>Sales: {office.phone.sales}</p>
                      <p>Service: {office.phone.service}</p>
                      <p>Parts: {office.phone.parts}</p>
                      <p>Workshop: {office.phone.workshop}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-sm sm:text-base">{office.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Working Hours</p>
                    <p className="text-gray-600 text-sm sm:text-base">{office.hours}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                Get Directions
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Send us a Message</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  {...register('subject', { required: 'Please select a subject' })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select Subject</option>
                  <option value="sales-inquiry">Sales Inquiry</option>
                  <option value="service-support">Service Support</option>
                  <option value="parts-inquiry">Parts Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
                {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject.message}</p>}
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                Message *
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="Tell us about your requirements or questions..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 sm:mb-16">
          <div className="p-4 sm:p-6 bg-gray-50">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">Find Us on Map</h2>
          </div>
          <div className="h-64 sm:h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mx-auto mb-4" />
              <p className="text-gray-600 text-sm sm:text-base">Interactive map will be integrated here</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Showing locations of Durgapur and Siliguri offices</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-red-900 mb-4">Emergency Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-red-800 font-medium text-sm sm:text-base">24/7 Emergency Breakdown Service</p>
              <p className="text-red-700 text-sm sm:text-base">Call: +91-9876543299</p>
            </div>
            <div>
              <p className="text-red-800 font-medium text-sm sm:text-base">Critical Parts Support</p>
              <p className="text-red-700 text-sm sm:text-base">WhatsApp: +91-9876543298</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;