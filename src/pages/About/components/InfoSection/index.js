import React from 'react';
import './style.css';

class InfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="InfoSection-container">
        <div className="InfoSection-hero-container">
          {
            this.props.img ?
            <img className="InfoSection-img" src={ this.props.img } alt={ this.props.header } /> : ""
          }
          <div className="InfoSection-header-container">
            <div className="InfoSection-header">{ this.props.header }</div>
            <div className="InfoSection-subheader">
              <span className="InfoSection-subheader1">
                { this.props.subheader1 }
              </span>
              <span className="InfoSection-subheader2">
                { this.props.subheader2 }
              </span>
            </div>
          </div>
        </div>
        <div className="InfoSection-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default InfoSection
