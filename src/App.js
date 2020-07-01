import React from 'react';
import Form from './components/form/form'
import Result from './components/results/results'
import { BrowserRouter, Route, NavLink, Router } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
    };
  }

  handleForm = (results) => {
    this.setState({ result: results });
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Results}>
          <Form toggleLoading={this.toggleLoading} handler={this.handelForm} setHistory={this.setHistory} />
          <Results results={this.state.results} loading={this.state.loading} />
        </Route>
        <Route exact path='/history' component={History}>
          <History history={this.state.history} />
        </Route>
        <Footer />
      </BrowserRouter>
    );
  }
}


export default App;