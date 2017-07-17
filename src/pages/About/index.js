import React from 'react';
import ReactEmoji from 'react-emoji';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App-page">
        <div className="App-page-header">
          { ReactEmoji.emojify("Mea Fabula :blush:", {emojiType: "emojione"}) }
        </div>
        <div className="App-page-description">
          Not so long ago, in a land that is not very far from where you are, it all started....
        </div>
      </div>
    );
  }
}

export default About
