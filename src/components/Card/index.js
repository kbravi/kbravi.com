import React from 'react';
import './style.css'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a href={ this.props.url } target="_blank" rel="noopener noreferrer nofollow" className="Card-container">
        <div className="Card-header">
          { this.props.header }
        </div>
        <div className="Card-content">
          { this.props.content }
        </div>
        <div className="Card-footer">
          { this.props.footer }
        </div>
      </a>
    )
  }
}

export default Card
