import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { method: '', url: '' };
        this.method = '';
        this.url = '';
    }

    urlHandler = (event) => {
        const url = event.target.value;
        this.url = url
    };

    methodHandler = (event) => {
        const method = event.target.value;
        this.method = method;
    };

    clickHandler = (event) => {
        this.setState({ method: this.method, url: this.url })
    };

    render() {
        return (
            < main className="main-class">
                <div className="url">
                    <label>URL:</label>
                    <input type="text" onChange={this.urlHandler} />
                    <button onClick={this.clickHandler}>GO!</button>
                    <br />
                </div>
                <div className="method">
                    <input onChange={this.methodHandler} type="radio" id="get" name="method" value="get" />
                    <label>GET</label>

                    <input onChange={this.methodHandler} type="radio" id="post" name="method" value="post" />
                    <label>POST</label>

                    <input onChange={this.methodHandler} type="radio" id="put" name="method" value="put" />
                    <label>PUT</label>

                    <input onChange={this.methodHandler} type="radio" id="delete" name="method" value="delete" />
                    <label>DELETE</label>
                </div>
                <div className='result'>
                    {this.state.method} {this.state.url}
                </div>
            </main>
        );
    }
}

export default Form;