import React from 'react';
import ReactEmoji from 'react-emoji';
import Card from '../../components/Card';
import './style.css'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cards= [
      {
        url: "https://github.com/kbravi/acts_as_content_highlightable",
        header: "acts_as_content_highlightable",
        content: "Ruby gem that provides HTML text highlighting feature for web/mobile applications",
        footer: "#Package #Rails #Highlights"
      },
      {
        url: "https://github.com/kbravi/modest_canvas",
        header: "Modest Canvas",
        content: "Some useful chart modules with D3js. Donut chart, Scatter plot, Word Cloud, Edge bundling, etc.",
        footer: "#Package #Javascript #Charts #D3"
      },
      {
        url: "https://slack.com/apps/A59R4PHEJ-ahabot",
        header: "AhaBot for Slack",
        content: "SlackBot that helps teams share obstacles and get to Aha! moments often. More at https://ahabot.mindsumo.com",
        footer: "#Bots #Slack #Rails"
      },
      {
        url: "https://www.mindsumo.com",
        header: "MindSumo - Web App",
        content: "Crowdsourcing platform connecting millennials and companies. Demo the company side of the application at https://www.mindsumo.com/demo",
        footer: "#WebApp #MindSumo #Rails #HTML"
      },
      {
        url: "http://onelink.to/7evjgd",
        header: "MindSumo - iOS/ Android",
        content: "Millennial facing Mobile applications for MindSumo. Built iOS with Swift and Android with Android Studio. Features deep linking, push notifications, and other essentials.",
        footer: "#iOS #Android #MindSumo #Swift #Java"
      },
      {
        url: "https://github.com/kbravi/kbravi.com",
        header: "You're looking at it",
        content: "This mindblowingly beautiful static website was built on React - the music player, content, and everything.",
        footer: "#Meta #WebApp #React"
      },
      {
        url: "https://github.com/kbravi/omniauth-paypal-openid",
        header: "PayPal OpenID Auth",
        content: "Omniauth strategy for PayPal OpenID",
        footer: "#Package #OAuth2 #OpenID"
      },
      {
        url: "https://github.com/kbravi/redactor_rails",
        header: "Redactor for Rails",
        content: "Rails integration for WYSIWYG Redactor editor",
        footer: "#Package #TextEditor"
      },
      {
        url: "https://github.com/kbravi/rails_react_antd_boilerplate",
        header: "Rails + React + AntD",
        content: "Boilerplate application with Rails, React (webpack), Ant Design UI - all set up and ready to go",
        footer: "#Boilerplate #React #Rails"
      },
      {
        url: "http://cs229.stanford.edu/proj2013/RavichandranChiassonOyedele%20-%20ClassificationOfElectrocardiogramAnamalies.pdf",
        header: "ECG Anomalies Detection (ML)",
        content: "Algorithm to train machines to detect anomalies in ECG - 97.2% accuracy. Uses SVM, Random Forest, PCA, and Kernel optimization",
        footer: "#MachineLearning #CS229 #MatLab"
      },
      {
        url: "https://e2e.ti.com/group/universityprogram/w/contests/2436.previous-winners#2",
        header: "Non Invasive Glucometer",
        content: "Hardware and Firmware that measure blood glucose levels non invasively. Won Texas Instruments Analog Design Contest.",
        footer: "#Biomedical #C++ #EmbeddedSystems"
      },
    ]
    return (
      <div className="App-page">
        <div className="App-page-header">
          { ReactEmoji.emojify("Projects :robot:", {emojiType: "emojione"}) }
        </div>
        <div className="App-page-description">Recent projects - software, applications, open source packages and other things</div>
        <div className="Projects-list">
          {
            cards.map(function(card, index){
              return(
                <Card url={ card.url } header={ card.header } content={ card.content } footer={ card.footer } />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects
