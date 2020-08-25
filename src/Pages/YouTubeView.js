import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components'

export default class YouTubeView extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return <HomeStyled><YouTube videoId="rpRnh0Gp50o" opts={opts} onReady={this._onReady} /></HomeStyled>;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const HomeStyled = styled.span`
    display: flex;
    margin-top: 1em;
    margin-left: 7.5em;
    margin-right: 5em;
    margin-bottom: 5em;
`;