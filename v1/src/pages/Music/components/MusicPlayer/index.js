import React from 'react';
import Sound from 'react-sound';
import { Icon } from 'react-fa';
import PropTypes from 'prop-types';
import './style.css'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: props.tracks[0],
      playerStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      positionFraction: 0,
      playFromPosition: 0,
      loop: false
    };
  }

  togglePlay(){
    if(this.state.playerStatus === Sound.status.PLAYING){
      this.setState({playerStatus: Sound.status.PAUSED})
    } else {
      this.setState({playerStatus: Sound.status.PLAYING})
    }
  }

  toggleLoop(){
    this.setState({loop: !this.state.loop});
  }

  stop(){
    this.setState({
      playerStatus: Sound.status.STOPPED,
      position: 0,
      positionFraction: 0,
      elapsed: '00:00'
    });
  }

  forward(){
    if(this.state.playerStatus === Sound.status.PLAYING){
      this.setState({
        playFromPosition: this.state.position + 1000*10,
      });
    }
  }

  backward(){
    if(this.state.playerStatus === Sound.status.PLAYING){
      this.setState({
        playFromPosition: this.state.position - 1000*10
      });
    }
  }

  playTrack(trackIndex){
    if(this.props.tracks[trackIndex] !== undefined){
      this.setState({
        track: this.props.tracks[trackIndex],
        playFromPosition: 0,
        playerStatus: Sound.status.PLAYING
      })
    }
  }

  playNextTrack(forceLoop){
    const currentIndex = this.props.tracks.indexOf(this.state.track)
    const nextIndex = (currentIndex >= this.props.tracks.length - 1) ? 0 : currentIndex + 1
    if(currentIndex < this.props.tracks.length - 1 || (this.state.loop || forceLoop)){
      this.playTrack(nextIndex);
    }
  }

  playPreviousTrack(forceLoop){
    const currentIndex = this.props.tracks.indexOf(this.state.track)
    const nextIndex = (currentIndex <= 0) ? this.props.tracks.length - 1 : currentIndex - 1
    if(currentIndex > 0 || (this.state.loop || forceLoop)){
      this.playTrack(nextIndex);
    }
  }

  playRandomTrack(){
    const randomIndex = Math.floor((Math.random() * this.props.tracks.length) + 1);
    this.playTrack(randomIndex);
  }

  formatMilliseconds(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;
    let minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;
    let seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (hours === 0 ? '' : (hours < 10 ? '0' : '') + hours + ':') +
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds;
  }

  handleSongPlaying(audio){
    this.setState({  elapsed: this.formatMilliseconds(audio.position),
                      total: this.formatMilliseconds(audio.duration),
                      position: audio.position,
                      positionFraction: audio.position / audio.duration })
  }

  handleSongFinished () {
    this.setState({playerStatus: Sound.status.PAUSED});
    this.playNextTrack(false);
  }

  render() {
    let _this = this;
    return (
      <div className="MusicPlayer">
        <Sound
          url={ this.state.track.track_url }
          playStatus={ this.state.playerStatus }
          onPlaying={ this.handleSongPlaying.bind(this) }
          playFromPosition={ this.state.playFromPosition }
          onFinishedPlaying={ this.handleSongFinished.bind(this) }/>
        <div className="MusicPlayer-now-playing">
          <img className="now-playing-cover-art" src={ this.state.track.cover_art_url } alt={ this.state.track.title }/>
          <div className="now-playing-description">
            <div className="now-playing-info">
              <div className="title">{ this.state.track.title }</div>
              <div className="artist">{ this.state.track.artist }</div>
              <div className="description">{ this.state.track.long_description }</div>
            </div>
            <div className="now-playing-controls">
              <div className="controls-time">
                <span className="elapsed">{ this.state.elapsed }</span>
                <div className="seeker-container">
                  <div className="seeker-filler" style={ {width: (this.state.positionFraction * 100) + "%" } }>
                  </div>
                </div>
                <span className="total">{ this.state.total }</span>
              </div>
              <div className="controls-buttons">
                <div className="controls-buttons-item backward" onDoubleClick={ this.playPreviousTrack.bind(this, true) } onClick={ this.backward.bind(this) }><Icon name="backward" /></div>
                <div className="controls-buttons-item stop" onClick={ this.stop.bind(this) }><Icon name="stop" /></div>
                <div className="controls-buttons-item pause" onClick={ this.togglePlay.bind(this) }>{ this.state.playerStatus === Sound.status.PLAYING ? <Icon name="pause" /> : <Icon name="play" /> }</div>
                <div className="controls-buttons-item forward" onDoubleClick={ this.playNextTrack.bind(this, true) } onClick={ this.forward.bind(this) }><Icon name="forward" /></div>
                <div className="controls-buttons-item loop" onClick={ this.toggleLoop.bind(this) }>{ this.state.loop ?  <Icon name="repeat" /> : <Icon style={ {color: "gray"} } name="repeat" />}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="MusicPlayer-playlist">
          {
            this.props.tracks.map(function(track, index){
              return(
                <div key={ index } className="playlist-item" onClick={ _this.playTrack.bind(_this, index) }>
                  <div className="playing-indicator">
                    {
                      (_this.state.track === track && _this.state.playerStatus === Sound.status.PLAYING) ?
                        <Icon name="volume-up" /> : ""
                    }
                  </div>
                  <div className="item-metainfo">
                    <div className="title">{ track.title }</div>
                    <div className="artist">{ track.artist }</div>
                    <div className="description">{ track.short_description }</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

MusicPlayer.PropTypes = {
  songs: PropTypes.arrayOf(PropTypes.object)
}

export default MusicPlayer
