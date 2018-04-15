import React from 'react';

import ImageUpload from './ImageUpload';
import Logo from '../img/img_logo_4.png';

const Landing = () => {
  return (
    <div>
      <img src={Logo} style={{ width: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
};

export default Landing;
