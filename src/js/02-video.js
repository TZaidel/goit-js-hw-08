import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe)
const CURRENT_TIME ='videoplayer-current-time'
 
const savedTime = localStorage.getItem(CURRENT_TIME) || 0;
console.log(savedTime)

player.setCurrentTime(savedTime);

const saveTime = function (data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on("timeupdate", throttle(saveTime, 1000));

