import React, { useEffect } from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-teal-600" />,
      title: 'Cultural Understanding',
      description: 'We understand the unique challenges and opportunities facing South Asian businesses in America.'
    },
    {
      icon: <Award className="w-12 h-12 text-teal-600" />,
      title: 'Proven Results',
      description: 'Our track record speaks for itself with 95% client retention and hundreds of successful campaigns.'
    },
    {
      icon: <Users className="w-12 h-12 text-teal-600" />,
      title: 'Personal Service',
      description: 'Every client gets dedicated attention and customized strategies, not cookie-cutter solutions.'
    },
    {
      icon: <Globe className="w-12 h-12 text-teal-600" />,
      title: 'Global Perspective',
      description: 'We help businesses connect with both local communities and broader markets effectively.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Campaigns Launched' },
    { number: '95%', label: 'Client Retention Rate' },
    { number: '3+', label: 'Years of Experience' },
    { number: '50+', label: 'Happy Clients' }
  ];

  
    const teamMembers = [
  {
    name: 'Rajnikant Chaudhary',
    role: 'Founder',
    bio: 'Digital marketing expert with 8+ years of experience helping South Asian businesses grow online. Specializes in Meta Ads and Google Ads strategy.',
    image: '/public/rajesh-sharma.webp',
    expertise: ['Meta Ads Strategy', 'Business Development', 'Client Relations']
  },
  {
    name: 'Ravi Chaudhary',
    role: 'CEO',
    bio: 'Operations specialist ensuring smooth campaign execution and client satisfaction. Expert in project management and team coordination.',
    image: '/public/Aklesh.webp',
    expertise: ['Project Management', 'Quality Assurance', 'Client Success']
  },

 {
    name: 'Aklesh Kahar',
    role: 'Head of Operations',
    bio: 'Operations specialist ensuring smooth campaign execution and client satisfaction. Expert in project management and team coordination.',
    image: '/public/Aklesh.webp',
    expertise: ['Project Management', 'Quality Assurance', 'Client Success']
  },

 {
    name: 'Ramkesh Gupta',
    role: 'Head of Operations',
    bio: 'Operations specialist ensuring smooth campaign execution and client satisfaction. Expert in project management and team coordination.',
    image: '/public/Aklesh.webp',
    expertise: ['Project Management', 'Quality Assurance', 'Client Success']
  },
 {
    name: 'Chandresh Maurya',
    role: 'Head of Operations',
    bio: 'Operations specialist ensuring smooth campaign execution and client satisfaction. Expert in project management and team coordination.',
    image: '/public/Aklesh.webp',
    expertise: ['Project Management', 'Quality Assurance', 'Client Success']
  },
 {
    name: 'Sunil Chaudhary',
    role: 'Head of Operations',
    bio: 'Operations specialist ensuring smooth campaign execution and client satisfaction. Expert in project management and team coordination.',
    image: '/public/Aklesh.webp',
    expertise: ['Project Management', 'Quality Assurance', 'Client Success']
  },

  {
    name: 'SooZal Chaudhary',
    role: 'Google Ads Specialist',
    bio: 'Certified Google Ads expert with deep knowledge of search marketing and conversion optimization for local businesses.',
    image: '/public/arjun-thapa.jpg',
    expertise: ['Google Ads', 'PPC Strategy', 'Conversion Optimization']
  },
  {
    name: 'Sunita Lodh',
    role: 'Creative Director',
    bio: 'Creative professional specializing in culturally-relevant content creation and visual storytelling for South Asian audiences.',
    image: '/public/sita-gurung.jpg',
    expertise: ['Creative Strategy', 'Content Creation', 'Brand Development']
  }
];


  const clientTestimonials = [
    {
      text: "Working with Kontent Kreation has been a game-changer for our restaurant. They understand our community and created campaigns that brought in customers who actually became regulars.",
      author: "Suman Gurung",
      business: "Himalayan Eats",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "300% increase in foot traffic"
    },
    {
      text: "The team at KK LLC doesn't just run ads - they understand our business goals and help us achieve them. Our ROI has been incredible since we started working with them.",
      author: "Roshni Patel",
      business: "Desi Realty WA",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "500% increase in qualified leads"
    },
    {
      text: "From a small tailoring shop to having customers from all over Seattle - that's what Kontent Kreation did for us. They made digital marketing simple and effective.",
      author: "Manoj Shrestha",
      business: "StyleStitch Tailors",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "250% revenue growth"
    },
    {
      text: "They created beautiful campaigns that showcased our Indian sweets in a way that made people's mouths water. Our online orders have never been higher!",
      author: "Deepika Sharma",
      business: "Sweet Dreams Mithai",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      results: "400% online order increase"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Kontent Kreation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in digital marketing, specializing in South Asian businesses
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Kontent Kreation LLC was founded with a simple mission: to help South Asian businesses 
                  thrive in the digital landscape. We recognized that traditional marketing agencies often 
                  missed the cultural nuances that make South Asian businesses unique.
                </p>
                <p>
                  Based in Seattle, we've had the privilege of working with incredible entrepreneurs 
                  from Nepal, India, Pakistan, Bangladesh, and Sri Lanka. From family restaurants 
                  to tech startups, we've helped businesses of all sizes achieve their growth goals.
                </p>
                <p>
                  What sets us apart is our deep understanding of both American marketing strategies 
                  and South Asian cultural values. This unique perspective allows us to create campaigns 
                  that resonate authentically with your target audience.
                </p>
              </div>
            </div>
            <div className="reveal-on-scroll">
              <img
                src="/public/team-collaboration.webp?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card-hover bg-white p-6 rounded-2xl shadow-lg text-center reveal-on-scroll"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg text-center reveal-on-scroll"
              >
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover bg-white p-8 rounded-2xl shadow-lg reveal-on-scroll"
              >
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <div className="flex items-center">
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
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">{testimonial.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal-on-scroll">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            To empower South Asian entrepreneurs and businesses with culturally-aware digital marketing 
            strategies that drive real growth and meaningful connections with their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/14257378565"
              className="btn-whatsapp text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Join Our Success Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;