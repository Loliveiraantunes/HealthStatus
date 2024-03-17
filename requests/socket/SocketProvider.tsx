
import io from 'socket.io-client';
import { HEALTH_LIFE_SUPPORT_HOST } from '~/constants/Connection';

const socket = io(HEALTH_LIFE_SUPPORT_HOST);

socket.on('connect', () => {
    console.log('Connected to server');
    socket.emit('room', 'teste');
});

export  default socket; 