import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      request: {}
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.url && this.state.method) {
        try {
          const raw = await fetch(`${this.state.url}`);
          const data = await raw.json();
          let results = {
            Headers : raw.headers,
            Response : data
          }
          this.props.handler(results);
        } catch (e) {
          console.log(e);
        }
    }
  };

  handleChangeUrl = (e) => {
    const url = e.target.value;
    this.setState({ url })
  };
  handleChangeMethod = (e) => {
    const method = e.target.value;
    this.setState({ method })
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label className="url">
            <span>URL:</span>
            <input type="text" id="url"  onChange={this.handleChangeUrl} />
            <input id="submit" type="submit" value ="GO!"/>
          </label>
          <label className="methods">
            <input onChange={this.handleChangeMethod} type="radio" id="get" name="method" value="get" />
            <label>GET</label>
            <input onChange={this.handleChangeMethod} type="radio" id="post" name="method" value="post" />
            <label>POST</label>
            <input onChange={this.handleChangeMethod} type="radio" id="put" name="method" value="put" />
            <label>PUT</label>
            <input onChange={this.handleChangeMethod} type="radio" id="delete" name="method" value="delete" />
            <label>DELETE</label>
          </label>
        </form>
    );
    
  }
}

export default Form;