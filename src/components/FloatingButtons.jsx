import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="floating-elements">
      <a
        href="tel:+14257378565"
        className="float-btn phone-float"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/14257378565"
        className="float-btn whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;