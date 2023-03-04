// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onChange = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {isClicked ? (
          <div className="response-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
            <h1 className="heading">Thank You!</h1>
            <p className="paragraph">
              We will use your feedback to improove our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="emoji-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>

            <ul className="emojis-arrange">
              {emojis.map(each => (
                <li className="sad-container">
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="emoji"
                    onClick={this.onChange}
                    key={each.id}
                  />
                  <p>{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
