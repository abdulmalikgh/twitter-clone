import React from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends React.Component{
 render(){
     return (
         <div className='tweet'>

         </div>
     )
 }
}
function mapStateToProps({authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    const author = users[tweet.author]
    return {
        authedUser,
        tweet: formatTweet(tweet, author, authedUser)
    }
}
export default connect(mapStateToProps)(Tweet)