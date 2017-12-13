import React from 'react';

  const displayData = (data) => {
    console.log(data)
  };

  
class ZipInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }


  handleOnSubmit(ev) {
    ev.preventDefault();
    let zip = document.forms["zip-form"]["zip"].value;
    console.log(zip);
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://www.zipcodeapi.com/rest/XlalQH6kVoPgkQjAkDWKj3JTCESokMN134oprDwrEMItEUtlRWi8WHxHiqS8COyz/info.json/',
        end = '/degrees'
    fetch(proxyUrl + targetUrl + zip + end)
      .then(blob => blob.json())
      .then(data => {
        displayData(data);
        return data;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }


  render() {
    return(
      <form name="zip-form">
        <input type="text" name="zip"/>
        <br /><br />
        <input onClick={this.handleOnSubmit} type="submit" value="submit"/>
      </form>
    )
  }
}

  export default ZipInfo;
