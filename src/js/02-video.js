import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
    );

setCurrentTime()
function setCurrentTime(){
    if(!localStorage.getItem('videoplayer-current-time')){
        return
    }
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
}