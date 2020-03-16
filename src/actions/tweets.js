export const RECEIVE_TWEET = 'RECEIVE_TWEET';

export function receiveTweet(tweets){
    return {
        type: RECEIVE_TWEET,
        tweets
    }
}