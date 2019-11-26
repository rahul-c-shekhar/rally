import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import LakeImage from '../../../../images/image.jpg';

class LakeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cardData
    };
  }
  render() {
    return (
      <Card
        style={{ margin: 0, marginLeft: 15, marginRight: 15, marginBottom: 30 }}
      >
        <img
          style={{ height: 300 }}
          alt="Lake"
          src={
            `http://localhost:5000/uploads/${this.state.data.imgAfter}` ||
            `http://localhost:5000/uploads/${this.state.data.imgBefore}` ||
            LakeImage
          }
        />
        <Card.Content>
          <Card.Header>{this.state.data.recordNumber}</Card.Header>
          <Card.Meta>
            <span>{this.state.data.status}</span>
          </Card.Meta>
          <Card.Description>
            Click on Read More to view lake details.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/lakes/${this.state.data.recordNumber}`}>
            <Icon name="info" />
            Read More...
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

export default LakeCard;
