import React from 'react';
import { useForm } from 'react-hook-form';
import { Users, Briefcase, Award, Upload, Mail, Phone, User } from 'lucide-react';

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resume: FileList;
}

const Career = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CareerFormData>();

  const onSubmit = (data: CareerFormData) => {
    console.log(data);
    alert('Application submitted successfully! We will contact you soon.');
    reset();
  };

  const openPositions = [
    {
      title: 'Service Technician',
      location: 'Durgapur',
      experience: '2-5 years',
      type: 'Full-time',
      description: 'Experienced technician for heavy equipment maintenance and repair.'
    },
    {
      title: 'Sales Executive',
      location: 'Kolkata',
      experience: '1-3 years',
      type: 'Full-time',
      description: 'Dynamic sales professional for equipment sales and customer relations.'
    },
    {
      title: 'Parts Manager',
      location: 'Siliguri',
      experience: '3-7 years',
      type: 'Full-time',
      description: 'Manage parts inventory and coordinate with service teams.'
    },
    {
      title: 'Customer Support Executive',
      location: 'Remote/Durgapur',
      experience: '1-2 years',
      type: 'Full-time',
      description: 'Handle customer inquiries and provide technical support.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based incentives'
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement'
    },
    {
      icon: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and comprehensive benefits'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Join Our Team</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with Mitra Commercial and be part of a dynamic team that's shaping 
            the future of heavy equipment industry in Eastern India.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Why Join Mitra Commercial?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-0">{position.title}</h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium self-start">
                    {position.type}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{position.experience} experience</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{position.description}</p>
                <button className="text-orange-500 hover:text-orange-600 font-semibold text-sm sm:text-base">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Submit Your Application</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                  Position Applied For *
                </label>
                <select
                  {...register('position', { required: 'Please select a position' })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select Position</option>
                  <option value="service-technician">Service Technician</option>
                  <option value="sales-executive">Sales Executive</option>
                  <option value="parts-manager">Parts Manager</option>
                  <option value="customer-support">Customer Support Executive</option>
                  <option value="other">Other</option>
                </select>
                {errors.position && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.position.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  {...register('experience')}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Upload className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                  Upload Resume *
                </label>
                <input
                  type="file"
                  {...register('resume', { required: 'Resume is required' })}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                {errors.resume && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.resume.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Tell us why you want to join Mitra Commercial..."
                ></textarea>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mt-12 sm:mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Questions About Careers?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            For any queries related to career opportunities, feel free to reach out to our HR team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hr@mitracommercial.com" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              hr@mitracommercial.com
            </a>
            <a 
              href="tel:+919876543210" 
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              +91-9876543210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;