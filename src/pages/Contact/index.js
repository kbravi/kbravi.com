import React from 'react';
import ReactEmojiOne from '../../components/ReactEmojiOne';
import SocialHandles from '../../components/SocialHandles';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const handles=[
      {
        name:"LinkedIn",
        icon:"linkedin-square",
        handle: "@kbravi",
        url:"https://www.linkedin.com/in/kbravi/",
        color:"#0077B5"
      },
      {
        name:"GitHub",
        icon:"github-square",
        handle: "@kbravi",
        url:"https://github.com/kbravi",
        color:"#000000"
      },
      {
        name:"Instagram",
        icon:"instagram",
        handle: "@kbravi",
        url:"https://instagram.com/kbravi",
        color:"#4c68d7"
      },
      {
        name:"Email",
        icon:"envelope-square",
        handle: "kb1990@gmail.com",
        url:"mailto:kb1990@gmail.com",
        color:"#f32f04"
      },
      {
        name:"Product Hunt",
        icon:"product-hunt",
        handle: "@karthikbravi",
        url:"https://www.producthunt.com/@karthikbravi",
        color:"#DA552F"
      },
      {
        name:"Facebook",
        icon:"facebook-square",
        handle: "@karthikbravi",
        url:"https://www.facebook.com/karthikbravi",
        color:"#3b5998"
      },
      {
        name:"Twitter",
        icon:"twitter-square",
        handle: "@karthikbravi",
        url:"https://twitter.com/karthikbravi",
        color:"#00aced"
      }
    ]
    return (
      <div className="App-page">
        <div className="App-page-header">
          <ReactEmojiOne>
            Get in touch! :hugging:
          </ReactEmojiOne>
        </div>
        <div className="App-page-description">Let's talk about products, philosophy, internet, science, music, hiking, running and everything else.</div>
        <SocialHandles handles={ handles } />
      </div>
    );
  }
}

export default Contact
