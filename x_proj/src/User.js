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
      <section className="user">
        <article className="user-form">
          <form onSubmit={this.handleOnSubmit}>
            <tr><td><label> name: </label>
            <input onChange={this.handleOnChangeName} type="text" name="name"/></td></tr>
            <tr><td><label> annual net income: </label>
            <input onChange={this.handleOnChangeIncome}type="integer" name="income"/></td></tr>
            <tr><td><label> marital status: </label>
            <input onChange={this.handleOnChangesStatus} type="checkbox" name="marital_status" value="married"/> married, filing jointly
            <input onChange={this.handleOnChangesStatus} type="checkbox" name="marital_status" value="single"/> single
            <input type="submit" value="submit"/></td></tr>
          </form>
        </article>
        <article className="user-info">
          <tr>
            <td> name: {this.state.name}</td>
          </tr>
          <tr>
            <td>annual net income: {this.state.income}</td>
          </tr>
          <tr>
            <td>marital status: {this.state.marital_status}</td>
          </tr>
        </article>
      </section>
    )
  }

}

export default User;
