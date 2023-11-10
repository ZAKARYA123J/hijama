import React from 'react';
import {SiWhatsapp} from 'react-icons/si'

function WhatsAppButton() {
  const phoneNumber = '+212 611-732456'; // Replace with the phone number you want to use

  const openWhatsApp = () => {
    const url = `whatsapp://send?phone=${phoneNumber}`;
    window.location.href = url;
  };

  return (
    <div>
      <a onClick={openWhatsApp} style={{fontWeight:'500'}}>واتساب<SiWhatsapp style={{marginLeft:'6px'}}/></a>
    </div>
  );
}

export default WhatsAppButton;
