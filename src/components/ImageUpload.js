import React, { Component } from 'react';
import imageFrame from '../img/imageFrame.png';
import checkIcon from '../img/check.png';

import { Button, Input } from 'react-materialize';
import axios, { post } from 'axios';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._changeImage = this._changeImage.bind(this);
  }

  _changeImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    const loadImgBtn = document.querySelector('.loadImgBtn');
    const verifiedMessage = document.querySelector('.verifiedMessage');

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });

      loadImgBtn.classList.add('hide');
      verifiedMessage.classList.remove('hide');
    }

    reader.readAsDataURL(file)
  }

  _submitImage(e) {
    const submitButton = document.getElementById('submitButton');
    const url = 'http://cmsplatformwebapp201804140002.azurewebsites.net/api/Borrow';
    const requestData = {
      "personId": "1f22e0be-e804-452f-98f8-9947e19e5596",
      "name": "Room1"
    }

    e.preventDefault();

    fetch(url, {
      method: 'post',
      body: JSON.stringify(requestData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img className="imgPreview-img" src={imagePreviewUrl} style={{ width: '70%', borderRadius: '50%', border: '3px solid #eb4c7f' }} />);
    } else {
      $imagePreview = (<div className="previewFrame"><img src={imageFrame} style={{ width: '70%' }} /></div>);
    }

    return (
      <form className="row">
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <div className="container imgPreview-btn">
          <div className="loadImgBtn input-field">
            <div className="btn btn-black row s12">
              <input
                className="fileInput"
                type="file"
                onChange = {(e) => this._changeImage(e)}
              />
            </div>
          </div>
          <div className="verifiedMessage hide">
            <p><img src={checkIcon} style={{ width: '25px', marginRight: '10px', position: 'relative', marginBottom: '-2px' }} />認証完了</p>
          </div>
        </div>
        <div style={{ marginBottom: '40px' }}>
          <p style={{ textAlign: 'center', marginTop: '5px' }}>お部屋のご利用時間: 2日12時間</p>
          <p style={{ textAlign: 'center', marginTop: '5px' }}>レンタル価格: 12,800円</p>
        </div>
        <Button
            className="submitButton row s12"
            waves='light'
            type="submit"
            onClick = {(e) => this._submitImage(e)}
            style={{ width: '100%' }}
          >
          Face ID 認証
        </Button>
      </form>
    );
  }
};

export default ImageUpload;
