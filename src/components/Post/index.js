import React from 'react';
import './style.css'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Post-container">
        <div className="Post-header">
          { this.props.header }
        </div>
        <div className="Post-content">
          { this.props.children }
        </div>
        <div className="Post-footer">
          { this.props.footer }
        </div>
      </div>
    )
  }
}

export default Post
