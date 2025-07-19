import React from 'react';
import { Code, Smartphone, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies. From concept to deployment, we create scalable and performant solutions."
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms."
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Integration",
      description: "Seamless cloud migration and integration services to modernize your infrastructure and improve scalability and security."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;