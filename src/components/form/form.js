import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      body:'',
      request: {}
    };
  }
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (this.state.url && this.state.method) {
  //       try {
  //         const raw = await fetch(`${this.state.url}`);
  //         const data = await raw.json();
  //         let results = {
  //           Headers : raw.headers,
  //           Response : data
  //         }
  //         this.props.handler(results);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //   }
  // };
  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.url) {
      switch (this.state.method) {
        case 'get':
          try {
            let raw = await fetch(this.state.url);
            let data = await raw.json();
            let head;
            raw.headers.forEach(value => {
              head = { 'Content-Type': value }
            })
            let results = {
              Headers: head,
              Response: data
            }
            this.props.handler(results);
          } catch (e) {
            console.log(e);
          }
          break;
        case 'post':
        case 'put':
          if (this.state.body) {
            fetch(this.state.url, {
              method: `${this.state.method}`,
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: this.state.body
            })
              .then(data => data.json()).then(results => {
                this.props.handler(results);
              })
          } else {
            alert('please Enter the body');
          }
          break;
        case 'delete':
          fetch(this.state.url, {
            method: `${this.state.method}`,
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
          })
            .then(() => {
              this.props.handler({results:'Deleted ....'});
            })
      }
    }
  }

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