import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
          <div className='sigepec-help'>
            <Link to={'/aidez-moi'}>
                <span>?</span>
            </Link>
          </div>
          <footer className='sigepec-layout-main__footer'>
              <p>© 2021 SIGEPEC. All rights reserved.</p>
          </footer>  
        </>
    );
};

export default Footer;