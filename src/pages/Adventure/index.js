import React from 'react';
import ReactEmoji from 'react-emoji';

class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App-page">
        <div className="App-page-header">
          { ReactEmoji.emojify("Out and About :sunrise_over_mountains:", {emojiType: "emojione"}) }
        </div>
        <div className="App-page-description">
          Life is fun with Nature, People and Self.
        </div>
      </div>
    );
  }
}

export default Adventure
