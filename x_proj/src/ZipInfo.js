import React from 'react';

class ZipInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      city: '',
      state: ''
    };
    this.handleOnSubmit =
      this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    let zip = document.forms["zip-form"]["zip"].value;
    console.log(zip);
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://www.zipcodeapi.com/rest/trRnvu3HExp6ssxTmAHTVYDcBnGiO20Th9PTnOfuCbUQPHuZxM9UBHGZM9XkcLIQ/info.json/',
        end = '/degrees'
    fetch(proxyUrl + targetUrl + zip + end)
      .then(blob => blob.json())
      .then(data => {
        this.setState({ zipcode: data.zip_code, city: data.city, state: data.state });
      })
      .catch(e => {
        console.log(e);
        return e;
      }
    );
  }

  render() {
    console.log(this.state);
    return(
      <section className="get-zip">
        <article className="submit">
          <form onSubmit={this.clearForm} name="zip-form">
          <tr><td><label> zipcode: </label></td></tr>
          <tr><td><input type="text" name="zip"/></td></tr>
          <tr><td><input onClick={this.handleOnSubmit} type="submit" value="submit"/></td></tr>
          </form>
        </article>
        <article className="render-zipinfo">
          <tr><td>zipcode: {this.state.zipcode}</td></tr>
          <tr><td>city: {this.state.city}</td></tr>
          <tr><td>state: {this.state.state}</td></tr>
        </article>
      </section>
    )
  }
}

export default ZipInfo;
