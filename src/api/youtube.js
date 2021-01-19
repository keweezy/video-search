import axios from 'axios'
// const KEY = 'AIzaSyBm2QwbhvShWA_p6BzKXtmb1b-CilWZfGw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
            // part: 'snippet',
            // maxResults: 5,
            // // key: KEY,
            // type: 'video'
    }
})