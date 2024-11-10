import React, { useEffect } from 'react';

const MailerLiteForm = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ml) {
      window.ml('form', 'show', 'nv0V6l');
    }
  }, []);

  return <div className="ml-embedded" data-form="nv0V6l"></div>;
};

export default MailerLiteForm;
