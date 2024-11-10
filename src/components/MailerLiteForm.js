import React, { useEffect } from 'react';

const MailerLiteForm = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if MailerLite script is already loaded
      if (!document.getElementById('mailerLiteScript')) {
        // Create script element
        const script = document.createElement('script');
        script.id = 'mailerLiteScript';
        script.src = 'https://static.mailerlite.com/js/w/webforms.min.js';
        script.async = true;
        script.onload = () => {
          if (window.mailerlite) {
            window.mailerlite.initialize();
          }
        };
        document.body.appendChild(script);
      } else {
        // If script is already loaded, initialize the form
        if (window.mailerlite) {
          window.mailerlite.initialize();
        }
      }
    }
  }, []);

  return (
    <div
      className="ml-embedded"
      data-form="nv0V6l"
      style={{ minHeight: '300px' }} // Optional: Ensure the container has some height
    ></div>
  );
};

export default MailerLiteForm;
