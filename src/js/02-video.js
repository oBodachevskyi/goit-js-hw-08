import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function() {
        player.getCurrentTime().then(function(sec) {
            console.log(sec)
            localStorage.setItem("videoplayer-current-time", sec)
        })
    }, 1000),)
 

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(sec) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    }); 