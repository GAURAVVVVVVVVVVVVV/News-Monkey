import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color="#f11946"
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" category="general" />} />
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" category="general" />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="health" category="health" />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="science" category="science" />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" category="technology" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
