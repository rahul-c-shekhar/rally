import React from 'react';
import ContactTable from './ContactTable';

class ViewContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    let container = {
      marginTop: '58px',
      marginBottom: '70px',
      marginRight: '10px',
      marginLeft: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    };
    return (
      <div style={container}>
        <h1 align="center">Contact Form Queries</h1>
        <ContactTable></ContactTable>
      </div>
    );
  }
}

export default ViewContact;
