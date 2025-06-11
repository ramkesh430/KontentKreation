import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi! I'm interested in your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business: ${formData.business}
Service Interest: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/14257378565?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (425) 737-8565',
      link: 'tel:+14257378565'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'kontentkreationllc@gmail.com',
      link: 'mailto:kontentkreationllc@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: 'Seattle, Washington',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      link: null
    }
  ];

  const services = [
    'Meta Ads Management',
    'Google Ads Campaigns',
    'Local SEO & GMB',
    'Social Media Marketing',
    'Website Development',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to grow your business? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach out directly? Here are all the ways you can contact us.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-teal-700 mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-700 mb-4">
                  We understand that time is money in business. That's why we guarantee:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Response within 2 hours during business hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Free consultation call within 24 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Custom strategy proposal within 48 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't wait for tomorrow to start building your business's digital presence. 
            Let's begin your growth journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/14257378565"
              className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Chat Now on WhatsApp
            </a>
            <a
              href="tel:+14257378565"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;