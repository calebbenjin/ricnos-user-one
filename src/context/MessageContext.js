import {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';
import Pusher from 'pusher-js';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const router = useRouter();
  const [messageNotification, setMessageNotification] = useState(false);
  const { user } = useContext(AuthContext);

  // set up websocket connection to listen for new messages when not in the Message page

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('chat');

    channel.bind('App\\Events\\MessageSent', (data) => {
      // if route is /message dont set messageNotification

      if (
        data.chat[0].receiver_id === user.long_id &&
        router.pathname !== '/dashboard/message'
      ) {
        setMessageNotification(true);
      }
    });

    return () => {
      pusher.unsubscribe('chat');
    };
  });

  return (
    <MessageContext.Provider
      value={{ messageNotification, setMessageNotification }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
