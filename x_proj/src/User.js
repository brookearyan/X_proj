import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', income: '', marital_status: '' }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeIncome = this.handleOnChangeIncome.bind(this);
    this.handleOnChangesStatus = this.handleOnChangesStatus.bind(this);

  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);
  }

  handleOnChangeName(ev) {
    this.setState({ name: ev.target.value });
  }

  handleOnChangeIncome(ev) {
    this.setState({ income: ev.target.value });

  }
  handleOnChangesStatus(ev) {
    this.setState({ marital_status: ev.target.value });
  }



  render() {
    return (
      <article>
        <form onSubmit={this.handleOnSubmit} className="user-info">
          <label> name: </label>
          <input onChange={this.handleOnChangeName} type="text" name="name"/><br />
          <label> annual net income: </label>
          <input onChange={this.handleOnChangeIncome}type="integer" name="income"/><br />
          <label> marital status: </label>
          <input onChange={this.handleOnChangesStatus} type="checkbox" name="marital_status" value="married"/> married, filing jointly
          <input onChange={this.handleOnChangesStatus} type="checkbox" name="marital_status" value="single"/> single <br />
          <input type="submit" value="submit"/>
        </form>
        <h3>name: {this.state.name}</h3>
        <h3>annual net income: {this.state.income}</h3>
        <h3>marital status: {this.state.marital_status}</h3>
      </article>
    )
  }

}

export default User;
