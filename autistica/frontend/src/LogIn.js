

import './LogIn.css';
import React from 'react';
import ReactDOM from 'react-dom';


class LogIn extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};


  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});

}
  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="LogIn">
      <header className="LogInHeader">
      <form onSubmit={this.handleSubmit}>
      <label>
        <h1>Username: </h1>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
      </form>
      </header>
      </div>
    );
  }
}
ReactDOM.render(<LogIn/>, document.getElementById('root'));
export default LogIn;
