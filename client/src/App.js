import React, { Component } from 'react';
import Header from './components/Header';
import api from "./utility/api";

class App extends Component {
state ={
  articles: []
}  

componentDidMount = () => {
  api.getNYTSearch().then(res =>{
    this.setState({
      articles: res.data
    });
  });
}
  
  
  render() {
    return (
      <div>
        <Header />
        <p></p>
      </div>
    );
  }
}

export default App;
