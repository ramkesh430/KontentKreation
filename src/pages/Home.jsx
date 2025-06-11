import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, MessageCircle, Mail } from 'lucide-react';

const Home = () => {
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
    icon: (
      <img
        src="/public/meta-ads.webp"
        alt="Meta Ads"
        className="w-15 h-10 object-contain"
      />
    ),
    title: 'Meta Ads',
    description: 'Culturally targeted Facebook & Instagram campaigns that actually convert.',
    features: ['Audience Research', 'Creative Development', 'Performance Optimization'],
  },
  {
    icon: (
      <img
        src="/public/google-ads.webp"
        alt="Google Ads"
        className="w-15 h-10 object-contain"
      />
    ),
    title: 'Google Ads',
    description: 'Search and Display ads built for maximum return on ad spend (ROAS).',
    features: ['Keyword Research', 'Ad Copy Testing', 'Conversion Tracking'],
  },
    {
      icon: (
      <img
        src="/public/local-seo-gmb.webp"
        alt="Local SEO + GMB"
        className="w-15 h-10 object-contain"
      />
    ),
    title: 'Local SEO + GMB',
    description: 'Be found when it matters most—on Google Maps and local search.',
    features: ['GMB Optimization', 'Local Citations', 'Review Management'],
  }
  ];

  const testimonials = [
    {
      text: "Kontent Kreation helped us grow our small Nepali restaurant in Seattle. We started getting real customers from Google Maps and Facebook in just weeks!",
      author: "Suman Gurung",
      business: "Himalayan Eats",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "They handled our Google Ads and brought in more leads than we ever imagined. The ROI was insane. Super professional team!",
      author: "Roshni Patel",
      business: "Desi Realty WA",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "I thought only big companies could afford good marketing. Turns out, KK LLC got my tailoring business booming online. Highly recommend!",
      author: "Manoj Shrestha",
      business: "StyleStitch Tailors",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "From zero online presence to 200+ monthly customers through Google. These guys know exactly what South Asian businesses need!",
      author: "Priya Sharma",
      business: "Spice Garden Restaurant",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "Best investment we made for our business. Our WhatsApp is constantly buzzing with new customers thanks to their Facebook ads.",
      author: "Rajesh Kumar",
      business: "Kumar Electronics",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      text: "They understand our culture and community. The campaigns they created for our wedding planning business were spot on!",
      author: "Deepika Thapa",
      business: "Royal Events Nepal",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { number: '95%', label: 'Client Retention' },
    { number: '500+', label: 'Campaigns Launched' },
    { number: '4.9★', label: 'Average Rating' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/public/team-collaboration.webp?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Growth Partner in the{' '}
            <span className="block text-teal-200">Digital World</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Helping South Asian businesses thrive—wherever you are in the world.
          </p>
          <p className="text-lg mb-8 text-teal-200 font-medium">
             Proudly based in Seattle, serving nationwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/14257378565"
              className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:kontentkreationllc@gmail.com"
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in digital marketing strategies that understand and connect with South Asian communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 reveal-on-scroll"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.platformIcon}
                </div>
                <h3 className="text-2xl font-bold text-teal-700 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Why Clients Trust Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal-on-scroll">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-xl text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real businesses we've helped grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 reveal-on-scroll"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center border-t border-teal-200 pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-teal-700">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's talk about how Kontent Kreation can help you stand out and scale online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/14257378565"
              className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Start Your Growth Journey
            </a>
            <Link
              to="/contact"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;