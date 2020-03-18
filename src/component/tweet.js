import React from 'react';
import { connect } from 'react-redux';
import { formatTweet,formatDate } from '../utils/helpers';
import {TiHeartFullOutline} from 'react-icons/ti';
import {TiHeartOutline} from 'react-icons/ti';
import {TiArrowBackOutline} from 'react-icons/ti';
class Tweet extends React.Component{
    toParent = (e) => {
       e.preventDefault()
       // redirect to parent tweet
    }
    handleLike = (e) => {
        e.preventDefault()
        // todo: Handle Like Tweet
    }
 render(){
    const { tweet } = this.props;
    const { name, avatar, timestamp, text, hasLiked, likes, replies, parent }
    = tweet;
    if(tweet === null) {
        return <p> This tweet doesn't exist </p>
    }
     return (
         <div className='tweet'>
          <img 
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
            />
            <div className='tweet-info'>
             <div>
              <span>{name}</span>
              <div>{ formatDate(timestamp) }</div>
              {
                  parent && (
                      <button className='replying-to' onClick={(e)=> {this.toParent()}}>
                          Replying to @{parent.author}
                      </button>
                  )
              }
              <p>{text}</p>
            </div>
            <div className='tweet-icons'>
             <TiArrowBackOutline className='tweet-icon' />
             <span>
                {replies !== 0 && replies}
             </span>
             <button className='heart-button' onClick={this.handleLike}>
              {hasLiked === true 
              ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
              : <TiHeartOutline className='tweet-icon' />}
             </button>
              <span>{likes !== 0 && likes }</span>
            </div>
         </div>
        </div>
     )
 }
}
function mapStateToProps({authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    const author = users[tweet.author];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
    return {
        authedUser,
        tweet:tweet ?
         formatTweet(tweet, author, authedUser,parentTweet)
         : null,
    }
}
export default connect(mapStateToProps)(Tweet)