import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Nexa Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between technology and business success, 
              Nexa Solutions has been at the forefront of digital innovation for over a decade.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively 
              to deliver solutions that not only meet today's challenges but anticipate 
              tomorrow's opportunities. We believe in the power of technology to transform 
              businesses and create meaningful impact.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-primary-700 font-medium">Our Modern Office</p>
                  <p className="text-primary-600 text-sm">Innovation Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;