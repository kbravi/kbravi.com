import React from 'react';
import ReactEmoji from 'react-emoji';

class ReactEmojiOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        {
          ReactEmoji.emojify(this.props.children,
                              {
                                emojiType: 'emojiOne',
                                host: 'https://cdn.jsdelivr.net',
                                path: 'emojione/assets/svg'
                              }
                            )
        }
      </span>
    )
  }
}

export default ReactEmojiOne
