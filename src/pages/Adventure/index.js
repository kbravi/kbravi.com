import React from 'react';
import ReactEmoji from 'react-emoji';
import InstagramEmbed from 'react-instagram-embed'
import './style.css';

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
        <div className="Adventure-container">
          <div className="Adventure-item">
            <InstagramEmbed
              url='https://www.instagram.com/p/BVxO6kOlvbC/'
              maxWidth={400}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div className="Adventure-item">
            <InstagramEmbed
              url='https://www.instagram.com/p/BJwoat0B1ED/'
              maxWidth={400}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div className="Adventure-item">
            <InstagramEmbed
              url='https://www.instagram.com/p/BIjNWJsjCA4/'
              maxWidth={400}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div className="Adventure-item">
            <InstagramEmbed
              url='https://www.instagram.com/p/BHsm5FHBpxT/'
              maxWidth={400}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Adventure

