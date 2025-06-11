import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Target, TrendingUp, MapPin } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Target className="w-12 h-12 text-teal-600" />,
      title: 'Meta Ads Management',
      description: 'Culturally-aware Facebook and Instagram advertising that resonates with South Asian audiences.',
      features: [
        'Audience research and segmentation',
        'Creative development and testing',
        'Campaign optimization and scaling',
        'Detailed performance reporting',
        'Cultural sensitivity in messaging',
        'Multi-language campaign support'
      ],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-teal-600" />,
      title: 'Google Ads Campaigns',
      description: 'Search and display advertising designed for maximum ROI and qualified lead generation.',
      features: [
        'Keyword research and strategy',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Conversion tracking setup',
        'Bid management and optimization',
        'Competitor analysis'
      ],
      pricing: 'Starting at $1,200/month'
    },
    {
      icon: <MapPin className="w-12 h-12 text-teal-600" />,
      title: 'Local SEO & GMB',
      description: 'Dominate local search results and Google Maps to attract nearby customers.',
      features: [
        'Google My Business optimization',
        'Local citation building',
        'Review management strategy',
        'Local keyword optimization',
        'NAP consistency audit',
        'Local content creation'
      ],
      pricing: 'Starting at $800/month'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, target audience, and competition to create a customized marketing strategy.'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Our team sets up optimized campaigns with proper tracking, targeting, and creative assets.'
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'We launch your campaigns and continuously monitor performance for optimal results.'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Based on data insights, we optimize and scale successful campaigns for maximum growth.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions tailored for South Asian businesses
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover bg-white border border-gray-200 rounded-2xl p-8 shadow-lg reveal-on-scroll"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-2xl font-bold gradient-text mb-4">{service.pricing}</p>
                  <a
                    href="https://wa.me/14257378565"
                    className="btn-primary text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 w-full"
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center reveal-on-scroll">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss which services are right for your business and create a custom strategy for your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/14257378565"
              className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Schedule Free Consultation
            </a>
            <a
              href="mailto:kontentkreationllc@gmail.com"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;