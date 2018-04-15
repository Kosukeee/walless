import React, { Component } from 'react';

import ImageUpload from './ImageUpload';

class CheckIn extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', paddingTop: '100px', backgroundColor: '#000', height: '100vh' }}>
        <ImageUpload />
      </div>
    );
  }
};

export default CheckIn;
