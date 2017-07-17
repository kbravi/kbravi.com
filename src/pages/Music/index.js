import React from 'react';
import ReactEmoji from 'react-emoji';
import MusicPlayer from './components/MusicPlayer';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const songs = [
      {
        title: "En Mel Vizhundha",
        artist: "Harini & Karthik Ravichandran",
        track_url: "https://s3.amazonaws.com/kbravi/music/en_mel_vizhundha.mp3",
        cover_art_url: "https://s3.amazonaws.com/kbravi/photos/mine/yosemite_falls.jpg",
        short_description: "#ARRahman #Tamil #AkkaThambiDuet #Karaoke",
        long_description: ""
      },
      {
        title: "Azhagiye",
        artist: "Karthik Ravichandran",
        track_url: "https://s3.amazonaws.com/kbravi/music/azhagiye.mp3",
        cover_art_url: "https://s3.amazonaws.com/kbravi/photos/mine/azhagiye.jpg",
        short_description: "#ARRahman #Tamil #KaatruVeliyidai #Karaoke",
        long_description: ""
      },
      {
        title: "Chinna Chinna Thooral",
        artist: "Karthik Ravichandran",
        track_url: "https://s3.amazonaws.com/kbravi/music/chinna_chinna_thooral.mp3",
        cover_art_url: "https://s3.amazonaws.com/kbravi/photos/stock/leaf.jpg",
        short_description: "#Illayaraja #Tamil #Karaoke",
        long_description: ""
      },
      {
        title: "Narumugaiye",
        artist: "Harini & Karthik Ravichandran",
        track_url: "https://s3.amazonaws.com/kbravi/music/narumugaiye.mp3",
        cover_art_url: "https://s3.amazonaws.com/kbravi/photos/stock/lavender.jpg",
        short_description: "#ARRahman #RajeshVaidya #Tamil #Karaoke",
        long_description: ""
      },
      {
        title: "Channa Mereya",
        artist: "Karthik Ravichandran",
        track_url: "https://s3.amazonaws.com/kbravi/music/channa_mereya.m4a",
        cover_art_url: "https://s3.amazonaws.com/kbravi/photos/stock/moon.jpg",
        short_description: "#Pritam #Hindi #Karaoke",
        long_description: ""
      }
    ]
    return (
      <div className="App-page">
        <div className="App-page-header">
          { ReactEmoji.emojify("Music :man_dancing:", {emojiType: "emojione"}) }
        </div>
        <div className="App-page-description">Sing-alongs and Karaokes. Mostly good, sometimes not so much.</div>
        <MusicPlayer tracks={ songs }/>
      </div>
    );
  }
}

export default Music
