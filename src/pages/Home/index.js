import React from 'react';
import ReactEmoji from 'react-emoji';
import Post from '../../components/Post';
import './style.css';

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
          When life gives you lemons, demand a watermelon instead. <br/>You deserve it.
        </div>
        <div className="Home-container">
          <div className="Home-item">
            <Post header="Right and Wrong - The Uncertainty Principle" footer="#philosophy #TwoSides #NotDiplomacy">
              Nothing is ever right or wrong. <br/><br/>
              Everything is right and wrong. It's all relative. <br/><br/>
            </Post>
          </div>
          <div className="Home-item">
            <Post header="Don't we all?" footer="#philosophy">
              What do you want to do with your life on this planet?<br /><br />
              <strong>create something and make the World a better place</strong><br /><br />
              Well, there is no reason to believe that the existence and dominance of human race is any beneficial to the World. So, you don’t really want to make the World better, you just want to improve the lifestyle of your species - no, actually you just want to do something to subjectively feel that progress.<br /><br />
              <strong>umm… sure</strong><br /><br />
              Don’t we all?<br /><br />
            </Post>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
