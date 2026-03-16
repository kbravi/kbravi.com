import React from 'react'
import { Link } from 'react-router-dom'
import SadRobotImage from './images/sad_robot.svg'
import RobotLineupImage from './images/robot_lineup.svg'
import RobotFamilyImage from './images/robot_family.svg'
import './style.css'

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-not-found-container">
        <img src={ [SadRobotImage, RobotLineupImage, RobotFamilyImage][Math.floor(Math.random() * 3)] } alt="Sad Robots"/>
        <div>
          <h1>
            Uh.. ho!
          </h1>
          I am not sure where to take you. <br />
          Let us go back to the <Link to="/">home page.</Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound
