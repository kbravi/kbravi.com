import React from 'react';
import ReactEmoji from 'react-emoji';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App-page">
        <div className="App-page-header">
          { ReactEmoji.emojify("Hello, You! :wave:", {emojiType: "emojione"}) }
        </div>
        <div className="App-page-description">
          When life gives you lemons, demand watermelons instead 'coz you totally deserve them.
        </div>
      </div>
    );
  }
}

export default Home
