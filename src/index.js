import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import App from './App';


class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header />
        <App />
        <Footer />
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
