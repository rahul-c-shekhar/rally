import React from 'react';
import CorporateTable from './CorporateTable';

class ViewCorporate extends React.Component {
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
        <h1 align="center">Registered Corporates</h1>
        <CorporateTable></CorporateTable>
      </div>
    );
  }
}

export default ViewCorporate;
