import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';

class Rooms extends Component {
  render() {
    return (
      <div>
        <h2>レンタルスペースを調べる</h2>
        <Row>
          <Input s={12} type='select' label='国' defaultValue='日本' className="selectBox">
            <option value="1">イスラエル</option>
            <option value="2">アムステルダム</option>
            <option value="3">日本</option>
            <option value="4">シンガポール</option>
            <option value="5">中国</option>
          </Input>
        </Row>
        <Row>
          <Input s={12} type='select' label='地域1' defaultValue='東京都' className="selectBox">
            <option value="1">神奈川県</option>
            <option value="2">大阪府</option>
            <option value="3">沖縄県</option>
            <option value="4">山形県</option>
            <option value="5">東京都</option>
          </Input>
        </Row>
        <Row>
          <Input s={12} type='select' label='地域2' defaultValue='渋谷区' className="selectBox">
            <option value="1">目黒区</option>
            <option value="2">渋谷区</option>
            <option value="3">世田谷区</option>
            <option value="4">港区</option>
            <option value="5">品川区</option>
          </Input>
        </Row>
        <Row>
          <Input s={12} type='select' label='ルームタイプ' defaultValue='2LDK' className="selectBox">
            <option value="1">1K</option>
            <option value="2">1LDK</option>
            <option value="3">2LDK</option>
            <option value="4">3LDK</option>
            <option value="5">4LDK</option>
          </Input>
        </Row>
        <Row>
          <Input s={12} type='select' label='グレード' defaultValue='Premium' className="selectBox">
            <option value="1">Standard: 1時間　320円</option>
            <option value="2">Premium: 1時間　640円</option>
            <option value="3">2LDK</option>
            <option value="4">3LDK</option>
            <option value="5">4LDK</option>
          </Input>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Input name="group1" type="radio" value="洋風スタイル" label="洋風スタイル"></Input>
          <Input name="group1" type="radio" value="和風スタイル" label="和風スタイル"></Input>
        </Row>
        <img src="" alt=""/>
      </div>
    )
  }
}

export default Rooms;
