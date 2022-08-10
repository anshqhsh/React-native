import {useCallback} from 'react';
import {io, Socket} from 'socket.io-client';
import Config from 'react-native-config';

let socket: Socket | undefined; // 리액트에 절대 하면 안되는 것.... from youtube

const useSocket = (): [Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect();
      socket = undefined;
    }
  }, []);
  if (!socket) {
    socket = io(`${Config.API_URL}`, {
      transports: ['websocket'],
    });
  }
  return [socket, disconnect];
};

export default useSocket;
