import React from 'react';
import './style.css'

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Bubble-container">
        {
          this.props.level ?
          <span className="Bubble-level-indicator" style={ {height: this.props.level} }/> : ""
        }
        <span className="Bubble-content">
          { this.props.children }
        </span>
      </div>
    )
  }
}

export default Bubble
