import React, { Component } from 'react';
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './asset/styles/components.scss'
import Header from './asset/components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <DatePicker /> */}
      </div>
    );
  }
}

export default App;
