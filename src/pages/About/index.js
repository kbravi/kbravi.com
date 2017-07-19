import React from 'react';
import ReactEmojiOne from '../../components/ReactEmojiOne';
import Post from '../../components/Post';
import Separator from '../../components/Separator';
import Bubble from '../../components/Bubble';
import InfoSection from './components/InfoSection';
import './style.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App-page">
        <div className="App-page-header">
          <ReactEmojiOne>
            Mea Fabula :blush:
          </ReactEmojiOne>
        </div>
        <div className="App-page-description">
          Not so long ago, in a land that is not very far from where you are, it all started....
        </div>
        <div className="About-container">
          <div className="About-item">
            <Post header="Work" footer="#ConnectingTheDots #Startups">
              <InfoSection header="Head of Product & Engineering"
                          img="https://s3.amazonaws.com/kbravi/photos/images/mindsumo_icon.png"
                          subheader1="MindSumo, Inc."
                          subheader2="Apr 2014 - present">
                <ul className="App-list">
                  <li>
                    MindSumo is a best of its kind <strong>crowdsourcing platform</strong> that connects companies and millennials.
                    Companies launch a variety of <strong>challenges</strong> to source ideas, work and insights.
                    Solvers compete in challenges to win prizes, experience, and recognition.
                    Currently serving about <strong>100 companies in the Fortune 500</strong> list, and over <strong>300,000 millennials</strong>.
                  </li>
                  <li>
                    I joined MindSumo as an Engineer (Data and Full Stack) in April 2014.
                    Since August 2015, I have been leading and managing all Product and Engineering efforts.
                  </li>
                  <li>
                    Grew the solver community <strong>10x in 18 months</strong> (+ a strong y/y user and MAU growth) with strategies
                    and features including peer referrals, incentive strategies, marketing campaigns, SEO, and conversion optimization.
                  </li>
                  <li>
                    Implemented ways to improve Sales lead generation, enterprise NPS, and overall team efficiency,
                    which led to company profitability, and a <strong>10% mo/mo bookings growth for 12 months</strong>.
                  </li>
                  <li>
                    Designed strategies to increase the number of challenges that a company launches in a year by <strong>50%</strong>.
                  </li>
                  <li>
                    Implemented dozens of <strong>successful features for the enterprise</strong> -
                    white label product, insights dashboard, submission reviewing, NLP and text analysis,
                    text highlights, Solver payments, intra-organization referrals, need collection, and third-party integrations.
                  </li>
                  <li>
                    Developed <strong>iOS and Android applications</strong> for MindSumo solvers.
                  </li>
                  <li>
                    Established best practices and frameworks for team-wide accountability,
                    priority/ goal setting, and collecting customer feedback.
                  </li>
                  <li>
                    Hired and led engineering, and product marketing teams.
                  </li>
                  <li>
                    [current priority] An <strong>end-to-end crowdsourcing platform (AhaKit)</strong>
                    that integrates into the workflow for consulting and CPG clients.
                    The platform will be integrated across the organization.
                    It starts from collecting needs via <strong>'Ahabot'</strong> (now available on slack), qualifying those needs
                    and launching crowdsourcing challenges across a variety of communities and vendors,
                    consuming submissions, to extracting insights.
                  </li>
                </ul>
              </InfoSection>
              <Separator />
              <InfoSection header="Engineer Intern"
                          img="https://s3.amazonaws.com/kbravi/photos/images/prophecy_sciences_icon.png"
                          subheader1="Prophecy Sciences, Inc."
                          subheader2="Summer 2013">
                <ul className="App-list">
                  <li>
                    <strong>(Acquired by Lumosity)</strong>
                  </li>
                  <li>
                    I interned here in Summer 2013 during my Masters at Stanford.
                    I helped Prophecy Sciences build its <strong>neuroscience based behavioral analysis system</strong> that was used by corporations
                    and staffing firms to gather more data points about a candidate.
                    The system includes a hardware unit that measures the user's physiological signals
                    such as heart rate, skin conductance, and pupil dilation while they take a test
                    that included logic puzzles, and behavioral profiling exercises.
                  </li>
                  <li>
                    Built their entire hardware/ software unit -
                    sensors, microcontrollers, firmwares, computer interfaces, and housing units.
                  </li>
                  <li>
                    Helped develop a very interesting ML algorithm
                    that processed all the data to provide insights and results.
                  </li>
                </ul>
              </InfoSection>
            </Post>
          </div>
          <div className="About-item">
            <Post header="School" footer="#GreatSchools #100YearOld">
              <InfoSection header="MS - Electrical Engineering"
                          img="https://s3.amazonaws.com/kbravi/photos/images/stanford_university.png"
                          subheader1="Stanford University"
                          subheader2="Sep 2012 - Apr 2014">
                <ul className="App-list">
                  <li>
                    Data Science, Machine Learning, Software Engineering,
                    Analog Circuits, Quantum Mechanics, and General Relativity
                  </li>
                </ul>
              </InfoSection>
              <Separator />
              <InfoSection header="BE - Electronics & Communication"
                          img="https://s3.amazonaws.com/kbravi/photos/images/ceg.png"
                          subheader1="College of Engineering, Guindy - Anna University"
                          subheader2="Aug 2008 - Apr 2012">
                <ul className="App-list">
                  <li>
                    Software/Hardware, Analog Circuits, Biomedicine, Signal Processing, and Communication
                  </li>
                  <li>
                    Governor's Gold Medal
                  </li>
                </ul>
              </InfoSection>
            </Post>
          </div>
          <div className="About-item">
            <Post header="Interests" footer="#AlwaysLearning">
              <InfoSection header="Skills & Tools"
                          img="https://s3.amazonaws.com/kbravi/photos/images/tools.png">
                <div className="CenterText">
                  <Bubble level="90%">Product Management</Bubble>
                  <Bubble level="85%">User Experience</Bubble>
                  <Bubble level="85%">Internet Products</Bubble>
                  <Bubble level="75%">Business Strategy</Bubble>
                  <Bubble level="55%">Enterprise Software</Bubble>
                  <br /><br />
                  <Bubble level="90%">Ruby on Rails</Bubble>
                  <Bubble level="90%">HTML</Bubble>
                  <Bubble level="80%">CSS</Bubble>
                  <Bubble level="80%">Javascript</Bubble>
                  <Bubble level="50%">ReactJs</Bubble>
                  <Bubble level="40%">iOS</Bubble>
                  <Bubble level="40%">Swift</Bubble>
                  <Bubble level="40%">Android</Bubble>
                  <Bubble level="40%">Java</Bubble>
                  <Bubble level="30%">Bots</Bubble>
                  <br /><br />
                  <Bubble level="30%">Machine Learning</Bubble>
                  <Bubble level="20%">Data Science</Bubble>
                </div>
              </InfoSection>
              <Separator />
              <InfoSection header="Activities"
                          img="https://s3.amazonaws.com/kbravi/photos/images/activity.png">
                <div className="EmojiList CenterText">
                  <ReactEmojiOne>
                    :runner: :bicyclist: :mountain_snow: :badminton: :tent: :volleyball: :cricket:
                  </ReactEmojiOne>
                </div>
              </InfoSection>
              <Separator />
              <InfoSection header="Art"
                          img="https://s3.amazonaws.com/kbravi/photos/images/art.png">
                <div className="EmojiList CenterText">
                  <ReactEmojiOne>
                    :musical_score: :microphone: :musical_keyboard: :clapper: :bread: :salad:
                  </ReactEmojiOne>
                </div>
              </InfoSection>
            </Post>
          </div>
          <div className="About-item">
            <Post header="Places" footer="#BestCities #Beautiful #SoMuchToSee">
              <InfoSection header="San Francisco"
                          img="https://s3.amazonaws.com/kbravi/photos/images/san_francisco.jpg"
                          subheader1="California, USA"
                          subheader2="Sep 2012 - present">
                <ul className="App-list">
                  <li>
                    Home away from Home
                  </li>
                  <li>
                    Favorite places: Yosemite, SF Marina, Stanford, Palace of Fine Arts, Pacific Heights, Ferry building, etc.
                  </li>
                </ul>
              </InfoSection>
              <Separator />
              <InfoSection header="Chennai"
                          img="https://s3.amazonaws.com/kbravi/photos/images/tamilnadu.png"
                          subheader1="TamilNadu, India"
                          subheader2="Dec 1990 - Sep 2012">
                <ul className="App-list">
                  <li>
                    Born & Brought up
                  </li>
                  <li>
                    Favorite places: Marina Beach, Adyar river, CEG, IIT Campus, etc.
                  </li>
                </ul>
              </InfoSection>
            </Post>
          </div>
        </div>
      </div>
    );
  }
}

export default About
