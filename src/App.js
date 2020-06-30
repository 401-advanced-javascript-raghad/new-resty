import React from 'react';
import Form from './components/form/form'
import Result from './components/results/results'

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
      <>
        <Form handler={this.handleForm} />
        <Result result={this.state.result}/>
      </>
    );
  }
}

export default App;