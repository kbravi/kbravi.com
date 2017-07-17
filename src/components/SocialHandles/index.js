import React from 'react';
import Icon from 'react-fa';
import './style.css'

class SocialHandles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SocialHandles-container">
        {
          this.props.handles.map(function(handle, index){
            return (
              <a key={ index } href={ handle.url } className="SocialHandles-item" target="_blank" rel="noopener noreferrer">
                <div className="item-icon" style={ {color: handle.color} }>
                  <Icon name={ handle.icon } />
                </div>
                <div className="item-handle" style={ {color: handle.color} }>
                  {handle.handle}
                </div>
              </a>
            )
          })
        }
      </div>
    );
  }
}

export default SocialHandles
