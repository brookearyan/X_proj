import React from 'react';




class ZipInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: '', city: '', state: '' };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

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
      });
  }


  render() {
    console.log(this.state);
    return(
      <section>
        <form onSubmit={this.clearForm} name="zip-form">
          <input type="text" name="zip"/>
          <br /><br />
          <input onClick={this.handleOnSubmit} type="submit" value="submit"/>
        </form>
        <article>
          <h3>zipcode: {this.state.zipcode}</h3>
          <h3>city: {this.state.city}</h3>
          <h3>state: {this.state.state}</h3>
        </article>
      </section>
    )
  }
}

  export default ZipInfo;
