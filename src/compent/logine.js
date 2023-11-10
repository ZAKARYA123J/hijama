import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container'>
      <br></br>
      <div className="embed-responsive embed-responsive-16by9"> {/* Bootstrap responsive embed container */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3440.231010651747!2d-9.562174524431404!3d30.429552574731847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI1JzQ2LjQiTiA5wrAzMyczNC42Ilc!5e0!3m2!1sfr!2sma!4v1698498470961!5m2!1sfr!2sma"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='zakaya'
          className="embed-responsive-item" // Added class for responsive behavior
        ></iframe>
      </div>
      <Link to={'/'} className='btn btn-primary'> الرجوع </Link>
    </div>
  );
}

export default Login;
